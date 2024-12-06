import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Layout/Header/Header'
import Home from './Page/Home'

function App() {

  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default App
