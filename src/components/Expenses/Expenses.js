import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';

function Expenses (props) {
    console.log(props)
    return (
       <Card className='expense-items_border'>
            <ExpenseItem expenseData={props.expensesData[0]}></ExpenseItem>
            <ExpenseItem expenseData={props.expensesData[1]}></ExpenseItem>
        </Card>
    )}



export default Expenses;