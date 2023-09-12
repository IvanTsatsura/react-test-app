import "./CostItem.css";

function CostItem(props) {
  return (
    <div className="cost-item">
      <div className="name">{props.name}</div>
      <div className="price">${props.cost}</div>
      <div className="date">{props.date}</div>
    </div>
  );
}

export default CostItem;
