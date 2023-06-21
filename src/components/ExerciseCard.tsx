import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Box, Stack, Button, Typography } from "@mui/material";

import { Exercise } from "../types";

const ExerciseCard: FC<{ exercise: Exercise }> = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img
        style={{ minHeight: "400px" }}
        src={exercise.gifUrl}
        alt={exercise.name}
        loading="lazy"
      />

      <Box sx={{ marginTop: "40px", marginBottom: "40px" }}>
        <Stack direction="row">
          <Button
            sx={{
              ml: "21px",
              color: "#fff",
              bgcolor: "#ffa9a9",
              fontSize: "14px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
          >
            {exercise.bodyPart}
          </Button>

          <Button
            sx={{
              ml: "21px",
              color: "#fff",
              bgcolor: "#fcc757",
              fontSize: "14px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
          >
            {exercise.target}
          </Button>
        </Stack>
        <Typography
          m="21px"
          color="#000"
          fontSize="20px"
          fontWeight="600"
          mt="11px"
          textTransform="capitalize"
        >
          {exercise.name}
        </Typography>
      </Box>
    </Link>
  );
};

export default ExerciseCard;
