import React from "react";
import { Typography, Container } from "@mui/material";

const Home = () => {
  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Welcome to the Kanban Board App
      </Typography>
      <Typography variant="h6" align="center">
        Click on "Kanban Board" in the navbar to manage tasks.
      </Typography>
    </Container>
  );
};

export default Home;
