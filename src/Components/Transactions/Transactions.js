import Transaction from "./Transaction";

function Transactions(props) {
  return (
    <div>
      <Transaction
        isSpent={props.transactions[0].isSpent}
        description={props.transactions[0].description}
        date={props.transactions[0].date}
        cost={props.transactions[0].cost}
      />
      <Transaction
        isSpent={props.transactions[1].isSpent}
        description={props.transactions[1].description}
        date={props.transactions[1].date}
        cost={props.transactions[1].cost}
      />
      <Transaction
        isSpent={props.transactions[2].isSpent}
        description={props.transactions[2].description}
        date={props.transactions[2].date}
        cost={props.transactions[2].cost}
      />
    </div>
  );
}

export default Transactions;
