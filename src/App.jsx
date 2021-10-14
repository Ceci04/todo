import React, { useState, Fragment, useRef, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { TodoList } from "./components/TodoList";
import { IconButtonCustom } from "./components/IconButtonCustom";
import { TextFieldCustom } from "./components/TextFieldCustom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

// Abreviaturas
//LS - LocalStorage

export function App() {
  // KEY para el LS.
  const KEY = "todoApp.todos";

  const [todos, setTodos] = useState([]);

  const todoTaskRef = useRef();

  // Montamos las tareas que están guardadas en el LS.
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(KEY));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  // Guardamos en el LS el todos cada vez que se modifica.
  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todos));
  }, [todos]);

  // Función para añadir las tareas.
  const handleTodoAdd = () => {
    // Almacenamos el value del input.
    const task = todoTaskRef.current.value;
    // Si el texto esta vacio salimos con el return.
    if (task === "") return;

    // Almacenamos el todos que ya existe y añadimos la nueva tarea con un id autogenerado, la tarea y el estado de completada en falso por defecto.
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuid(), task, completed: false }];
    });

    // Colocamos como null el valor del input para borrar el texto añadido.
    todoTaskRef.current.value = null;
  };

  // Función para cambiar el estado de la tarea.
  const toggleTodo = (id) => {
    // Almacenamos el todos actual.
    const newTodos = [...todos];
    // Buscamos la tarea por el ID.
    const todo = newTodos.find((todo) => todo.id === id);
    // Le colocamos el estado de forma inversa.
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  // Función para eliminar la tarea.
  const deleteTodo = (id) => {
    // Almacenamos el todos actual.
    const newTodos = [...todos];
    // Buscamos la tarea por el ID.
    const todo = newTodos.find((todo) => todo.id === id);
    const index = newTodos.indexOf(todo);
    
     if(index > -1){
         newTodos.splice(index, 1);
     }
    // Le colocamos el estado de forma inversa.
    setTodos(newTodos);
  };

  // Función para borrar las tareas completadas del listado.
  const handleClearCompleted = () => {
    // Almacena todas las tareas que no están completadas.
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
    <Fragment>
      <Container>
        <Typography variant="h1" sx={{ fontSize: 26 }} textAlign="center">
          TODO List
        </Typography>
        <Typography variant="h2" sx={{ fontSize: 16 }} textAlign="center">
          Te quedan {todos.filter((todo) => !todo.completed).length} tareas por
          terminar!
        </Typography>
        <div id="newTask">
          <TextFieldCustom
            req={true}
            placeholder={""}
            inputRef={todoTaskRef}
          ></TextFieldCustom>
          {/* IconButton */}
          <div id="btnGroup">
            <IconButtonCustom
              func={handleTodoAdd}
              icon={"AddIcon"}
              color={"success"}
            ></IconButtonCustom>
            <IconButtonCustom
              func={handleClearCompleted}
              icon={"DeleteIcon"}
              color={"error"}
            ></IconButtonCustom>
          </div>
        </div>
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
      </Container>
    </Fragment>
  );
}
