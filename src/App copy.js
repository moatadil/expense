import './App.css';
import { useState } from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'
const App = () => {
  const [data, setData] = useState([])
  const saveNewData = newData => {
    setData((prevState) => {
      return [newData, ...prevState]
    })
  }
  const deleteHandler = (id) => {
    if(data.length > 0){
      const filterdDataHandler = data.filter(expense => {
        if (expense.id !== id)
          return true;
        return false;
      })
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

export default App;
