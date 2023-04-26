import React, { useState } from "react";
import styled from "styled-components";
import Button from "../UI/button/Button";

export const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  };

  const passwrodChangeHandler = (e) => {
    setEnteredPassword(e.target.value);

    setFormIsValid(
      e.target.value.trim().length > 6 && enteredEmail.includes("@")
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = () => {
    props.onLogin();
  };

  return (
    <>
      <RegistrationCont>
        <div>
          <div className="input">
            <InputForm onSubmit={submitHandler}>
              <InputBox>
                <label htmlFor="email">email</label>
                <input
                  value={enteredEmail}
                  onChange={emailChangeHandler}
                  onBlur={validateEmailHandler}
                  type="email"
                  placeholder="enter your email"
                  style={
                    emailIsValid === false ? { backgroundColor: "red" } : null
                  }
                />
              </InputBox>
              <InputBox>
                <label htmlFor="password">password</label>
                <input
                  value={enteredPassword}
                  onChange={passwrodChangeHandler}
                  onBlur={validatePasswordHandler}
                  type="password"
                  placeholder="enter your password"
                  style={
                    passwordIsValid === false
                      ? { backgroundColor: "red" }
                      : null
                  }
                />
              </InputBox>
            </InputForm>
          </div>
        </div>
        <Button onClick={submitHandler} disabled={!formIsValid}>
          Login
        </Button>
      </RegistrationCont>
    </>
  );
};

const InputBox = styled.div`
  display: flex;
  gap: 30px;
`;

const RegistrationCont = styled.div`
  width: 50%;
  padding: 20px;
  border-radius: 20px;
  background-color: #ffff;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
`;
const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  input {
    width: 500px;
    height: 25px;
  }
  input:focus {
    background-color: grey;
  }
`;
