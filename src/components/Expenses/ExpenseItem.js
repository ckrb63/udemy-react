import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, {useState} from "react";

function ExpenseItem(props) {

  const [title, setTitle] = useState(props.title);

  //git test
  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };
  const year = props.date.getFullYear();
  if(year!=props.filter)
    return 0;
  else
    console.log(1);
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>
        Change Title
      </button>
    </Card>
  );
}
export default ExpenseItem;
