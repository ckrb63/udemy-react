import ExpenseItem from "./ExpenseItem";
import './ExpenseGroup.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
function ExpesnseGroup(props) {
  const expenses = props.group;
  return (
    <div>
      <ExpensesFilter/>
    
    <Card className="expenses">
    
    <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      </Card>
      </div>
  );
}
export default ExpesnseGroup;