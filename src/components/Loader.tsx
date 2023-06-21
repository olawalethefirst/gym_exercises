import React from "react";
import { Stack, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      display="flex"
      flex={1}
      p={"50px"}
    >
      <CircularProgress sx={{ color: "#ff2625" }} />
    </Stack>
  );
};

export default Loader;
