import {useState} from "react";
import type { Expense } from "../types/expense";

type formProp = {
    onAddExpense: (expense: Expense) => void;
};

function ExpenseForm({ onAddExpense, }: formProp){



    const [category, setCategory] = useState("Food");
    const [amount, setAmount] = useState("");
    const [expenseName, setExpenseName] = useState("");

    const handleUsersExpenses = ()=> {
            onAddExpense(expense);
    };
    return (

        <div className="expense-form">

            <input
                value={expenseName}
                onChange={(event) => setExpenseName(event.target.value)}
                type="text"
                placeholder="Expense name. . ."
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
            />
            <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
            >
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Entertainment">Entertainment</option>
            </select>

            <button
                onClick={handleUsersExpenses}
            >
                add
            </button>
        </div>


);
}

export default ExpenseForm;