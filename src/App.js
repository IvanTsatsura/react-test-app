import CostItem from "./Components/Transaction";

function App() {
  const costs = [
    { isSpent: true, date: new Date(2022, 12, 9), description: "Fridge", cost: 999 },
    { isSpent: false, date: new Date(2021, 3, 21), cost: 1099 },
    { isSpent:true, date: new Date(2019, 8, 15), description: "T-shirt", cost: 19 },
  ];
  return (
    <div className="App">
      <h1>Test app</h1>
      <CostItem
        isSpent={costs[0].isSpent}
        description={costs[0].description}
        date={costs[0].date}
        cost={costs[0].cost}
      />
      <CostItem
      isSpent={costs[1].isSpent}
        description={costs[1].description}
        date={costs[1].date}
        cost={costs[1].cost}
      />
      <CostItem
      isSpent={costs[2].isSpent}
        description={costs[2].description}
        date={costs[2].date}
        cost={costs[2].cost}
      />
    </div>
  );
}

export default App;
