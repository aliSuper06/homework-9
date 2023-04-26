import React from "react";
import "./Button.css";
import styled from "styled-components";

const Button = (props) => {
  return (
    <ButtonStyled
      disabled={props.disabled}
      className="button"
      onClick={props.onClick}
      style={{ marginRight: props.marginRight }}
    >
      {props.children}
    </ButtonStyled>
  );
};

export default Button;

const ButtonStyled = styled.button`
  .button {
    padding: 18px;
    font-weight: 600;
    color: aliceblue;
    background-color: #4a026b;
    border: none;
    border-radius: 10px;
  }

  &:hover {
    background-color: #72159e;
  }
  :disabled {
    background-color: #73159eb7;
  }
`;
