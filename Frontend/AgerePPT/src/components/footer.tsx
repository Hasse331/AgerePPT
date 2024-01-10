import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

export const Footer = () => (
  <Box
    component="footer"
    sx={{ textAlign: "center", py: 1, backgroundColor: "gray" }}
  >
    <Copyright sx={{ pt: 1 }} />
  </Box>
);

function Copyright(props: any) {
  return (
    <div>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          AgerePPT
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </div>
  );
}
