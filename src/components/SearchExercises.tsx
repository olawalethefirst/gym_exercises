import { useState, useEffect, useContext } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import { fetchData, bodyPartsEndpoint } from "../utils";
import { HorizontalScrollBar } from "./";
import type { BodyPart } from "../types";
import ExercisesContext, {
  updateBodyPart,
  updateBodyParts,
  updateSearchString,
} from "../contexts/ExerciseContext";

const SearchExercises: React.FC<{}> = () => {
  const {
    state: { bodyPart, bodyParts },
    dispatch,
  } = useContext(ExercisesContext);
  const [search, setSearch] = useState("");

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedSearch = search.trim();
    if (trimmedSearch.length > 0) {
      updateBodyPart(dispatch)("search");
      updateSearchString(dispatch)(trimmedSearch);
      setSearch("");
    }
  };

  useEffect(() => {
    const setBodyParts = async () => {
      try {
        const bodyPartsData: BodyPart[] = await fetchData(bodyPartsEndpoint);
        const bodyParts = bodyPartsData.map((bodyPart) => bodyPart.name);

        updateBodyParts(dispatch)(bodyParts);
      } catch (error) {
        console.error("Error fetching bodyParts ", error);
      }
    };

    setBodyParts();
  }, [dispatch]);

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center">
      <Typography
        fontWeight={700}
        mb="50px"
        textAlign="center"
        sx={{ fontSize: { xs: "30px", sm: "44px" } }}
      >
        Awesome Exercises You Should Know
      </Typography>

      <form style={{ width: "100%" }} onSubmit={handleSearch}>
        <Box position="relative" mb="150px" width="100%" maxWidth="950px">
          <TextField
            sx={{
              input: {
                fontWeight: "700",
                border: "none",
                borderRadius: "4px",
                paddingRight: { xs: "95px", md: "155px" },
              },
              width: "100%",
              backgroundColor: "#fff",
              borderRadius: "40px",
            }}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value.toLowerCase());
            }}
            placeholder="Search Exercises"
            type="text"
          />
          <Button
            type="submit"
            className="search-btn"
            sx={{
              bgcolor: "#ff2625",
              color: "#fff",
              textTransform: "none",
              paddingRight: { xs: "20px", md: "40px" },
              paddingLeft: { xs: "20px", md: "40px" },
              fontSize: { xs: "14px", lg: "20px" },
              top: 2,
              bottom: 2,
              position: "absolute",
              right: 2,
            }}
          >
            Search
          </Button>
        </Box>
      </form>

      <Box alignSelf="flex-start" maxWidth="100%">
        <HorizontalScrollBar
          data={bodyParts}
          bodyPart={bodyPart}
          dispatch={dispatch}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
