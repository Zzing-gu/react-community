import React from 'react';

import LoginRegister from 'react-mui-login-register';
import Axios from 'axios';

import { CookiesProvider, withCookies } from 'react-cookie';
import {cookies} from '../cookie'

import {login, logout} from '../Modules/Auth'
//import './App.css';
import {
   
  withRouter
} from "react-router-dom";



function App(props) {

  

  const handleLogin = content => {
    alert(`Logging in with content '${JSON.stringify(content)}'`);
    login(content);
    //props.history.push('/')
  };

  const handleLoginWithProvider = providerId => {
    alert(`Logging in with provider '${providerId}'`);
  };

  const handleRegister = content => {
    alert(`Registering with content '${JSON.stringify(content)}'`);
  };

  const handleRegisterWithProvider = providerId => {
    alert(`Registering with provider '${providerId}'`);
  };

  const config = { headers: { Authorization: `Token ${cookies.get('token')}`} , xsrfCookieName:'csrftoken', xsrfHeaderName:'X-CSRFToken' } 

 

  const register = async(content)=> {
    await Axios.post('http://127.0.0.1:8000/auth/token/login/', content).then(
      (response) => {
        console.log(response)
        console.log(response.data)
        //document.cookie = 'token='+ (response.data.token).toString()

        
        
      }
    ).catch((error) => {
      console.log(error)
    })
  }

  

  return (
    <CookiesProvider>

      <div className="App">
        <LoginRegister
          onLogin={handleLogin}
          onLoginWithProvider={handleLoginWithProvider}
          onRegister={handleRegister}
          onRegisterWithProvider={handleRegisterWithProvider}
        />
      </div>
    </CookiesProvider>
  );



}

export default withRouter(withCookies(App));