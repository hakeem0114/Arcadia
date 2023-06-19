import './App.css'


//React component imports
//import Intro from './pages/Intro'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <div
      className='heroText'
    >
      <Header/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
