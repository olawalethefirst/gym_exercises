import { Box } from "@mui/material";

import { HeroBanner, SearchExercises, Exercises } from "../components";

const Home = () => {
  return (
    <Box sx={{ padding: { xs: "20px", md: "40px" }, mt: "50px" }}>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  );
};

export default Home;
