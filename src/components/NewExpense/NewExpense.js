import react from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpensese(){
  const saveExpenseDataHandler = (expenseData) =>{
    const expense = {
      ...expenseData,
      id : Math.random().toString()
    };
    console.log(expense);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
}
export default NewExpensese;