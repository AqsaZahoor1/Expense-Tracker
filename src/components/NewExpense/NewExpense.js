import React  , {useState} from 'react'
import ExpenseForm from './ExpenseForm';
import "./NewExpense.css"

 function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(false);
    const onSaveExpensehandler = (newexpense)=>
    {
        const new_expense = {
            ...newexpense, 
            id: Math.random()
        }
        console.log(new_expense);
        props.addExpense(newexpense);
        setIsEditing(false);
    }
    
    const startEditingHandler = () => {
        setIsEditing(true);
      };
    
      const stopEditingHandler = () => {
        setIsEditing(false);
      };
    
      return (
        <div className='new-expense'>
          {!isEditing && (
            <button onClick={startEditingHandler}>Add New Expense</button>
          )}
          {isEditing && (
            <ExpenseForm
            onSaveExpense={onSaveExpensehandler}
              onCancel={stopEditingHandler}
            />
          )}
        </div>
      );
    };

export default NewExpense;