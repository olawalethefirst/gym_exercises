import { Box, Stack, Typography } from "@mui/material";

import logo from "../assets/images/Logo.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack
        bgcolor="transparent"
        gap="40px"
        p="20px"
        alignItems="center"
        justifyContent="center"
        direction="row"
      >
        <img src={logo} alt="logo" style={{ width: "25px" }} />
        <Typography marginLeft="-30px"> by @olawalethefirst</Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
