import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const DummyData = [
  {
    id: "e1",
    title: "car insurance",
    amount: 45.98,
    date: new Date(2022, 5, 28),
  },
  {
    id: "e2",
    title: "tissue paper",
    amount: 45.98,
    date: new Date(2022, 4, 23),
  },
  {
    id: "e3",
    title: "bike insurance",
    amount: 46.98,
    date: new Date(2022, 4, 2),
  },
];
const App = () => {
  const [expenses,setExpenses] = useState(DummyData)

  const expenseDataHandler = (expense) => {
    setExpenses((prevExpense) =>{return[
      expense,
      ...prevExpense
    ]})
  };
  return (
    <div className="App">
      <NewExpense onAddExpenseData={expenseDataHandler} />
      <Expenses items={expenses} ></Expenses>
    </div>
  );
};

export default App;
