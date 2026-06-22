import './App.css'
import ExpenseForm from "./components/ExpenseForm";
import type { Expense } from "./types/expense";

function App() {

  const handleCountExpenses = async (
      expense: Expense
  ) => {

    }

  return (
      <div className="app">
          <h1>Expense Tracker</h1>

          <ExpenseForm onAddExpense={handleCountExpenses} />


      </div>

  )
}

export default App
