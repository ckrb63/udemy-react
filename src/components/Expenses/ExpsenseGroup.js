import ExpenseItem from "./ExpenseItem";
import "./ExpenseGroup.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
function ExpesnseGroup(props) {
  const expenses = props.group;
  const [filterYear, setFilterYear] = useState("2021");
  const onSelectYearHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  const filteredExpenses = expenses.filter((expense) => {
    return filterYear === expense.date.getFullYear().toString();
  });
  let expenseContent = <p>Nothing!</p>;
  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => {
      //if(filterYear==expense.date.getFullYear()){
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    });
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onSelectYear={onSelectYearHandler}
        />
        {expenseContent}
      </Card>
    </div>
  );
}
export default ExpesnseGroup;
