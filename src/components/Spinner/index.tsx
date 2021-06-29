import React from "react";
import styled from "styled-components";

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  &:after {
    content: " ";
    display: block;
    width: 20px;
    height: 20px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #FFAD00;
    border-color: #FFAD00 transparent #FFAD00 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = () => {
  return <SpinnerWrapper></SpinnerWrapper>;
};

export default Spinner;
