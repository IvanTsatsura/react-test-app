import "./Transaction.css";

function Transaction(props) {
  const day = props.date.toLocaleDateString("en-us", {
    day: "2-digit",
  });
  const weekday = props.date.toLocaleDateString("en-us", {
    weekday: "short",
  });
  const month = props.date.toLocaleDateString("en-us", {
    month: "short",
  });
  const year = props.date.toLocaleDateString("en-us", {
    year: "numeric",
  });

  return (
    <div className="transaction">
      {props.isSpent ? (
        <div className="spent-indicator-true"> You spent {props.cost} </div>
      ) : (
        <div className="spent-indicator-false"> You receive {props.cost} </div>
      )}
      <div className="description">{props.description}</div>
      <div className="cost">${props.cost}</div>
      <div className="date">
        <h1 className="day">{day}</h1>
        <div className="weekday">{weekday}</div>
        <div className="month">{month}</div>
        <div className="year">{year}</div>
      </div>
    </div>
  );
}

export default Transaction;
