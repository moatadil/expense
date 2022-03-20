import React, { useState, useEffect } from 'react';

const LoginContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: (email, password) => { }
})
export const LoginContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const user_logged_in = localStorage.getItem('isLoggedIn');
        if (user_logged_in === 'true') {
            setIsLoggedIn(user_logged_in);
        }
    }, [])
    const loginHandler = (email, password) => {
        localStorage.setItem('isLoggedIn', true);
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };
    return <LoginContext.Provider
        value={{
            isLoggedIn: isLoggedIn,
            onLogout: logoutHandler,
            onLogin: loginHandler
        }}
    >
        {props.children}
    </LoginContext.Provider>
}
export default LoginContext