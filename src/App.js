import './App.css';
import Expenses from './components/Expenses/Expenses';
<<<<<<< HEAD
import NewExpense from './components/NewExpense/NewExpense';
=======
>>>>>>> b2be25d4c78940b89b975977ba4d675b6812da05

const App =()=>{
  const expense = [{
    id:'e1',
    title:'car insurance',
    amount:45.98,
    date: new Date(2022,5,28)
  },
  {
    id:'e2',
    title:'tissue paper',
    amount:45.98,
    date: new Date(2022,4,23)
  },{
    id:'e3',
    title:'bike insurance',
    amount:46.98,
    date: new Date(2022,4,2)
  }]
<<<<<<< HEAD

  const expenseDataHandler = (expense) =>{
     console.log(expense);
  }
  return (
    <div className="App">
      <NewExpense onAddExpenseData={expenseDataHandler}/>
=======
  return (
    <div className="App">
>>>>>>> b2be25d4c78940b89b975977ba4d675b6812da05
  <Expenses items={expense}></Expenses>
    </div>
  );
}

export default App;
