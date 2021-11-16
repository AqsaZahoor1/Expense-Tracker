import Expenses from "./components/Expenses/Expenses";

function App() {

  const expenses = [
    {
      id: "e1",
      title:"Car Insurrance",
      amount: 249.6, 
      date:new Date(2021, 2 , 28)
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
      date:new Date(2021, 6 , 28)
    },
    {
      id: "e4",
      title:"New desk Wooden",
      amount: 549.6, 
      date:new Date(2021, 6 , 28)
    }
  ];

  return (
    <div >
      <Expenses items = {expenses} />
    </div>
  );
}

export default App;
