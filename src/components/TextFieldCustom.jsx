import React from "react";
import TextField from "@mui/material/TextField";

export function TextFieldCustom({ req, placeholder, inputRef }) {
  switch (req) {
    case true:
      return (
        <TextField
          required
          id="outlined-required"
          label="Nueva Tarea"
          placeholder={placeholder}
          margin="normal"
          color="primary"
          focused
          inputRef={inputRef}
        />
      );
    case false:
      return (
        <TextField
          id="outlined"
          placeholder={placeholder}
          margin="normal"
          color="primary"
          focused
          inputRef={inputRef}
        />
      );
    default:
      return;
  }
}
