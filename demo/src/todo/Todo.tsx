import React, { useCallback, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import styled from "@emotion/styled";
import { AddInput } from "./components/AddInput";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { Header } from "./components/Header";

const Wrapper = styled.div({
  backgroundColor: "darkblue",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
});

/**
* This is the initial todo state.
* Instead of loading this data on every reload,
* we should save the todo state to local storage,
* and restore on page load. This will give us
* persistent storage.
*/
const initialData: Todo[] = localStorage.getItem("todos") !== null ? JSON.parse(localStorage.getItem("todos")!) : [
  {
    id: uuid(),
    label: "Buy groceries",
    checked: false,
  },
  {
    id: uuid(),
    label: "Reboot computer",
    checked: false,
  },
  {
    id: uuid(),
    label: "Ace CoderPad interview",
    checked: true,
  },
];

function Todo() {
  const [todos, setTodos] = useState<Todo[]>(initialData);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  const addTodo = useCallback((label: string) => {
    setTodos((prev) => [
      {
        id: uuid(),
        label,
        checked: false,
      },
      ...prev,
    ]);
  }, []);

  const handleChange = useCallback((id: string, checked: boolean) => {
    // handle the check/uncheck logic
    setTodos((prev) => {
      const newTodos = [...prev];
      newTodos.forEach(todo => {
        if (todo.id === id) {
          todo.checked = checked;
        }
      });
      return newTodos;
    })
  }, []);

  const handleDelete = useCallback((id: string) => {
    setTodos((prev) => [...prev].filter(todo => todo.id !== id))
  }, []);


  return (
    <Wrapper>
      <Header>Todo List</Header>
      <AddInput onAdd={addTodo} />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem {...todo} onChange={handleChange} onDelete={handleDelete} key={todo.id}/>
        ))}
      </TodoList>
    </Wrapper>
  );
}

export default Todo;
