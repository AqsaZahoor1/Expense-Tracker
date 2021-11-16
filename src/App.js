import Expenses from "./components/Expenses/Expenses";
import React , {useState} from 'react'
import NewExpense from "./components/NewExpense/NewExpense";

const dummy_Expenses = [
  {
    id: "e1",
    title:"Car Insurrance",
    amount: 249.6, 
    date:new Date(2020, 2 , 28)
  },
  {
    id: "e2",
    title:"Toilet Paper",
    amount: 349.6, 
    date:new Date(2021, 5 , 28)
  },
  {
    id: "e3",
    title:"New Tv",
    amount: 449.6, 
    date:new Date(2019, 6 , 28)
  },
  {
    id: "e4",
    title:"New desk Wooden",
    amount: 549.6, 
    date:new Date(2022, 6 , 28)
  }
];

function App() {

  

const [expenses , addExpenses] = useState(dummy_Expenses);

const addExpenseHandler=(expense)=>
{
  addExpenses(prevExpenses=>{
    return [expense, ...prevExpenses]
  })
}

  return (
    <div >
      <NewExpense addExpense = {addExpenseHandler}/>
      <Expenses items = {expenses} />
    </div>
  );
}

export default App;
