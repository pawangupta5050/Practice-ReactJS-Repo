import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    // const [title, setTitle] = useState('')
    // const [amount, setAmount] = useState('')
    // const [date, setDate] = useState('')

    const [formInput, setFormInput] = useState({
        title: '',
        amount: '',
        date: '',
    })

    const [status, setStatus] = useState('Deactive')

    const inputChangeHandler = (e) => {
        e.preventDefault();
        if (e.target.id === 'title') {
            setFormInput((prev) => ({...prev,title: e.target.value}))
        } else if (e.target.id === 'amount') {
            setFormInput((prev) => ({...prev,amount: e.target.value}))
        } else if (e.target.id === 'date') {
            setFormInput((prev) => ({...prev,date: e.target.value}))
        }
    }

    // const titleChangeHandler = event => {
    //     setFormInput({
    //         ...formInput,
    //         title: event.target.value
    //     })
    // }
    // const amountChangeHandler = event => {
    //     setFormInput({
    //         ...formInput,
    //         amount: event.target.value
    //     })
    // }
    // const dateChangeHandler = event =>  {
    //     setFormInput({
    //         ...formInput,
    //         date: event.target.value
    //     })
    // }

    const formChangeHandler = (e) => {
        e.preventDefault();

        const expenses = {
            title: formInput.title,
            amount: +formInput.amount,
            date: new Date(formInput.date),
        }   

        props.onSaveExpenseData(expenses)

        setFormInput({
            title: '',
            amount: '',
            date: '',
        })

        setStatus('Deactive')

        // console.log(expenses)
    }

    const cancelClickHandler = () => {
        setStatus('Deactive')
    }

    const activeClickHandler = () => {
        setStatus('Active')
    }

    if(status === 'Deactive') {
        return <button onClick={activeClickHandler}>Add New Expense</button>
    }

    return (
        <form onSubmit={formChangeHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={formInput.title} onChange={inputChangeHandler} id='title' />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={inputChangeHandler} id='amount' value={formInput.amount} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' onChange={inputChangeHandler} id='date' value={formInput.date} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={cancelClickHandler}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm