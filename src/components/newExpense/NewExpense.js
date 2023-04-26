import React, { useState } from "react";
import Button from "../../UI/button/Button";
import ExpensesForm from "./ExpensesForm";

const NewExpense = ({ addExpenseHandler }) => {
  const [state, setState] = useState(false);

  function openAndCloseExpensesFormHandler() {
    setState((prev) => !prev);
  }

  return (
    <div
      style={{
        backgroundColor: " #AD9BE9",
        width: "100%",
        padding: "30px",
        borderRadius: "20px",
      }}
    >
      {state ? (
        <ExpensesForm
          onClick={openAndCloseExpensesFormHandler}
          addExpenseHandler={addExpenseHandler}
        />
      ) : (
        <Button onClick={openAndCloseExpensesFormHandler}>
          Добавить новый расход
        </Button>
      )}
    </div>
  );
};

export default NewExpense;
