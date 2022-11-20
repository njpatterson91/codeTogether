import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "../StyledComps/Card";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPass(e.target.value);
    }
    console.log(e);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Card>
        <TextField
          type="text"
          name="email"
          label="Email"
          margin="normal"
          value={email}
          onChange={(e) => {
            changeHandler(e);
          }}
          fullWidth
        />
        <TextField
          type="password"
          name="password"
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
