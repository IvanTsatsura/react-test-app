import Transactions from "./Components/Transactions/Transactions";
import Header from "./Components/Header/Header";
import NewTransaction from "./Components/NewTransaction/NewTransaction";

function App() {
  const amounts = [
    {
      isSpent: true,
      date: new Date(2022, 12, 9),
      description: "Fridge",
      amount: 999,
    },
    { isSpent: false, date: new Date(2021, 3, 21), amount: 1099 },
    {
      isSpent: true,
      date: new Date(2019, 8, 15),
      description: "T-shirt",
      amount: 19,
    },
  ];
  return (
    <div className="App">
      <Header/>
      <NewTransaction/>
      <Transactions transactions={amounts} />
    </div>
  );
}

export default App;
