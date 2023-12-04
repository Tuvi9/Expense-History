import React, { Fragment, useState, useRef } from 'react';
import './ExpenseForm.css';
import Error from '../UI/Error';

const ExpenseForm = (props) => {
    const [openForm, setButtonClicked] = useState(false)
    const [error, setError] = useState(null)

    const titleInputRef = useRef()
    const amountInputRef = useRef()
    const dateInputRef = useRef()

    const errorHandler = () => {
        setError(null)
    }
    console.log(error)

    const openFormHandler = (event) => {
        setButtonClicked(true)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const enteredTitle= titleInputRef.current.value
        const enteredAmount = amountInputRef.current.value
        const enteredDate = dateInputRef.current.value

        console.log(enteredTitle) 
        console.log(enteredAmount)
        console.log(enteredDate)

        /* If any of the fields are empty then an error message appears */
        if(enteredTitle.trim().length === 0 || enteredAmount.trim().length === 0 || enteredDate.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid title, amount and date (non-empty values).'
            });
            return;
        }

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData)
        titleInputRef.current.value = ''
        amountInputRef.current.value = ''
        dateInputRef.current.value = ''
        setButtonClicked(false)
    };

    /* If Add New Expense hasn't been pressed yet then no form appears */
    if (openForm === false) {
        return (
            <div className='new-expense__open'>
                <button onClick={openFormHandler}>Add New Expense</button>
            </div>
        )
    } else {
        return (
        /* Fragment is used */
        <Fragment>
            {error && (
            <Error 
            title={error.title} 
            message={error.message} 
            onConfirm={errorHandler}></Error>
            )}
            <div>
                <form onSubmit={submitHandler}>
                    <div className='new-expense__controls'>
                        <div className='new-expense__control'>
                            <label>Title</label>
                            <input
                                type='text'
                                id='title'
                                ref={titleInputRef}
                            />
                        </div>
                        <div className='new-expense__control'>
                            <label>Amount</label>
                            <input 
                                type='number' 
                                min='0.01' 
                                step='0.01'
                                id='amount'
                                ref={amountInputRef}
                            />
                        </div>
                        <div className='new-expense__control'>
                            <label>Date</label>
                            <input 
                                type='date' 
                                min='2006-04-29' 
                                max='2077.06.09'
                                id='date'
                                ref={dateInputRef}
                            />
                        </div>
                        {/* Once a new expense has been added or cancelled go back to Add New Expense */}
                        <div className='new-expense__open' >
                            <button type='submit'>Add Expense</button>
                            <button type='cancel' onClick={() => setButtonClicked(false)}>Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
        )
    }
}
export default ExpenseForm;
