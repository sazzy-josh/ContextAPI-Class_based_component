import { useState } from 'react'
import './App.css'
import Body from './body'
import AuthContextProvider from './Context/AuthContext'
import ThemeContextProvider from './Context/ThemeContext'
import Navbar from './navbar'
import ToggleTheme from './toggleTheme'


function App() {
  return (
    <div className="App">
     <ThemeContextProvider>
       <AuthContextProvider>
        <Navbar />
        <Body />
       </AuthContextProvider> 
     </ThemeContextProvider>
           
    </div>
  )
}

export default App
