import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import ButtonAppBar from "./components/ButtonAppBar";
import { ColorRoutes } from "./components/ColorRoutes";
import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function App() {
  const [colors, setColors] = useState([]);

  const retrieveColorsFromLocalStorage = () => {
    let savedColors = localStorage.getItem("colors");
    if (savedColors) {
      try {
        savedColors = JSON.parse(savedColors);
        setColors(savedColors);
      } catch (error) {
        console.error("Error parsing JSON:", error);
        // Handle error or notify the user
      }
    }
  };

  useEffect(() => {
    retrieveColorsFromLocalStorage();
  }, []); // Empty dependency array ensures this runs only once on mount

  const handleAddColor = (newColor) => {
    const updatedColors = [newColor, ...colors];
    setColors(updatedColors);
    localStorage.setItem("colors", JSON.stringify(updatedColors));
  };

  return (
    <>
      <CssBaseline />

      <ButtonAppBar />

      <Box
        sx={{
          textAlign: "center",
          backgroundColor: "green",
          pt: "25px",
          height: "25vH",
        }}
      >
        <Typography variant="h3">World of Colors</Typography>
      </Box>

      <ColorRoutes colors={colors} addColor={handleAddColor} />
    </>
  );
}

export default App;
