import Expenseitem from "./Expenseitem";
import React, { useState } from 'react'
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";


function Expenses(props) {

  const [year, setYear] = useState('2020');

  const filterYearhandler = (selectedyear) => {
    setYear(selectedyear);
  };
  const filteredItems = props.items.filter(expense =>{

    return expense.date.getFullYear().toString()===year;
  });


  return (
    <div className="expenses">
      <ExpensesFilter selected={year} onAddFilter={filterYearhandler} />
      {filteredItems.length === 0 ? <p>No Expenses found</p>:
        filteredItems.map(expense_item =>(
          <Expenseitem
            key={expense_item.id}
            title={expense_item.title}
            amount={expense_item.amount}
            date={expense_item.date}
          />
        )
        )
      
      }
    </div>
  );
}

export default Expenses;
