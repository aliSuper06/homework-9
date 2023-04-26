import React from "react";
import ExpensesCard from "../Card/ExpensesCard";

const ExpenseItem = ({ el }) => {
  return (
    <div>
      <ExpensesCard date={el.date} />
      <div>
        <h2>{el.title}</h2>
        <div className="">${el.price}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
