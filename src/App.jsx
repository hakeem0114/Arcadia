import './App.css'


//React component imports
//import Intro from './pages/Intro'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <h1
      className='heroText'
    >
      <Header/>
      <Home/>
      <Footer/>
    </h1>
  )
}

export default App
