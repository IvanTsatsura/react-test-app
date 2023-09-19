import "./TransactionForm.css";
import React, { useState } from "react";

function TransactionForm() {
    const [isSpent, setIsSpent] = useState('');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    const isSpentChangeHandler = (event) => {
        setIsSpent(event.target.value);
    }
    const descriptionChangeHandler = (event) => {
        setDescription(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    }

  return (
    <form>
      <div className="transaction-form">
        <div className="spent-control">
          <label className="label">SPENT</label>
          <input className="check" type="checkbox" onChange={isSpentChangeHandler}/>
        </div>
        <div className="control">
          <label className="label">Amount</label>
          <input className="row" type="number" onChange={amountChangeHandler}/>
        </div>
        <div className="control">
          <label className="label">Description</label>
          <input className="row" type="text" onChange={descriptionChangeHandler}/>
        </div>
        <div className="control">
          <label className="label">Date</label>
          <input className="row" type="date" onChange={dateChangeHandler}/>
        </div>
        <div className="buttons">
          <button className="button add-button">Add New</button>
          <button className="button cancel-button">Cancel</button>
        </div>
      </div>
    </form>
  );
}

export default TransactionForm;
