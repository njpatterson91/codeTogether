import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Card = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Login() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Card>
        <TextField
          type="text"
          name="username"
          label="Email"
          margin="normal"
          fullWidth
        />
        <TextField
          type="password"
          name="username"
          label="Password"
          margin="normal"
          fullWidth
        />
        <Button variant="contained" fullWidth sx={{ padding: ".5rem" }}>
          Login
        </Button>
        <Button fullWidth sx={{ padding: ".5rem" }}>
          Forgot Password?
        </Button>
        <Button variant="contained" sx={{ padding: ".5rem" }} color="success">
          Create new account
        </Button>
      </Card>
    </Box>
  );
}
