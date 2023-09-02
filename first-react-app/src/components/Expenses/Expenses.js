import { useState } from 'react'
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

const Expenses = ({ expenses }) => {

    const [filteredYear, setFilteredYear] = useState('2020')

    const selectedYear = (year) => {
        setFilteredYear(year)
    }
    
    const fileteredExpenses = expenses.filter(expenseItem => expenseItem.date.getFullYear().toString() === filteredYear)
    
    // const Expenses = fileteredExpenses.map((expense, index) => <ExpenseItem expense={expense} key={index} />)
    return (
        <div>

            <Card className="expenses">
                <ExpensesFilter onSelectYear={selectedYear} initialYear={filteredYear} />
                <ExpensesChart expenses={fileteredExpenses} />
                <ExpensesList items={fileteredExpenses} />
                {/* {fileteredExpenses.length === 0 ? emptyExpenses : Expenses} */}
                {/* {expenses.filter((expenseItem => expenseItem.date === filteredYear)).map((expense, index) => <ExpenseItem expense={expense} key={index} />)} */}
            </Card>
        </div>
    )
}

export default Expenses