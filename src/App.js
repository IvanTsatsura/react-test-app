import CostItem from "./Components/CostItem";

function App() {
  const costs = [
    { date: new Date(2022, 12, 9), name: "Fridge", cost: 999 },
    { date: new Date(2021, 3, 21), name: "IPhone", cost: 1099 },
    { date: new Date(2019, 7, 15), name: "T-shirt", cost: 19 },
  ];
  return (
    <div className="App">
      <h1>Test app</h1>
      <CostItem
        name={costs[0].name}
        date={costs[0].date.toLocaleDateString("en-us", {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
        cost={costs[0].cost}
      />
      <CostItem
        name={costs[1].name}
        date={costs[1].date.toLocaleDateString("en-us", {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
        cost={costs[1].cost}
      />
      <CostItem
        name={costs[2].name}
        date={costs[2].date.toLocaleDateString("en-us", {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
        cost={costs[2].cost}
      />
    </div>
  );
}

export default App;
