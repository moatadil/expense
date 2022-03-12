import { useState } from 'react'
import './ExpenseForm.css'
import ErrorModel from '../UI/ErrorModel'
function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    const [error, setError] = useState()
    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value)
    }
    const amountChangeHandler = (e) => {
        setEnteredAmount(+e.target.value)
    }
    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (enteredTitle.trim().length === 0||enteredAmount.length === 0||enteredDate.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please Enter a Valid Input (non-empty Values).'
            })
            return
        }
        const data = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
            id: Math.random().toString()
        }
        setEnteredDate('')
        setEnteredTitle('')
        setEnteredAmount('')
        props.onSubmitData(data);
        props.handleShowForm()
    }
    const errorHandler = () => {
        setError(null)
    }
    return (
        <>
            {error && <ErrorModel onConfirm={errorHandler} title={error?.title} message={error?.message} />}
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" onChange={titleChangeHandler} value={enteredTitle} className="" />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" onChange={amountChangeHandler} value={enteredAmount} className="" />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" onChange={dateChangeHandler} value={enteredDate} min='2020-01-01' max='2024-02-02' />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="submit" className="">Add Expense</button>
                    <button type="button" onClick={props.handleShowForm} >Cancel</button>
                </div>
            </form>
        </>
    )
}

export default ExpenseForm