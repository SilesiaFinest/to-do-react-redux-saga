import React from "react";

import Header from "./components/header/header.component";
import NewTask from "./components/new-task/new-task.component";
import TaskList from "./components/task-list/task-list.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <NewTask />
      <TaskList />
    </div>
  );
}

export default App;
