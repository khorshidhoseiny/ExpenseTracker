import { useEffect, useState } from "react";
import TransActionForm from "./TransActionForm";

const OverViewComponent = ({ expense, income, addTransAction }) => {
  const [ishow, setIsshow] = useState(false);

  return (
    <>
      <div className="topSection">
        <p className="balance">
          Balance:<span>${income - expense}</span>
        </p>
        <button
          className={`btn ${ishow ? "cancel" : "add"}`}
          onClick={() => setIsshow(!ishow)}
        >
          {ishow ? "cancel" : "Add"}
        </button>
      </div>
      {ishow && <TransActionForm addTransAction={addTransAction} />}
      <div className="resultSection">
        <div className="expense">
          Expense <span>${expense}</span>
        </div>
        <div className="income">
          Income <span>${income}</span>
        </div>
      </div>
    </>
  );
};

export default OverViewComponent;
