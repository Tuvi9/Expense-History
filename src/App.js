// import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    {
    date: new Date(2023, 5, 28),
    title:  'Car Insurance',
    price: 300
    } ,
    { 
    date: new Date(2023, 4, 29),
    title:  'Pack of gum',
    price: 9.99
    }
]

  const addExpensehandler = (expense) => {
    console.log('In App.js')
    console.log(expense)
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpensehandler}></NewExpense>
      <Expenses expensesData={expenses}></Expenses>
    </div>
  );
}

export default App;
