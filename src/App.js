import './App.css';
import {useState} from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'
const dummyData = [
    { 
      amount:2520,
      title: 'Car Insurance',
      date: new Date(2022,2,10),
      id : 1
    }
  ]
const App = () => {
  const [data, setData] = useState([])
  const saveNewData = newData => {
    // data.push(newData);
    // console.log(data);
    setData((prevState) => {
      return [newData, ...prevState]
    })
  }
  return (
    <div className="App">
      <NewExpense saveNewData={saveNewData} />
      <Expenses data={data} />
    </div>
  );
}

export default App;
