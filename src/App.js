import React, { useContext } from 'react'
import './App.css'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import MainHeader from './components/MainHeader/MainHeader'
import LoginContext from './components/context/LoginContext'
const App = () => {
  const lctx = useContext(LoginContext)
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!lctx.isLoggedIn && <Login  />}
        {lctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
