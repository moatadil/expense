import {useState} from 'react'
import './ExpenseForm.css'
function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    // const [userInput, setUserInput] = useState({
    //     enteredTitle : '',
    //     enteredAmount : '',
    //     enteredDate : ''
    // })
    const titleChangeHandler = (e) => {
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle : e.target.value}
        // })
        setEnteredTitle(e.target.value)
    }
    const amountChangeHandler = (e) => {
        // setUserInput((prevState) => {
        //     return {...prevState, enteredAmount : e.target.value}
        // })
        // console.log(e.target.value);
        setEnteredAmount(+e.target.value)
    }
    const dateChangeHandler = (e) => {
        // setUserInput((prevState) => {
        //     return {...prevState, enteredDate : e.target.value}
        // })
        // console.log(e.target.value);
        setEnteredDate(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            title : enteredTitle,
            amount : +enteredAmount,
            date : new Date(enteredDate),
            id : Math.random().toString()
        }
        setEnteredDate('')
        setEnteredTitle('')
        setEnteredAmount('')
        props.onSubmitData(data);
        props.handleShowForm()
    }
  return (
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
  ) 
}

export default ExpenseForm