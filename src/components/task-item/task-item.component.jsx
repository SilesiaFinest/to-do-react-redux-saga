import React from "react";
import { connect } from "react-redux";

import styled from "styled-components";

import { toggleCompleted, removeTask } from "../../redux/todos/todos.actions";

const StyledTaskItem = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
  margin-top: 6px;
  background-color: #ffc15e;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TodoTitle = styled.span`
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  cursor: pointer;
`;

const OperatorsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 24px;
  width: 10%;
`;

const StyledOperator = styled.span`
  cursor: pointer;
  color: ${({ color }) => color};
`;

const TaskItem = ({ item, toggleTodoCompleted, removeTodoTask }) => {
  const { id, title, completed } = item;
  return (
    <div>
      <StyledTaskItem>
        <TodoTitle
          completed={completed}
          onClick={() => toggleTodoCompleted(id)}
        >
          {title}
        </TodoTitle>
        {completed ? (
          <OperatorsWrapper>
            <StyledOperator color={"red"} onClick={() => removeTodoTask(id)}>
              &#10007;
            </StyledOperator>
            <StyledOperator
              color={"green"}
              onClick={() => toggleTodoCompleted(id)}
            >
              &#10003;
            </StyledOperator>
          </OperatorsWrapper>
        ) : (
          <OperatorsWrapper>
            <StyledOperator onClick={() => toggleTodoCompleted(id)}>
              &#10003;
            </StyledOperator>
          </OperatorsWrapper>
        )}
      </StyledTaskItem>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleTodoCompleted: (id) => dispatch(toggleCompleted(id)),
  removeTodoTask: (id) => dispatch(removeTask(id)),
});

export default connect(null, mapDispatchToProps)(TaskItem);
