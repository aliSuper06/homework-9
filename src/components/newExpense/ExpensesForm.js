import React, { useState } from "react";
import Input from "../../UI/input/Input";
import Button from "../../UI/button/Button";
import styled from "styled-components";

const ExpensesForm = ({ onClick, addExpenseHandler }) => {
  const [inputText, setInputText] = useState("");
  const [inputNumber, setInputNumber] = useState("");
  const [inputDate, setInputDate] = useState("");

  function getInputValue(e) {
    setInputText(e.target.value);
  }

  function getNumberInput(e) {
    setInputNumber(e.target.value);
  }

  function getDateInput(e) {
    setInputDate(e.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const product = {
      id: new Date().toString(),
      title: inputText,
      price: +inputNumber,
      date: new Date(inputDate),
    };

    addExpenseHandler(product);

    setInputText("");
    setInputDate("");
    setInputNumber("");
  }
  return (
    <form onSubmit={submitHandler}>
      <FormContainer>
        <div>
          <Input
            marginBottom="20px"
            type="text"
            children="Заголовок"
            value={inputText}
            onChange={getInputValue}
          />
          <Input
            type="date"
            children="Дата"
            value={inputDate}
            onChange={getDateInput}
          />
        </div>

        <div>
          <Input
            type="number"
            children="Цена"
            value={inputNumber}
            onChange={getNumberInput}
          />
        </div>
      </FormContainer>

      <div className="btnDiv">
        <Button marginRight="20px" onClick={onClick}>
          Отмена
        </Button>
        <Button marginRight="12px">Добавить Расход</Button>
      </div>
    </form>
  );
};

export default ExpensesForm;

const FormContainer = styled.div`
  display: flex;
  gap: 30px;
  .btnDiv {
    margin-top: 15px;
    display: flex;
    justify-content: flex-end;
  }
`;
