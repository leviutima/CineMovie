
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './Router.css'
import Home from '../pages/Home/Home'
import LoginPage from '../pages/LoginPage/LoginPage'
import CadastroPage from '../pages/CadastroPage/CadastroPage'

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <LoginPage/> }/>
            <Route path='/Cadastro' element= { <CadastroPage/> }/>
            <Route path='/Home' element={ <Home/> }/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
