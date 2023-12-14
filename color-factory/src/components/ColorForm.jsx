import { useState } from "react";
import { Typography, Box, TextField, Button, Popover } from "@mui/material";
import { ChromePicker } from "react-color";
import { useNavigate, Link } from "react-router-dom";

export const ColorForm = ({ colors, addColor }) => {
  const [color, setColor] = useState("#e72525"); // Initial color value
  const [colorName, setColorName] = useState("red");
  const [anchorEl, setAnchorEl] = useState(null); // For Popover anchor element

  const navigate = useNavigate();

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
  };

  const handleButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "color-picker-popover" : undefined;

  const handleSubmit = (e) => {
    e.preventDefault();
    const alreadyInColors = colors.find((c) => c.name === colorName);
    if (alreadyInColors) return null;

    const newColor = { name: colorName, value: color };
    addColor(newColor);
    navigate("/colors");
  };

  const handleChange = (e) => {
    setColorName(e.target.value);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="color-name"
        label="Color Name"
        size="small"
        variant="outlined"
        onChange={handleChange}
        name="colorName"
        value={colorName}
      />

      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <div
          onClick={handleButtonClick}
          style={{
            backgroundColor: color,
            height: "30px",
            width: "30px",
            marginRight: "20px",
            borderRadius: "4px",
          }}
        ></div>
        <TextField
          id="color-value"
          label="Color Value"
          size="small"
          variant="outlined"
          value={color}
          // onChange={handleChange}
          name="colorValue"
        />

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <ChromePicker color={color} onChange={handleColorChange} />
        </Popover>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Button variant="contained" type="submit" size="m">
          Add Color
        </Button>
        <Link to="/colors">
          <Button sx={{}} variant="contained" size="m">
            Back
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
