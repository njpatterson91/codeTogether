import React from "react";
import NavBar from "../components/NavBars/NavBar";
import Post from "../components/Posts/Post";
import Grid from "@mui/material/Grid";

export default function Home() {
  return (
    <Grid container direction="column">
      <Grid item xs={2}>
        <NavBar />
      </Grid>
      <Grid item xs={10} alignItems="center">
        <Post />
      </Grid>
    </Grid>
  );
}
