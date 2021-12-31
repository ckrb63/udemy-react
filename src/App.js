import logo from "./logo.svg";
import "./App.css";
import ExpesnseGroup from "./components/Expenses/ExpsenseGroup";
import NewExpensese from "./components/NewExpense/NewExpense";
import { useState } from "react/cjs/react.development";
const DUMMY_DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { 
    id: "e2", 
    title: "New TV", 
    amount: 799.49, 
    date: new Date(2021, 2, 12) 
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  
  const [expensesArray, addExpnesesArray] = useState(DUMMY_DATA);
  const addExpenseHandler = (expense) => {
    addExpnesesArray((prevState)=>{
      return [expense, ...prevState];
    });
  };
  return (
    <div className="App">
      <NewExpensese onSaveExpense={addExpenseHandler} />
      <ExpesnseGroup group={expensesArray}></ExpesnseGroup>
    </div>
  );
};

export default App;
