import { FC } from "react";
import { Box, Typography } from "@mui/material";

import { Exercise } from "../types";
import HorizontalScrollBar from "./HorizontalScrollBar";

const SimilarExercises: FC<{
  exercises: Exercise[];
  description: string;
}> = ({ exercises, description }) => {
  if (exercises.length < 1) return null;

  return (
    <Box
      sx={{
        mt: "100px",
      }}
    >
      <Typography variant="h4" mb="35px">
        {description}
      </Typography>

      <HorizontalScrollBar data={exercises} />
    </Box>
  );
};

export default SimilarExercises;
