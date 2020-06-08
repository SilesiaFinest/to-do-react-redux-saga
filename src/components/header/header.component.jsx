import React from "react";

import styled from "styled-components";

const Title = styled.h1`
  color: #080357;
  padding: 0.4em;
  text-transform: uppercase;
  font-size: 3em;
  font-weight: 900;
  letter-spacing: 0.2em;
`;

const Header = () => (
  <div>
    <Title>My To-Do List</Title>
  </div>
);

export default Header;
