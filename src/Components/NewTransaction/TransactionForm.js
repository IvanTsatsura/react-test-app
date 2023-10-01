import "./TransactionForm.css";
import React, { useState } from "react";

function TransactionForm() {
  const [isSpent, setIsSpent] = useState(false);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const isSpentChangeHandler = (event) => {
    isSpent === false ? setIsSpent(true) : setIsSpent(false);
  };
  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    const transactionData = {
      isSpent: isSpent,
      amount: amount,
      description: description,
      date: new Date(date),
    };
    setIsSpent(false);
    setAmount("");
    setDescription("");
    setDate("");
    event.preventDefault();
    console.log(transactionData);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="transaction-form">
        <div className="spent-control">
          <label className="tr-label-spent">
            SPENT
            <input
              value={isSpent}
              id="input-is-spent"
              className="check"
              type="checkbox"
              onChange={isSpentChangeHandler}
            />
          </label>
        </div>
        <div className="control">
          <label className="tr-label">
            Amount
            <input
              value={amount}
              className="row"
              id="input-amount"
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
            />
          </label>
        </div>
        <div className="control">
          <label className="tr-label">
            Description
            <input
              value={description}
              id="input-description"
              className="row"
              type="text"
              onChange={descriptionChangeHandler}
            />
          </label>
        </div>
        <div className="control">
          <label className="tr-label">
            Date
            <input
              value={date}
              className="row"
              type="date"
              onChange={dateChangeHandler}
            />
          </label>
        </div>
        <div className="buttons">
          <button className="button add-button" type="submit">
            Add New
          </button>
          <button className="button cancel-button" type="reset">
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}

export default TransactionForm;
