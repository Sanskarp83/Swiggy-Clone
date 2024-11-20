import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header.jsx'
import Category from './Components/Category.jsx'
import TopRest from './Components/TopRest.jsx'
import OnlineDelivery from './Components/OnlineDelivery.jsx'


function App() {

  return (
     <>
     <Header/> 
     <Category/>
     <TopRest/>
     <OnlineDelivery/>  
     </>
  );
}

export default App
