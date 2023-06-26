//React Imports
import './App.css'

//React component imports
//import Intro from './pages/Intro'
import Header from './components/Header'
import Footer from './components/Footer'
import Product from './components/Product'

//Page Imports
import Home from './pages/Home'
import Cart from './pages/Cart'
import User from './pages/User'

//React Router Imports
import {
  createBrowserRouter,
  RouterProvider,
  Outlet, 
  ScrollRestoration,
  createRoutesFromElements,
  Route
} from "react-router-dom"; 
////Outlet renders child routes. ScrollRestoration to use the browser default resto on refresh 
////Loader gives aync data to route element before it renders
///Scroll Restoration restores default browser behaviour. Scroll to component before <Scroll Restorarion/>

//Api Imports
import productData from './api/productData'



/********* RENDERING *********/

//Parent router component
function PageLayout(){
    return(
        <div>
              <Header/>
              <ScrollRestoration/>
              <Outlet/>
              <Footer/>
        </div>
    )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={< PageLayout/>} >

        <Route  path='/' element={<Home/>} loader={productData} />

        <Route  path='/cart' element={<Cart/>} />
        <Route path='/product/:id' element={<Product/>} />
        <Route path='/user' element={<User/>} />
    </Route>
  )
)


function App() {

  return (
    <div
      className='scroll-smooth'
    >
      <RouterProvider
        router={router}
      />
    </div>
  )
}

export default App
