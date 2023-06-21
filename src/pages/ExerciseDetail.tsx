import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import {
  fetchData,
  youtubeOptions,
  exerciseBaseUrl,
  targetExercisesBaseUrl,
  equipmentExercisesBaseUrl,
} from "../utils";
import { Exercise, YoutubeVideo } from "../types";
import {
  Detail,
  ExerciseVideos,
  SimilarExercises,
  Loader,
} from "../components";
import withImageUriCheckAsync from "../utils/withImageUriCheckAsync";
import withRehydrateDatabaseAsync from "../utils/withRehydrateDatabaseAsync";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState<Exercise>();
  const [exerciseVideos, setExerciseVideos] = useState<YoutubeVideo[]>([]);
  const [targetExercises, setTargetExercises] = useState<Exercise[]>([]);
  const [equipmentExercises, setEquipmentExercises] = useState<Exercise[]>([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      let exerciseDetailData = {} as Exercise;

      try {
        exerciseDetailData = await fetchData(`${exerciseBaseUrl}/${id}`);
        await withImageUriCheckAsync(
          exerciseDetailData.gifUrl,
          async (isValidImageUri) => {
            if (!isValidImageUri) {
              await withRehydrateDatabaseAsync(async () => {
                exerciseDetailData = await fetchData(
                  `${exerciseBaseUrl}/${id}`
                );
              })();
            }
          }
        )();

        setExerciseDetail(exerciseDetailData);
      } catch (error: any) {
        console.error("An error occured while fetching exercise", error);
      }

      try {
        if (exerciseDetailData.target) {
          const targetMuscleExercises: Exercise[] = await fetchData(
            `${targetExercisesBaseUrl}?target=${exerciseDetailData.target}`
          );
          setTargetExercises(targetMuscleExercises);
        }
      } catch (error) {
        console.error("Error fetching target exercises: ", error);
      }

      try {
        if (exerciseDetailData.equipment) {
          const equipmentExercises: Exercise[] = await fetchData(
            `${equipmentExercisesBaseUrl}?equipment=${exerciseDetailData.equipment}`
          );
          setEquipmentExercises(equipmentExercises);
        }
      } catch (error) {
        console.error("Error fetching equipment exercises: ", error);
      }

      try {
        if (exerciseDetailData.name) {
          const exerciseVideosData = await fetchData(
            `${"https://youtube-search-and-download.p.rapidapi.com"}/search?query=${
              exerciseDetailData.name
            }`,
            youtubeOptions
          );

          setExerciseVideos(exerciseVideosData.contents);
        }
      } catch (error) {
        console.error("Error fetching videos: ", error);
      }
    };

    fetchExerciseData();
  }, [id]);

  return (
    <Box
      sx={{
        padding: { xs: "20px", md: "40px" },
        mt: "50px",
        minHeight: "90vh",
      }}
    >
      {!exerciseDetail ? (
        <Loader />
      ) : (
        <>
          <Detail exerciseDetail={exerciseDetail} />
          <ExerciseVideos videos={exerciseVideos} name={exerciseDetail?.name} />
          <SimilarExercises
            exercises={targetExercises}
            description="Exercises that target the same muscle group"
          />
          <SimilarExercises
            exercises={equipmentExercises}
            description="Exercises that use the same equipment"
          />
        </>
      )}
    </Box>
  );
};

export default ExerciseDetail;
