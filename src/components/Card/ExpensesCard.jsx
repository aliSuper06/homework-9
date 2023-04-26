import React from "react";
import styled from "styled-components";

const ExpensesCard = ({ el, onDelete }) => {
  const dateMonth = new Date(el.date).toLocaleString("ru-ru", {
    month: "long",
  });
  const dateYear = new Date(el.date).getFullYear().toString();
  const dateDay = new Date(el.date).getDate().toString();

  return (
    <Container>
      <div className="left-side">
        <div className="p-date">
          <span>{dateMonth}</span>
          <span>{+dateYear}</span>
          <span className="num">{+dateDay}</span>
        </div>
        <p className="title">{el.title}</p>
      </div>
      <p className="price">{el.price} сом</p>
      <button onClick={() => onDelete(el.id)}>Удалить </button>
    </Container>
  );
};

export default ExpensesCard;

const Container = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  padding: 20px 20px;
  align-items: center;
  background-color: #4b4b4b;
  border-radius: 15px;
  width: 96%;
  .left-side {
    display: flex;
    justify-content: space-around;
  }
  .p-date {
    text-align: center;
    color: #ffffff;
    box-sizing: border-box;
    width: 82.11px;
    height: 80px;
    background: #2a2a2a;
    border: 1px solid #ffffff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    font-weight: 600;
  }
  .num {
    font-size: 23px;
    font-weight: 700;
  }
  .title {
    display: flex;
    align-items: center;
    margin-left: 30px;
    font-size: 25px;
    font-weight: bold;
    color: #ffffff;
  }
  .price {
    width: 90px;
    background-color: #40005d;
    border: 2px solid #ffffff;
    border-radius: 10px;
    color: #ffffff;
    padding: 10px;
    font-weight: bold;
    font-size: 20px;
  }
`;
