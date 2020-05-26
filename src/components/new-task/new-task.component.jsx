import React from "react";
import styled from "styled-components";

const NewItemSection = styled.section`
  border: 1px solid red;
  padding: 20px;
`;

const Paragraph = styled.p`
  color: #3a2e39;
  font-size: 24px;
`;

const NewTask = () => (
  <NewItemSection>
    <Paragraph>Add new task to the list</Paragraph>
    <h2>Input field placeholder</h2>
  </NewItemSection>
);

export default NewTask;
