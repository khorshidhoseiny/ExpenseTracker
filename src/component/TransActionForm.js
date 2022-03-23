import { useState } from "react";

const TransActionForm = ({ addTransAction }) => {
  const [formValues, setFormValues] = useState({
    type: "expense",
    amount: 0,
    desc: "",
  });

  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addTransAction(formValues);
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <input
          placeholder="Description..."
          className="input"
          type="text"
          name="desc"
          onChange={changeHandler}
          value={formValues.desc}
        />
        <input
          className="input"
          type="number"
          name="amount"
          onChange={changeHandler}
          value={formValues.amount}
        />
      </div>
      <div>
        <input
          type="radio"
          value="expense"
          name="type"
          onChange={changeHandler}
          checked={formValues.type === "expense"}
        />
        <label>Expense</label>
        <input
          type="radio"
          value="Income"
          name="type"
          onChange={changeHandler}
          checked={formValues.type === "Income"}
        />
        <label>Income</label>
      </div>
      <button className="btn" type="submit">Add TransAction</button>
    </form>
  );
};

export default TransActionForm;
