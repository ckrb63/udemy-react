import ExpenseItem from "./ExpenseItem";
import './ExpenseGroup.css';
import Card from "../UI/Card";
import React, {useState} from "react";
import ExpensesFilter from "./ExpensesFilter";
function ExpesnseGroup(props) {
  const expenses = props.group;
  const [filterYear, setFilterYear] = useState(2021); 
  const onSelectYearHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  return (
    <div>
    
    <Card className="expenses">
    <ExpensesFilter selected={filterYear} onSelectYear={onSelectYearHandler}/>

    <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
        filter={filterYear}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
        filter={filterYear}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
        filter={filterYear}
      ></ExpenseItem>
      </Card>
      </div>
  );
}
export default ExpesnseGroup;