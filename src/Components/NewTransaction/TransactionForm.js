import "./TransactionForm.css";
import React, { useState } from "react";

function TransactionForm() {
  return (
    <form>
      <div className="transaction-form">
        <div className="spent-control">
          <label className="label">SPENT</label>
          <input type="checkbox" />
        </div>
        <div className="control">
          <label className="label">Amount</label>
          <input type="number" />
        </div>
        <div className="control">
          <label className="label">Description</label>
          <input type="text" />
        </div>
        <div className="control">
          <label className="label">Date</label>
          <input type="date" />
        </div>
        <div>
          <button className="add-button">Add New</button>
          <button className="cancel-button">Cancel</button>
        </div>
      </div>
    </form>
  );
}

export default TransactionForm;
