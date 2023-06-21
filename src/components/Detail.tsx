import { FC } from "react";
import { Typography, Stack, Button } from "@mui/material";

import { Exercise } from "../types";
import bodyPartImage from "../assets/icons/body-part.png";
import targetImage from "../assets/icons/target.png";
import equipmentImage from "../assets/icons/equipment.png";

const Detail: FC<{ exerciseDetail: Exercise }> = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      icon: bodyPartImage,
      name: bodyPart,
    },
    {
      icon: targetImage,
      name: target,
    },
    {
      icon: equipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { xs: "column-reverse", lg: "row" } }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />

      <Stack
        sx={{
          flex: 1,
          gap: { xs: "20px", lg: "35px" },
        }}
      >
        <Typography variant="h3" textTransform="capitalize">
          {name}
        </Typography>

        <Typography variant="h6" maxWidth={{ xs: "850px", lg: "100%" }}>
          Exercises keep you strong.{" "}
          <span style={{ textTransform: "capitalize", fontWeight: "bold" }}>
            {name}
          </span>{" "}
          is one of the best exercises to target your {target}. It will help you
          improve your mood and gain energy.
        </Typography>

        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                backgroundColor: "#fff2db",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
                overflow: "hidden",
                boxSizing: "border-box",
              }}
            >
              <img
                src={item.icon}
                alt={item.name}
                style={{
                  width: "50px",
                  height: "50px",
                  // objectFit: "contain",
                }}
              />
            </Button>
            <Typography textTransform="capitalize" variant="h5">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
