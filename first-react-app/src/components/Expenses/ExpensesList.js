import React, { useLayoutEffect } from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = props => {

     const Expenses = props.items.map((expense, index) => <ExpenseItem expense={expense} key={index} />)

     if(props.items.length === 0) {
        return <div className='expenses-list__fallback'><h2>You Don't have any expense for this year</h2></div>  
     }

    return (
        <ul className='expenses-list'>
            {Expenses}
        </ul>
    )
}

export default ExpensesList