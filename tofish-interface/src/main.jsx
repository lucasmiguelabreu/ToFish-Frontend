import React from 'react'
import ReactDOM from 'react-dom/client'
import { Login } from './containers/Login'
import GlobalStyles from './styles/globalStyles'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login />
    <GlobalStyles />
    <ToastContainer autoClose={2000}/>
  </React.StrictMode>,
)
