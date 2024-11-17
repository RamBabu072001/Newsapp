
import './App.css'

import MycontextProvider from './MycontextProvider'

import Home from './Home'
import Header from './Header'

function App() {
  
  return (
    
      <MycontextProvider>
      <Header/>
      <Home/>
      
      </MycontextProvider>
    
  )
}

export default App
