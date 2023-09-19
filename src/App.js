import Transactions from "./Components/Transactions/Transactions";

function App() {
  const costs = [
    {
      isSpent: true,
      date: new Date(2022, 12, 9),
      description: "Fridge",
      cost: 999,
    },
    { isSpent: false, date: new Date(2021, 3, 21), cost: 1099 },
    {
      isSpent: true,
      date: new Date(2019, 8, 15),
      description: "T-shirt",
      cost: 19,
    },
  ];
  return (
    <div className="App">
      <h1>Test app</h1>
      <Transactions transactions={costs} />
    </div>
  );
}

export default App;
