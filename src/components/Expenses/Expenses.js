import React, { useState } from 'react'; 

import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023')

    console.log('Year data in Expenses.js ' + filteredYear)
    
    
    const filterChangeHandler = (year) => {
        console.log('Filter change handled by Expenses.js')
        console.log(year + ' in Expenses.js')
        setFilteredYear(year)
    }

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    /* Filters expenses by year */
      return (
        <Card className='expense-items_border'>
          <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}
          ></ExpensesFilter>
          {filteredExpenses.map((expense) => {
            return <ExpenseItem 
                id={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            ></ExpenseItem>
          })
        }
    </Card>
    )
}
export default Expenses;