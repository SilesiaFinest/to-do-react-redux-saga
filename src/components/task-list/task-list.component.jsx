import React from "react";
import styled from "styled-components";

const StyledTaskList = styled.div`
  background-color: #f9f8f8;
  width: 70%;
  margin: 0 auto;
`;

const TaskList = () => (
  <StyledTaskList>
    <p>all tasks</p>
    <p>to be displayed here</p>
  </StyledTaskList>
);

export default TaskList;
