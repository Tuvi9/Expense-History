import React, { useState, useEffect } from 'react'; 

import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

/* Algselt kuvatud andmed */
const DUMMY_EXPENSES = [
    {
    id: 'e1',
    date: new Date(2023, 5, 28),
    title:  'Car Insurance',
    amount: 300
    } ,
    { 
    id: 'e2',
    date: new Date(2023, 4, 29),
    title:  'Pack of gum',
    amount: 9.99
    } ,
    {
    id: 'e3',
    date: new Date(2024, 12, 24),
    title:  'TV',
    amount: 9.99
    }
]

const App = () => {
  /* Algselt kasutab DUMMY_EXPENSES andmestikuna */
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpensehandler = (expense) => {
    console.log('In App.js')
    setExpenses((previousExpenses) => {
        return [expense, ...previousExpenses]
      })
    }
    
  /* Never logs DUMMY_EXPENSES */
    useEffect(() => {
      if (expenses !== DUMMY_EXPENSES) {
          console.log(expenses);
      }
  }, [expenses]);
  
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpensehandler}></NewExpense>
      {/* Andmestik DUMMY_EXPENSES mis on suunatud läbi propsi Expenses */}
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
