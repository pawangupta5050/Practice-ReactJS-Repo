import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = ({onGetExepense}) => {

    const saveExpenseHandler = (expenseInputData) => {
        const expenseData = {
            ...expenseInputData,
            id : Math.random().toString(),
        }

        // console.log(expenseData)
        onGetExepense(expenseData)
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseHandler} />
        </div>
    )
}

export default NewExpense