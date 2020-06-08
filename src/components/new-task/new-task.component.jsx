import React from "react";
import { connect } from "react-redux";

import styled from "styled-components";

import { addTask } from "../../redux/todos/todos.actions";

const NewItemSection = styled.section`
  padding: 0 10px 10px 10px;
  height: 100px;
`;

const StyledTitle = styled.h2`
  color: #3a2e39;
  font-size: 24px;
  padding: 10px;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
`;

const FormInput = styled.input`
  background-color: #080357;
  border: 0;
  border-radius: 10px;
  width: 300px;
  height: 40px;
  padding: 0 10px;
  margin: 0 10px;
  font-size: 18px;
  color: white;

  ::placeholder {
    color: white;
    opacity: 0.6;
  }

  &:focus {
    outline: none;
  }
`;

const FormButton = styled.button`
  height: 40px;
  width: 70px;
  border: 0;
  border-radius: 5px;
  background-color: #ffc15e;
  cursor: pointer;
  font-size: 18px;
  font-weight: bolder;

  &:focus {
    outline: none;
  }
`;

const NewTask = ({ addTodo }) => {
  // using variable for input to avoid keeping it in global store
  // no need for state update after every char
  let input;

  return (
    <NewItemSection>
      <StyledTitle>Add new task to the list</StyledTitle>
      <StyledForm
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          addTodo(input.value);
          input.value = "";
        }}
      >
        <FormInput
          type="text"
          placeholder="Enter your new task"
          ref={(node) => (input = node)}
        />
        <FormButton type="submit">Add</FormButton>
      </StyledForm>
    </NewItemSection>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addTodo: (text) => dispatch(addTask(text)),
});

export default connect(null, mapDispatchToProps)(NewTask);
