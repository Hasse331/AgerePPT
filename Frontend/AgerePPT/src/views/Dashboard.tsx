import Chart from "../components/Chart";
import Orders from "../components/Orders";
import Deposits from "../components/Deposits";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";

export default function Home() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Grid item xs={12} md={8} lg={9} sx={{ mb: 2 }}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 240,
          }}
        >
          <Chart />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={3} sx={{ mb: 2 }}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 240,
          }}
        >
          <Deposits />
        </Paper>
      </Grid>
      <Grid item xs={12} sx={{ mb: 2 }}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Orders />
        </Paper>
      </Grid>
    </div>
  );
}
