import { useState } from "react";
import { transactions as initialData } from "./data/data";
import "./App.css";
function App() {
  const [transactions, setTransactions] = useState(initialData);
  const [role, setRole] = useState("viewer");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("income");
  const [filter, setFilter] = useState("all");
  let income = 0;
  let expense = 0;
  transactions.forEach((t) => {
    if (t.type === "income") {
      income += t.amount;
    } else {
      expense += t.amount;
    }
  });
  const balance = income - expense;
  let categoryTotals = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      if (!categoryTotals[t.category]) {
        categoryTotals[t.category] = 0;
      }
      categoryTotals[t.category] += t.amount;
    }
  });
  let highestCategory = "";
  let maxAmount = 0;
  for (let cat in categoryTotals) {
    if (categoryTotals[cat] > maxAmount) {
      maxAmount = categoryTotals[cat];
      highestCategory = cat;
    }
  }

  const addTransaction = () => {
    const newTransaction = {
      id: transactions.length + 1,
      date: "2026-04-02",
      amount: Number(amount),
      category: category,
      type: type
    };

    setTransactions([...transactions, newTransaction]);

    setAmount("");
    setCategory("");
    setType("income");
  };
  const filteredTransactions = transactions.filter((t) => {
  if (filter === "all") return true;
  return t.type === filter;
});
  return (
    <div className="container">
      <h1>Finance Dashboard</h1>

      <div>
        <label>Select Role: </label>
        <select onChange={(e) => setRole(e.target.value)}>
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <div className="cards">
        <div className="card balance">
          <h3>Balance</h3>
          <p>{balance}</p>
        </div>

        <div className="card income">
          <h3>Income</h3>
          <p>{income}</p>
        </div>

        <div className="card expense">
          <h3>Expense</h3>
          <p>{expense}</p>
        </div>
      </div>

      {role === "admin" && (
        <div>
          <h3>Add Transaction</h3>

          <input
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <input
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          <button onClick={addTransaction}>Add</button>
        </div>
      )}
    <div>
  <label>Filter: </label>
  <select onChange={(e) => setFilter(e.target.value)}>
    <option value="all">All</option>
    <option value="income">Income</option>
    <option value="expense">Expense</option>
  </select>
  </div>
      <div className="transactions">
        <h2>Transactions</h2>
        {filteredTransactions.map((t) => (
          <div key={t.id} className="transaction-item">
            <p>
               {t.date} |  {t.category} |  {t.amount} | {t.type}
            </p>
          </div>
        ))}
      </div>

      <div className="transactions">
        <h2>Insights</h2>
        <p>Highest Spending Category: {highestCategory}</p>
        <p>Total Spent on it: {maxAmount}</p>
      </div>
    </div>
  );
}
export default App;