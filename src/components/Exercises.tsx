import { useState, useRef, useEffect, useContext } from "react";
import { Pagination, Box, Stack, Typography } from "@mui/material";

import {
  fetchExercises,
  allExercisesEndpoint,
  bodyPartExercisesBaseUrl,
  searchExercisesBaseUrl,
} from "../utils";
import ExercisesContext, {
  updateExercisesOffset,
  updateExercises,
  updateLoadingExercises,
} from "../contexts/ExerciseContext";
import { ExerciseCard, Loader } from "./";

const exercisesPerPage = 9;

const Exercises = () => {
  const {
    state: {
      bodyPart,
      exercises,
      exercisesOffset,
      searchString,
      loadingExercises,
    },
    dispatch,
  } = useContext(ExercisesContext);
  const [currentPage, setCurrentPage] = useState(1);

  const exercisesRef = useRef<HTMLElement>(null);
  const scrollMetadata = useRef({
    bodyPart,
    currentPage,
    searchString,
  });
  const updateExercisesEffectMounted = useRef(false);

  const startIndex = (currentPage - 1) * exercisesPerPage;
  const endIndex = currentPage * exercisesPerPage;
  const currentExercises = exercises.slice(startIndex, endIndex);

  const paginate = (e: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const _updateExercisesOffset = () => {
      let element: HTMLElement | null = exercisesRef?.current;
      let offset = 0;

      if (element) {
        while (element) {
          offset = offset += element.offsetTop;
          element = element.offsetParent as HTMLElement;
        }

        updateExercisesOffset(dispatch)(offset);
      }
    };

    _updateExercisesOffset();
    window.addEventListener("resize", _updateExercisesOffset);

    return () => {
      window.removeEventListener("resize", _updateExercisesOffset);
    };
  }, [dispatch]);

  useEffect(() => {
    const setInitialExercises = async () => {
      updateLoadingExercises(dispatch)(true);

      try {
        const exercises = await fetchExercises(allExercisesEndpoint);
        updateExercises(dispatch)(exercises);
      } catch (error) {
        console.error("Error fetching all exercises: ", error);
      }

      updateLoadingExercises(dispatch)(false);
    };

    setInitialExercises();
  }, [dispatch]);

  useEffect(() => {
    const updateExercisesWithBodyPart = async () => {
      if (updateExercisesEffectMounted.current) {
        updateLoadingExercises(dispatch)(true);
        updateExercises(dispatch)([]);

        const exercisesRemoteUrl =
          bodyPart === "all"
            ? allExercisesEndpoint
            : bodyPart === "search"
            ? `${searchExercisesBaseUrl}?searchString=${searchString}`
            : `${bodyPartExercisesBaseUrl}?bodyPart=${bodyPart}`;

        try {
          const exercises = await fetchExercises(exercisesRemoteUrl);
          updateExercises(dispatch)(exercises);
        } catch (error) {
          console.error("Error fetching exercises: ", error);
        }

        updateLoadingExercises(dispatch)(false);
      } else {
        updateExercisesEffectMounted.current = true;
      }
    };

    updateExercisesWithBodyPart();
  }, [bodyPart, dispatch, searchString]);

  useEffect(() => {
    if (
      currentPage !== scrollMetadata.current.currentPage ||
      bodyPart !== scrollMetadata.current.bodyPart ||
      searchString !== scrollMetadata.current.searchString
    ) {
      scrollMetadata.current = {
        bodyPart,
        currentPage,
        searchString,
      };

      window.scroll({
        top: exercisesOffset,
        behavior: "smooth",
      });
    }
  }, [currentPage, bodyPart, exercisesOffset, searchString]);

  useEffect(() => {
    setCurrentPage(1);
  }, [exercises]);

  return (
    <Box
      id="exercises"
      ref={exercisesRef}
      sx={{
        mt: "110px",
      }}
    >
      <Typography
        variant="h3"
        mb="46px"
        fontSize={{ xs: "2.2rem", md: "3rem" }}
      >
        Showing Results:
      </Typography>

      <Stack
        direction="row"
        sx={{ gap: { xs: "40px" } }}
        flexWrap="wrap"
        alignItems="stretch"
      >
        {loadingExercises ? <Loader /> : null}

        {currentExercises.map((exercise) => (
          <ExerciseCard key={exercise.name} exercise={exercise} />
        ))}

        {exercises.length === 0 && !loadingExercises ? (
          <Typography variant="h5">No result</Typography>
        ) : null}
      </Stack>

      <Stack mt="100px" alignItems="center">
        {exercises.length > exercisesPerPage ? (
          <Pagination
            color="standard"
            shape="rounded"
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            size={"large"}
            onChange={paginate}
          />
        ) : null}
      </Stack>
    </Box>
  );
};

export default Exercises;
