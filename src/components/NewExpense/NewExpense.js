import {useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import Card from '../UI/Card'
function NewExpense(props) {
    const theDataSubmited= expenseData => {
        props.saveNewData(expenseData)
    }
    const [showForm ,setShowForm] = useState(false)
    const handleShowForm = () => setShowForm(!showForm)
  return (
    <Card className="new-expense">
        {!showForm && <button type="button" onClick={handleShowForm} >Add New Expense</button>}
        {showForm && <ExpenseForm onSubmitData={theDataSubmited} handleShowForm={handleShowForm} />}
        
    </Card>
    )
}

export default NewExpense