// @ts-nocheck -hold
import { Box } from "@mui/material";
import React, { Dispatch, useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import { BodyPart, ExerciseCard } from "./";
import rightArrowIcon from "../assets/icons/right-arrow.png";
import leftArrowIcon from "../assets/icons/left-arrow.png";
import { Exercise } from "../types";
import { Action } from "../contexts/ExerciseContext/useExercise";

export const LeftArrow = () => {
  const { scrollPrev, isFirstItemVisible } = useContext(VisibilityContext);

  return (
    <button
      onClick={() => {
        scrollPrev();
      }}
      className="left-arrow"
      disabled={isFirstItemVisible}
    >
      <img src={leftArrowIcon} alt="left-arrow" />
    </button>
  );
};

export const RightArrow = () => {
  const { scrollNext, isLastItemVisible } = useContext(VisibilityContext);

  return (
    <button
      onClick={() => {
        scrollNext();
      }}
      className="right-arrow"
      disabled={isLastItemVisible}
    >
      <img src={rightArrowIcon} alt="right-arrow" />
    </button>
  );
};

const HorizontalScrollBar: React.FC<
  | {
      data: string[];
      bodyPart: string;
      dispatch: Dispatch<Action>;
    }
  | {
      data: Exercise[];
    }
> = ({ data, bodyPart, dispatch }) => {
  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      scrollContainerClassName="horizontal-scroll"
    >
      {data.map((item) => (
        <Box
          key={typeof item === "string" ? item : item.id.toString()}
          itemId={typeof item === "string" ? item : item.id.toString()}
          height="100%"
          display="flex"
        >
          {typeof item === "string" ? (
            <BodyPart item={item} bodyPart={bodyPart} dispatch={dispatch} />
          ) : null}

          {typeof item === "object" ? <ExerciseCard exercise={item} /> : null}
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollBar;
