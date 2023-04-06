import React from 'react'
import './App.module.scss'
import Header from './components/basic/Header/Header'
import Root from './pages/Root/Root'
import Footer from './components/basic/Footer/Footer'
import classes from './App.module.scss'
import Notify from './components/common/Notify/Notify'

function App() {
  return (
    <div className={classes.body}>
      <Notify/>
      <Header/>
      <div className={classes.main}>
        <Root/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
