import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

import { ColorForm } from "./ColorForm";

export const NewColor = () => {
  return (
    <Box>
      <Box>
        <Link to={"/colors/new"}>Add new Color</Link>
      </Box>
    </Box>
  );
};

{
  /* <ColorForm colors={colors} addColor={addColor} /> */
}
