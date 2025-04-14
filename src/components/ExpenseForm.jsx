import React, { useState } from "react";

function ExpenseForm(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newExpense = {
      id: Date.now(), 
      name: name,
      description: description,
      category: category,
      amount: parseFloat(amount),
      date: date,
    };

    props.onAddExpense(newExpense);

    
    setName("");
    setDescription("");
    setCategory("");
    setAmount("");
    setDate("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Expense name"
        value={name}
        onChange={function (event) {
          setName(event.target.value);
        }}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={function (event) {
          setDescription(event.target.value);
        }}
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={function (event) {
          setCategory(event.target.value);
        }}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={function (event) {
          setAmount(event.target.value);
        }}
        required
      />
      <input
        type="date"
        value={date}
        onChange={function (event) {
          setDate(event.target.value);
        }}
        required
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;