import React, { Dispatch } from "react";
import { Stack, Typography } from "@mui/material";

import { updateBodyPart } from "../contexts/ExerciseContext";
import { Action } from "../contexts/ExerciseContext/useExercise";
import { resolveBodyPartUri } from "../utils";

const BodyParts: React.FC<{
  item: string;
  bodyPart: string;
  dispatch: Dispatch<Action>;
}> = ({ item, bodyPart, dispatch }) => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      className="bodyPart-card"
      sx={{
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
        bgcolor: "#fff",
        borderTop: bodyPart === item ? "4px solid #ff2625 !important" : "none",
      }}
      onClick={() => {
        if (item !== "search") {
          updateBodyPart(dispatch)(item);
        }
      }}
    >
      <img
        src={resolveBodyPartUri(item)}
        alt="dumbbell"
        style={{ height: "60px" }}
        className="bodyPart-card-img"
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3A1212"
        textTransform="capitalize"
        className="bodyPart-card-text"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyParts;
