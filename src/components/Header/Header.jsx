import React from "react";
import styled from "styled-components";

export const Header = ({ showExpenses, showUser, isLogin, LogoutHandler }) => {
  return (
    <HeaderCont>
      {isLogin && (
        <div className="btn_box">
          <button onClick={showExpenses}>Expenses</button>
          <button onClick={showUser}>Users</button>
          <button onClick={LogoutHandler}>Logout</button>
        </div>
      )}
    </HeaderCont>
  );
};

const HeaderCont = styled.div`
  background-color: #b17be4;
  width: 95%;
  height: 15vh;
  margin-bottom: 20px;
  display: flex;
  justify-content: end;
  padding-right: 60px;
  gap: 30%;
  button {
    margin-top: 10px;
    width: 100px;
    height: 65px;
  }
  .btn_box {
    display: flex;
    gap: 20px;
  }
`;
