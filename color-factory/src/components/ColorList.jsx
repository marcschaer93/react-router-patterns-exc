import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export const ColorList = ({ colors }) => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Box sx={{ mt: "50px" }}>
        <Typography variant="h5">Select a Color</Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {colors.map((color) => (
            <li key={color.name}>
              <Link to={`/colors/${color.name}`}>
                <Typography
                  variant="h6"
                  sx={{ textDecoration: "none", color: `${color.value}` }}
                >
                  {color.name}
                </Typography>
              </Link>
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
};

{
  /* <Link
sx={{ textDecoration: "none" }}
key={color.name}
to={`/colors/${color.name}`}
>
<Typography
  variant="h4"
  sx={{ textDecoration: "none", color: `${color.value}` }}
>
  {color.name}
</Typography>
</Link> */
}
