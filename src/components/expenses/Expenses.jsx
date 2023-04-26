import React, { useState } from "react";
import ExpensesCard from "../Card/ExpensesCard";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const { data, setNewProduct } = props;
  const [selectedYear, setSelectedYear] = useState("2023");

  function getSelectValue(event) {
    setSelectedYear(event.target.value);
  }

  const filteredYear = data.filter((el) => {
    return new Date(el.date).getFullYear().toString() === selectedYear;
  });

  console.log("data", data);

  const descending = () => {
    const dd = filteredYear.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
    console.log("dd", dd);
    setNewProduct(dd);
  };

  const ascending = () => {
    const dd = filteredYear.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });

    setNewProduct(dd);
  };

  return (
    <div
      style={{
        width: "100%",
        padding: "30px 20px",
        marginTop: "20px",
        backgroundColor: "#1F1F1F",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "20px",
      }}
    >
      <ExpenseFilter
        ascending={ascending}
        goDown={descending}
        getValue={getSelectValue}
      />

      {filteredYear.map((el) => {
        return <ExpensesCard key={el.id} el={el} onDelete={props.onDelete} />;
      })}
    </div>
  );
};

export default Expenses;
