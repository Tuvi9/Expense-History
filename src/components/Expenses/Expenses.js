import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';

function Expenses (props) {
    console.log(props)
    return (
       <Card className='expense-items_border'>
            <ExpensesFilter></ExpensesFilter>
            <ExpenseItem expenseData={props.expensesData[0]}></ExpenseItem>
            <ExpenseItem expenseData={props.expensesData[1]}></ExpenseItem>
        </Card>
    )}



export default Expenses;