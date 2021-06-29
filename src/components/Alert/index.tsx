import React from "react";
import styled from "styled-components";

interface styleProps {
  type: string;
}

type componentProps = {
  msg: string;
  type: string;
};

const AlertWrapper = styled.div<styleProps>`
  position: relative;
  padding: .75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: .25rem;
  background-color: ${(props) => (props.type === "error" ? "red" : "green")};
  color: #fff;
  display: block;
  position: absolute;
  z-index: 999;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  animation: floatingAlert ease-in 5s forwards;
  animation-fill-mode: forwards;
  @keyframes floatingAlert {
    0% {
      opacity: 0;
      visibility: hidden;
      transform: translateX(-50%) scale(1.2);
    }
    9%{
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) scale(1);
    }
    91%{
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) scale(1);
    }
    100%{
      opacity: 0;
      visibility: hidden;
      transform: translateX(-50%) scale(1.2);
    }
  }
`;

const index = ({ msg, type = "success" }: componentProps) => {
  return <AlertWrapper type={type}>{msg}</AlertWrapper>;
};

export default index;
