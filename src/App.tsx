import React, { useState } from "react";
import "./App.css";
import {TodoTable} from "./components/TodoTable";
import {NewTodoForm} from "./components/NewTodoForm";

export const App = () => {

  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [todos, setTodos] = useState([
    { rowNum: 1, rowDesc: "Feed Puppy", rowAssigned: "User One" },
    { rowNum: 2, rowDesc: "Water Plants", rowAssigned: "User Two" },
    { rowNum: 3, rowDesc: "Make Dinner", rowAssigned: "User One" },
    { rowNum: 4, rowDesc: "Charge Phone", rowAssigned: "User One" },
  ]);

  const addTodo = (description: string, assigned: string) => {
    let rowNum = 0;
    if (todos.length > 0) {
      rowNum = todos[todos.length - 1].rowNum + 1;
    } else {
      rowNum = 1;
    }
    const newTodo = {
      rowNum: rowNum,
      rowDesc: description,
      rowAssigned: assigned,
    };
    setTodos((todos) => [...todos, newTodo]);
  };

  const deleteTodo = (deleteRowNum: number) => {
    let filtered = todos.filter(function (value) {
      return value.rowNum !== deleteRowNum;
    });
    setTodos(filtered);
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your To-Dos</div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={deleteTodo} />
          <button
            className="btn btn-primary"
            onClick={() => setShowAddTodoForm(!showAddTodoForm)}
          >
            {showAddTodoForm ? 'Close New Todo Form': 'New Todo'}
          </button>
          {showAddTodoForm &&
            <NewTodoForm addTodo={addTodo} />}
        </div>
      </div>
    </div>
  );
}
