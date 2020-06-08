import React from "react";

import styled, { keyframes } from "styled-components";

const LoadingWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

const LoadingText = styled.h2`
  font-size: 2.3em;
  font-weight: bold;
`;

const Animation = keyframes`
  0% {margin-bottom: 0;}
  50% {margin-bottom: 15px}
  100% {margin-bottom: 0}
`;

const Dot = styled.div`
  background-color: black;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  display: flex;
  align-self: flex-end;

  /* Animation goes here */
  animation: ${Animation} 0.5s linear infinite;
  animation-delay: ${(props) => props.delay};
`;

const Loading = () => (
  <LoadingWrapper>
    <LoadingText>LOADING</LoadingText>
    <Dot delay="0s" />
    <Dot delay=".1s" />
    <Dot delay=".2s" />
  </LoadingWrapper>
);

export default Loading;
