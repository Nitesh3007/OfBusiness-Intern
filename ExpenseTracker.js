import React, { useState } from "react";

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [desc, setDesc] = useState("");
  const [amt, setAmt] = useState("");
  const [total, setTotal] = useState(0);

  const addExpense = () => {
    if (desc && amt) {
      const newExpense = { desc, amt: parseFloat(amt) };
      setExpenses([...expenses, newExpense]);
      setTotal(total + newExpense.amt);
      setDesc("");
      setAmt("");
    }
  };

  const removeExpense = (index) => {
    const newExpenses = [...expenses];
    const removed = newExpenses.splice(index, 1)[0];
    setExpenses(newExpenses);
    setTotal(total - removed.amt);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amt}
        onChange={(e) => setAmt(e.target.value)}
      />
      <button onClick={addExpense}>Add</button>
      <h3>Total: {total}</h3>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.desc}: ${expense.amt}
            <button onClick={() => removeExpense(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseTracker;
