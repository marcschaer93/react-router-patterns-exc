import { useParams, Navigate, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

export const Color = ({ colors }) => {
  const { color } = useParams();

  const currentColor = colors.find((c) => c.name === color);

  if (!currentColor) {
    return <Navigate to="/colors" />;
  }

  return (
    <Box
      sx={{
        backgroundColor: `${currentColor.value}`,
        height: "100vH",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link to="/colors">
        <Button sx={{ width: "200px" }} variant="contained" size="large">
          Back
        </Button>
      </Link>
    </Box>
  );
};
