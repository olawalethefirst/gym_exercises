import React, { FC } from "react";
import { Stack, Box, Typography } from "@mui/material";

import { YoutubeVideo } from "../types";

const ExerciseVideos: FC<{
  videos: YoutubeVideo[];
  name?: string;
}> = ({ videos, name }) => {
  if (videos.length < 1) return null;

  return (
    <Box sx={{ marginTop: { xs: "100px", lg: "200px" } }}>
      <Typography variant="h3" mb="33px">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>

      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        sx={{
          flexDirection: "row",
          gap: "55px",
        }}
      >
        {videos.slice(0, 6).map((item) => {
          return (
            <a
              key={item.video.videoId}
              className="exercise-video"
              href={`https://olawalethefirst-youtube-clone.netlify.app/video/${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <img src={item.video.thumbnails[0].url} alt={item.video.title} />
              <Box>
                <Typography
                  variant="h5"
                  color="#000"
                  sx={{
                    maxHeight: "2.5em",
                    lineHeight: "1.25em",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item.video.title}
                </Typography>
                <Typography
                  color="#ff2625"
                  sx={{
                    maxHeight: "1.25em",
                    lineHeight: "1.25em",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item.video.channelName}
                </Typography>
              </Box>
            </a>
          );
        })}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
