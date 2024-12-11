import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Layout/Header/Header'
import Home from './Page/Home'
import Footer from './Layout/Footer/Footer'

function App() {

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
