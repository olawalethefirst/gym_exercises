import { useContext } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";

import bannerImage from "../assets/images/banner.png";
import ExercisesContext from "../contexts/ExerciseContext";

const HeroBanner = () => {
  const {
    state: { exercisesOffset },
  } = useContext(ExercisesContext);

  return (
    <Box sx={{ mt: { lg: "200px" }, mb: "100px" }} position="relative">
      <Stack direction="row" gap="20px" alignItems="center">
        <Box
          sx={{ flex: 1, pt: { xs: "50px", md: 0 }, pb: { xs: "50px", md: 0 } }}
        >
          <Typography
            textTransform="capitalize"
            color="#ff2625"
            fontWeight="600"
            fontSize="26px"
          >
            fitness club
          </Typography>

          <Typography
            fontWeight="700"
            sx={{ fontSize: { xs: "40px", lg: "44px" } }}
            mb="20px"
            mt="20px"
          >
            Sweat, Smile <br /> and Repeat
          </Typography>

          <Typography mb="40px" fontSize="22px" lineHeight="35px">
            Check out the most effective exercises
          </Typography>

          <Button
            onClick={() => {
              window.scrollTo({ top: exercisesOffset, behavior: "smooth" });
            }}
            variant="contained"
            color="error"
            sx={{
              backgroundColor: "#ff2625",
              p: "10px",
              fontWeight: "bold",
              border: "1px solid #ff2625",
              ":hover": {
                color: "#ff2625",
                backgroundColor: "#fff",
              },
            }}
          >
            Explore Exercises
          </Button>
        </Box>

        <Box sx={{ flex: 1, display: { xs: "none", md: "block" } }}>
          <Box sx={{ marginTop: { lg: "-390px" } }} display="flex">
            <img
              style={{ width: "100%" }}
              className="hero-banner-img"
              src={bannerImage}
              alt="banner"
            />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default HeroBanner;
