import React, { useState } from 'react';
import './ExpenseForm.css';
import { toBeEmpty } from '@testing-library/jest-dom/matchers';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    const [openForm, setButtonClicked] = useState(false)

    // Takes users input from Title field
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
        /*console.log(enteredTitle)*/
    }

    // Takes users input from Amount field
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        /*console.log(enteredAmount)*/
    }

    // Takes users input from Date field
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
        /*console.log(enteredDate)*/
    }

    const openFormHandler = (event) => {
        setButtonClicked(true)
        console.log(openForm)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
        /* After submitting form go back to Add New Expense */
        setButtonClicked(false)
    }

    /* If Add New Expense hasn't been pressed yet then no form appears */
    if (openForm === false) {
        return (
            <div className='new-expense__open'>
                <button onClick={openFormHandler}>Add New Expense</button>
            </div>
        )
    } else {
        return (
            <form onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type='text'
                        onChange={titleChangeHandler} value={enteredTitle}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type='number' min='0.01' step='0.01'
                        onChange = {amountChangeHandler} value={enteredAmount}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type='date' min='2006-04-29' max='2077.06.09'
                        onChange = {dateChangeHandler} value={enteredDate}/>
                    </div>
                    {/* Once a new expense has been added or cancelled go back to Add New Expense */}
                    <div className='.new-expense__actions' >
                        <button type='submit'>Add Expense</button>
                        <button type='button' onClick={() => setButtonClicked(false)}>Cancel</button>
                    </div>
                </div>
            </form>
        )
    }
}
export default ExpenseForm;
