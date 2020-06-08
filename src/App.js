import React, { useEffect } from "react";
import { connect } from "react-redux";

import { requestTodosAction } from "./redux/todos/todos.actions";

import ErrorBoundary from "./ErrorBoundary";
import Header from "./components/header/header.component";
import NewTask from "./components/new-task/new-task.component";
import TaskList from "./components/task-list/task-list.component";

import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Lato", sans-serif;
  background-color: #B0D0D3;
  text-align: center;
}
`;

const StyledSubTitle = styled.h2`
  padding: 30px;
  color: #db2b39;
  height: 100px;
`;

function App({ onRequestTodos, todos }) {
  useEffect(() => {
    onRequestTodos();
  }, [onRequestTodos]);
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      {todos.length < 10 ? (
        <NewTask />
      ) : (
        <StyledSubTitle>
          Complete some tasks from your list to add a new one
        </StyledSubTitle>
      )}
      <ErrorBoundary>
        <TaskList />
      </ErrorBoundary>
    </div>
  );
}

const mapStateToProps = ({ todos: { todos } }) => ({
  todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRequestTodos: () => dispatch(requestTodosAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
