import React, { useState } from 'react'
import AuthContext from './Auth-Context'


export default function AuthProvider(props) {

  const initialToken = localStorage.getItem('token');
  const [token, setToken] = useState(initialToken);
  const userIsLoggedIn = !!token;

  let timeOut;


  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem('token', token)
    timeOut = setTimeout(() => {
      localStorage.removeItem('token')
      console.log('setTimeout')
    }, (500000))

  }


  const logoutHandler = () => {
    setToken(null)
    localStorage.removeItem('token')
    clearTimeout(timeOut)
  }


  const authcontext = {
    isToken: token,
    isLoggedIn: userIsLoggedIn,
    logIn: loginHandler,
    logOut: logoutHandler,
  }


  return (
    <AuthContext.Provider value={authcontext}>
      {props.children}
    </AuthContext.Provider>
  )
}
