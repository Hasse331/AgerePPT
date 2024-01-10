import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Tools() {
  // TASK: DRY FIX
  return (
    <>
      <h1>Tools</h1>
      <Grid item xs={12} md={8} lg={9} sx={{ mb: 2 }}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: {
              sx: 200,
              sm: 150,
              md: 90,
            },
          }}
        >
          {" "}
          <Typography variant="h5">Simple Project Manager (SPM)</Typography>
          <Typography variant="body1">
            Manage your projects and make organized plans, project notes, task
            and priority lists.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={8} lg={9} sx={{ mb: 2 }}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: {
              sx: 200,
              sm: 150,
              md: 90,
            },
          }}
        >
          {" "}
          <Typography variant="h5">Worktime tracker</Typography>
          <Typography variant="body1">
            Track how many hours you have used for each of your projects or in
            total.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={8} lg={9} sx={{ mb: 2 }}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: {
              sx: 200,
              sm: 150,
              md: 90,
            },
          }}
        >
          {" "}
          <Typography variant="h5">Daily schedule planner</Typography>
          <Typography variant="body1">
            Use the best methods, like time blocking and pomodoro to build
            optimal daily schedule.
          </Typography>
        </Paper>
      </Grid>
    </>
  );
}
