import Transaction from "./Transaction";

function Transactions(props) {
  return (
    <div>
      <Transaction
        isSpent={props.transactions[0].isSpent}
        description={props.transactions[0].description}
        date={props.transactions[0].date}
        amount={props.transactions[0].amount}
      />
      <Transaction
        isSpent={props.transactions[1].isSpent}
        description={props.transactions[1].description}
        date={props.transactions[1].date}
        amount={props.transactions[1].amount}
      />
      <Transaction
        isSpent={props.transactions[2].isSpent}
        description={props.transactions[2].description}
        date={props.transactions[2].date}
        amount={props.transactions[2].amount}
      />
    </div>
  );
}

export default Transactions;
