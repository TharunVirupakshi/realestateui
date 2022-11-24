import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import './App.css'
import { Router, Route, Form,} from 'react-router-dom'
import Header from './components/header/Header'
import Formbox from './components/formbox/Formbox'
const App = () => {
  return (
    <div className='main-wrapper'>
      <Sidebar/>
      <div className='main-content'>

      <Header/>   
     <Formbox/>

      </div>
    </div>
  )
}

export default App
