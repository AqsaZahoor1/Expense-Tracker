import React from 'react'
import ExpenseForm from './ExpenseForm';
import "./NewExpense.css"

 function NewExpense(props) {

const onSaveExpensehandler = (newexpense)=>
{
    const new_expense = {
        ...newexpense
    }
    console.log(new_expense);
    props.addExpense(newexpense);
}

  return (
    <div className = "new-expense">
      <ExpenseForm onSaveExpense = {onSaveExpensehandler}/>
    </div>
  )
}
export default NewExpense;