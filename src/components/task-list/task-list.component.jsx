import React from "react";
import { connect } from "react-redux";

import styled from "styled-components";

import TaskItem from "../task-item/task-item.component";
import Loading from "../loading/loading.component";

const StyledTaskList = styled.div`
  width: 80%;
  margin: 10px auto;
  padding: 20px 40px;
  background-color: #fafac6;
  border-radius: 20px;
`;

const TaskList = ({ todos, isPending, error }) => (
  <StyledTaskList>
    {isPending ? (
      <Loading />
    ) : error ? (
      "Error loading resources. Please try again"
    ) : todos.length === 0 ? (
      "Congratulations! You've completed them all!"
    ) : (
      todos.map((todo) => <TaskItem key={todo.id} item={todo} />)
    )}
  </StyledTaskList>
);

const mapStateToProps = ({ todos: { todos, isPending, error } }) => ({
  todos,
  isPending,
  error,
});

export default connect(mapStateToProps)(TaskList);
