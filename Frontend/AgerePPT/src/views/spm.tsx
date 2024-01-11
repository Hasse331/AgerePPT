import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function AddProjectForm({ addProject }) {
  const [projectName, setProjectName] = useState("");
  const [timeline, setTimeline] = useState([null, null]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject({ projectName, timeline });
    setProjectName("");
    setTimeline([null, null]);
  };

  return (
    <Paper style={{ padding: 16, maxWidth: "550px" }}>
      <form onSubmit={handleSubmit}>
        <Grid container style={{ marginBottom: "20px" }}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Project Name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              style={{ maxWidth: "520px" }}
            />
          </Grid>
        </Grid>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div style={{ display: "flex", marginBottom: "20px" }}>
            <Grid item xs={6} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
              <DatePicker label="Start" />
            </Grid>
            <Grid item xs={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <DatePicker label="End" />
            </Grid>
          </div>
        </LocalizationProvider>

        <TextField
          fullWidth
          label="Project Description"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          multiline // Enable multiline input
          rows={4} // Specify the number of rows (adjust as needed)
          variant="outlined" // You can use "outlined" or "filled" variant
          style={{
            fontSize: "16px",
            height: "120px",
            marginBottom: "20px",
            maxWidth: "520px",
          }} // Adjust font size and height
        />
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Add Project
          </Button>
        </Grid>
      </form>
    </Paper>
  );
}

export default function Spm() {
  const [projects, setProjects] = useState([]);

  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        SPM
      </Typography>
      <AddProjectForm addProject={addProject} />
      <List>
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <Paper
              style={{ padding: 16, maxWidth: "550px", marginBottom: "10px" }}
            >
              <ListItem>
                <ListItemText
                  primary={project.projectName}
                  secondary={`Timeline: ${project.timeline}`}
                />
              </ListItem>
              {index < projects.length - 1 && <Divider />}
            </Paper>
          </React.Fragment>
        ))}
      </List>
    </Container>
  );
}
