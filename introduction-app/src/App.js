// import ExpenseItem from "./components/ExpenseItem"
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const dummyExpenses = [
  {title: "New Expense 1", amount: 20, date: new Date("2019-02-20")},
  {title: "New Expense 2", amount: 30, date: new Date("2020-09-28")},
  {title: "New Expense 3", amount: 40, date: new Date("2021-04-19")},
];

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const getExpenseHandler = (expense) => {
    setExpenses(prev => [expense, ...prev])
  }

  return (
    <div>
      <NewExpense onGetExepense={getExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
