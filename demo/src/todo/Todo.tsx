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

const nowEpoch = Date.now();

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
    created: nowEpoch,
    completed: null
  },
  {
    id: uuid(),
    label: "Reboot computer",
    created: nowEpoch,
    completed: null
  },
  {
    id: uuid(),
    label: "Ace CoderPad interview",
    created: nowEpoch,
    completed: nowEpoch
  },
];

function sortFunc(a: Todo, b: Todo) {
  if (a.completed && !b.completed) {
    return 1;
  } else if (!a.completed && b.completed) {
    return -1;
  } else if (a.completed && b.completed) {
    return a.completed > b.completed ? 1 : -1;
  }
  return a.created > b.created ? 1 : -1;
}
function Todo() {
  const sortedList = initialData.sort(sortFunc);
  const [todos, setTodos] = useState<Todo[]>(sortedList);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  const addTodo = useCallback((label: string) => {
    setTodos((prev) => [
      {
        id: uuid(),
        label,
        created: Date.now(),
        completed: null
      },
      ...prev,
    ].sort(sortFunc));
  }, []);

  const handleChange = useCallback((id: string, checked: boolean) => {
    // handle the check/uncheck logic
    setTodos((prev) => {
      const newTodos = [...prev];
      newTodos.forEach(todo => {
        if (todo.id === id) {
          todo.completed = checked ? Date.now() : null;
        }
      });
      return newTodos.sort(sortFunc);
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
