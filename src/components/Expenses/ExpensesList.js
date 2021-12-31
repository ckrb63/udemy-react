import "./ExpensesList.css";
import React from "react";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  if (props.item.length === 0)
    return <p className="expenses-list__fallback">There is nothing!</p>;
  return (
    <ul className="expenses-list">
      {props.item.map((expense) => (
        //if(filterYear==expense.date.getFullYear()){
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
      ))}
    </ul>
  );
}
export default ExpensesList;
