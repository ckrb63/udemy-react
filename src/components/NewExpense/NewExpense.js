import react from "react";
import { useState } from "react/cjs/react.development";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpensese(props){
  const [addButton, setAddButton] = useState(false);
  const saveExpenseDataHandler = (expenseData) =>{
    const expense = {
      ...expenseData,
      id : Math.random().toString()
    };
    props.onSaveExpense(expense);
  }
  const onClickButtonHandler = () =>{
    setAddButton(true);
  };
  const onCancelHandler = () =>{
    setAddButton(false);
  }
  return (
    <div className="new-expense">
      {!addButton && <button onClick={onClickButtonHandler}>Add Component!</button>}
      {addButton && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={onCancelHandler}/>}
    </div>
  );
}
export default NewExpensese;