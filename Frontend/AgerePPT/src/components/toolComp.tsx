import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import ButtonBase from "@mui/material/ButtonBase";

type props = {
  title: string;
  description: string;
};

export default function ToolComp({ title, description }: props) {
  const Navigate = useNavigate();
  function handleClick() {
    Navigate("/spm");
  }

  return (
    <Grid item xs={12} md={8} lg={9} sx={{ mb: 2 }}>
      <ButtonBase onClick={handleClick} style={{ maxWidth: "500px" }}>
        <Paper
          sx={{
            textAlign: "left",
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: {
              md: 120,
            },
          }}
        >
          {" "}
          <Typography variant="h5">{title}</Typography>
          <Typography variant="body1">{description}</Typography>
        </Paper>
      </ButtonBase>
    </Grid>
  );
}
