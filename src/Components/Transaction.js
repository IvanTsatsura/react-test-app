import "./Transaction.css";
import TransactionDate from "./TransactionDate";

function Transaction(props) {
  const description =
    props.description != null && props.description !== ""
      ? props.description
      : "no info";

  const cost = props.cost;
  const isSpent = props.isSpent;

  return (
    <div className="transaction">
      <div className="left-part">
        <div className="cost-spent">
          <div className="is-spent">{isSpent ? "SPENT" : "RECEIVED"}</div>
          <div className="cost">${cost}</div>
        </div>
        <div className="description">{description}</div>
      </div>
      <TransactionDate date={props.date}/>
    </div>
  );
}

export default Transaction;
