import React , {useState} from 'react'
import "./ExpenseForm.css"
function ExpenseForm(props) {

    const [enteredTitle , setEnteredTitle] = useState('');
    const [enteredAmount , setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler  = (event) =>
    {
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler  = (event) =>
    {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler  = (event) =>
    {
        setEnteredDate(event.target.value);
    }

    const submithandler = (event)=>
    {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount:enteredAmount,
            date : new Date(enteredDate)
        }
        console.log(expenseData);
        setEnteredAmount("");
        setEnteredDate("");
        setEnteredTitle('');
        props.onSaveExpense(expenseData);
    }


    return (
        <form onSubmit= {submithandler}>
            <div className = "new-expense__controls">
                <div className = "new-expense__control">
                    <label>Title</label>
                    <input type="text" value = {enteredTitle} onChange= {titleChangeHandler}></input>
                </div>
                <div className = "new-expense__control">
                    <label>Amount</label>
                    <input type="number"  value = {enteredAmount} onChange= {amountChangeHandler}></input>
                </div>
                <div className = "new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-12" max="2022-01-12"  value = {enteredDate} onChange= {dateChangeHandler}></input>
                </div>
            </div>
            <div className = "new-expense__actions">
            <button type="submit">Add New Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;