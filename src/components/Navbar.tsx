import { memo } from "react";
import { Link } from "react-router-dom";
import { Stack, Typography } from "@mui/material";

import logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      sx={{ gap: { xs: "40px", sm: "122px" }, mt: { xs: "20px", sm: "32px" } }}
      px={{ xs: "20px", md: "40px" }}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <Stack
          direction="row"
          gap="5px"
          alignItems="baseline"
          display={{ md: "none" }}
        >
          <img
            src={logo}
            alt="logo"
            style={{ width: "38px", height: "38px" }}
          />
          <Typography
            sx={{
              fontSize: "2rem",
              lineHeight: "2rem",
              background:
                "linear-gradient(90deg, rgba(255,38,37,1) 0%, rgba(66,16,12,1) 67%)",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
              fontWeight: "500",
            }}
          >
            Exercises
          </Typography>
        </Stack>
        <Stack
          direction="row"
          gap="5px"
          alignItems="baseline"
          display={{ xs: "none", md: "flex" }}
        >
          <img
            src={logo}
            alt="logo"
            style={{ width: "48px", height: "48px" }}
          />
          <Typography
            sx={{
              fontSize: "2.5rem",
              lineHeight: "2.5rem",
              background:
                "linear-gradient(90deg, rgba(255,38,37,1) 0%, rgba(66,16,12,1) 67%)",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
              fontWeight: "500",
            }}
          >
            Exercises
          </Typography>
        </Stack>
      </Link>
    </Stack>
  );
};

export default memo(Navbar);
