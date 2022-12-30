import './index.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Sobre from './components/Sobre'
import Servico from './components/Servico'
import Carrossel from './components/Carrossel'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'

function App() {
    return (
        <div className="App">
            <Nav/>
            <Home/>
            <Sobre/>
            <Servico/>
            <Carrossel/>
            <Contact/>
            <Footer/>
            <ToastContainer autoClose={3000} />
        </div>
    )
}

export default App
