import "./Transaction.css";

function Transaction(props) {
  const description =
    props.description != null && props.description !== ""
      ? props.description
      : "no info";

  const cost = props.cost;
  const isSpent = props.isSpent;
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
      <div className="left-part">
        <div className="cost-spent">
          <div className="is-spent">{isSpent ? "SPENT" : "RECEIVED"}</div>
          <div className="cost">${cost}</div>
        </div>
        <div className="description">{description}</div>
      </div>
      <div className="date">
        <h2 className="day">{day}</h2>
        <div className="weekday">{weekday}</div>
        <div className="month">{month}</div>
        <div className="year">{year}</div>
      </div>
    </div>
  );
}

export default Transaction;
