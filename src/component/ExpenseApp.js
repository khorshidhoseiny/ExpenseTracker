import { useEffect, useState } from "react";
import OverViewComponent from "./OverViewComponent";
import TranseActionComponent from "./TranseActionComponent";
const ExpenseApp = () => {
	const [expense, setExpense] = useState(0);
	const [income, setIncome] = useState(0);
	const [transAction, setTransAction] = useState([]);

	const addTransAction = (formValue) => {
		setTransAction([...transAction, { ...formValue, id: Date.now }]);
		console.log(formValue);
	};
	useEffect(() => {
		let exp = 0;
		let inc = 0;
		transAction.forEach((t) => {
			t.type === "expense"
				? (exp = exp + parseFloat(t.amount))
				: (inc = inc + parseFloat(t.amount));
			setExpense(exp);
			setIncome(inc);
		});
	});

	return (
		<section className="container">
			<OverViewComponent
				expense={expense}
				income={income}
				addTransAction={addTransAction}
			/>
			<TranseActionComponent transaction={transAction} />
		</section>
	);
};

export default ExpenseApp;
