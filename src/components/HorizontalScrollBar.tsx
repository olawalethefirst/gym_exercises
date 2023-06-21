// @ts-nocheck -hold
import { Box, Typography } from "@mui/material";
import React, { Dispatch, useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import { BodyPart, ExerciseCard } from "./";
import rightArrowIcon from "../assets/icons/right-arrow.png";
import leftArrowIcon from "../assets/icons/left-arrow.png";
import { Exercise } from "../types";
import { Action } from "../contexts/ExerciseContext/useExercise";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography
      onClick={() => {
        scrollPrev();
      }}
      className="left-arrow"
    >
      <img src={leftArrowIcon} alt="left-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography
      onClick={() => {
        scrollNext();
      }}
      className="right-arrow"
    >
      <img src={rightArrowIcon} alt="right-arrow" />
    </Typography>
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
    <Box position="relative" maxWidth="100%">
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        scrollContainerClassName="horizontal-scroll"
      >
        {data.map((item) => (
          <Box
            key={typeof item === "string" ? item : item.id}
            itemId={typeof item === "string" ? item : item.id}
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
    </Box>
  );
};

export default HorizontalScrollBar;
