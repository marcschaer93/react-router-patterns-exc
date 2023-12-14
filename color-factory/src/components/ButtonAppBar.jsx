import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" color="inherit" underline="none">
              Home
            </Link>
          </Typography>
          <Link
            href="/colors/new"
            color="inherit"
            underline="none"
            sx={{ "&:hover": { textDecoration: "none" } }}
          >
            <Button color="inherit">New Color</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
