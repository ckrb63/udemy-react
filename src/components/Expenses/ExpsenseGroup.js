import ExpenseItem from "./ExpenseItem";
import "./ExpenseGroup.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
function ExpesnseGroup(props) {
  const expenses = props.group;
  const [filterYear, setFilterYear] = useState("2021");
  const onSelectYearHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  const filteredExpenses = expenses.filter((expense) => {
    return filterYear === expense.date.getFullYear().toString();
  });
  //console.log(filterYear);
  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onSelectYear={onSelectYearHandler}
        />
        <ExpensesList item={filteredExpenses}/>
      </Card>
    </li>
  );
}
export default ExpesnseGroup;
