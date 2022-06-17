import { useEffect, useState } from "react";
import ChartBar from "./Chart";
import OverViewComponent from "./OverViewComponent";
import TranseActionComponent from "./TranseActionComponent";
import { useToasts } from 'react-toast-notifications';
const ExpenseApp = () => {
	const [expense, setExpense] = useState(0);
	const [income, setIncome] = useState(0);
	const [transAction, setTransAction] = useState([]);

	const { addToast } = useToasts();

	const addTransAction = (formValue) => {
		setTransAction([...transAction, { ...formValue, id: Math.floor(Math.random() * 1000)}]);
		console.log(formValue);
	};
	const deleteTransAction=(id)=>{
		const filteredTnx=transAction.filter((t) => t.id !== id);
		setTransAction(filteredTnx);
		addToast("Transaction was removed!", {
			appearance: "error",
			autoDismiss: true,
			autoDismissTimeout: 3000,
		  });
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

			{transAction.length ? <ChartBar income={income} expense={expense} transactions={transAction} />:""}
			
			<TranseActionComponent transaction={transAction} DeleteTnx={deleteTransAction} />
		</section>
	);
};

export default ExpenseApp;
