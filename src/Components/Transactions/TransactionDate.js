import "./TransactionDate.css";

function TransactionDate(props) {
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
    <div className="date">
      <h2 className="day">{day}</h2>
      <div className="weekday">{weekday}</div>
      <div className="month">{month}</div>
      <div className="year">{year}</div>
    </div>
  );
}

export default TransactionDate;
