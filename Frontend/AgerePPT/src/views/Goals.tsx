import { useState } from "react";
import {
  AppBar,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function Goals() {
  const [goals, setGoals] = useState([]);
  const [goalName, setGoalName] = useState("");
  const [completedDate, setCompletedDate] = useState("");
  const [priority, setPriority] = useState("");

  const addGoal = () => {
    if (goalName) {
      const newGoal = {
        name: goalName,
        completed: completedDate,
        priority: priority,
      };
      setGoals([...goals, newGoal]);
      setGoalName("");
      setCompletedDate("");
      setPriority("");
    }
  };

  return (
    <div>
      <h1 style={{ marginBottom: "20px" }}>Goal List</h1>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: 16 }}>
              <Typography variant="h5" style={{ marginBottom: "20px" }}>
                Add Goal
              </Typography>
              <TextField
                label="Your Goal"
                fullWidth
                value={goalName}
                onChange={(e) => setGoalName(e.target.value)}
                style={{ marginBottom: "20px" }}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div style={{ display: "flex", marginBottom: "20px" }}>
                  <DatePicker label="By" />
                </div>
              </LocalizationProvider>
              <FormControl fullWidth>
                <InputLabel>Priority</InputLabel>
                <Select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  style={{ marginBottom: "20px" }}
                >
                  <MenuItem value="High">High</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="Low">Low</MenuItem>
                </Select>
              </FormControl>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={addGoal}
              >
                Add Goal
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: 16 }}>
              <Typography variant="h5">Goals</Typography>
              <ul>
                {goals.map((goal, index) => (
                  <li key={index}>
                    <strong>{goal.name}</strong>
                    <br />
                    Completed Date: {goal.completed}
                    <br />
                    Priority: {goal.priority}
                  </li>
                ))}
              </ul>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Goals;
