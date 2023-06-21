import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import "./App.css";
import { Navbar, Footer, ScrollToTopOnRouteChange } from "./components";
import { Home, ExerciseDetail } from "./pages";
import { ExercisesProvider } from "./contexts/ExerciseContext";

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <ScrollToTopOnRouteChange />
      <ExercisesProvider>
        <Box sx={{ maxWidth: "1488px" }} m="auto">
          <Navbar />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/exercise/:id" Component={ExerciseDetail} />
          </Routes>
        </Box>
        <Footer />
      </ExercisesProvider>
    </BrowserRouter>
  );
};

export default App;
