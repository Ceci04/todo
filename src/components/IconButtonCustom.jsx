import React from "react";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Close";

export function IconButtonCustom({ func, icon, color}) {
  switch (icon) {
    case "AddIcon":
      return (
        <IconButton onClick={func} color={color}>
          <AddIcon />
        </IconButton>
      );
    case "DeleteIcon":
      return (
        <IconButton onClick={func} color={color}>
          <DeleteIcon />
        </IconButton>
      );
    case "CheckIcon":
      color = "success";
      return (
        <IconButton onClick={func} color={color}>
          <CheckIcon />
        </IconButton>
      );
    case "ClearIcon":
      color = "error";
      return (
        <IconButton onClick={func} color={color}>
          <ClearIcon />
        </IconButton>
      );
    default:
      return;
  }
}
