import { useState, useEffect } from 'react'
import Expenses from '../Expenses/Expenses'
import NewExpense from '..//NewExpense/NewExpense'

function ExpensesApp() {
    const [data, setData] = useState([])
    useEffect(() => {
      const expense_data = JSON.parse(localStorage.getItem('expense_data') ? localStorage.getItem('expense_data') : '[]') || [];
      setData(expense_data)
    },[])
    const saveNewData = newData => {
      setData((prevState) => {
        return [newData, ...prevState]
      })
      let expense_data = []
      expense_data = JSON.parse(localStorage.getItem('expense_data') ? localStorage.getItem('expense_data') : '[]')
      expense_data.push(newData);
      localStorage.setItem('expense_data', JSON.stringify(expense_data));
    }
    console.log(data);
    const deleteHandler = (id) => {
      const expense_data = JSON.parse(localStorage.getItem('expense_data') ? localStorage.getItem('expense_data') : '[]')
      

      if(expense_data.length > 0){
        const filterdDataHandler = expense_data.filter(expense => {
          if (expense.id !== id)
            return true;
          return false;
        })
        localStorage.setItem('expense_data', JSON.stringify(filterdDataHandler));
        setData(filterdDataHandler)  
      }
    }
    return (
      <div className="App">
        <NewExpense saveNewData={saveNewData} />
        <Expenses onDelete={deleteHandler} data={data} />
      </div>
    );
}

export default ExpensesApp