import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { IconButtonCustom } from "./IconButtonCustom";

export function TodoItem({ todo, toggleTodo, deleteTodo }) {
  // Guardamos por separado los valores del objeto.
  const { id, task, completed } = todo;
  let icon;

  // Función para cambiar el estado de la tarea.
  const handleTodoClick = () => {
    toggleTodo(id);
  };

  // Función para borrar las tareas completadas del listado.
  const handleDelete = () => {
    deleteTodo(id);
  };

  if (!completed) {
    icon = "CheckIcon";
  } else {
    icon = "ClearIcon";
  }

  return (
    <Card id="todoItem">
      <CardContent>{task}</CardContent>
      <CardActions>
        <IconButtonCustom
          func={handleTodoClick}
          checked={!completed}
          icon={icon}
        ></IconButtonCustom>
        <IconButtonCustom
          func={handleDelete}
          icon={"DeleteIcon"}
          color={"error"}
        ></IconButtonCustom>
      </CardActions>
    </Card>
  );
}
