import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import About from "../components/Landing/About";
import Login from "../components/Login/Login";

export default function Landing() {
  return (
    <Box>
      <Grid
        container
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-evenly"
        style={{ minHeight: "100vh" }}
        sx={{ padding: "2rem" }}
      >
        <Grid item xs={5} alignItems={"center"} justifyContent={"center"}>
          <Box>
            <About />
          </Box>
        </Grid>
        <Grid item xs={4} alignItems={"center"} justifyContent={"center"}>
          <Box>
            <Login />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
