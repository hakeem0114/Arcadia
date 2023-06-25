//React Imports
import './App.css'

//React component imports
//import Intro from './pages/Intro'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import Product from './components/Product'

//Page Imports
import Cart from './pages/Cart'

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
        {/* <Route path='/product' element={<Product/>} /> */}
        <Route path='/product/:id' element={<Product/>} />
    </Route>
  )
)


function App() {

  return (
    <div
      className=''
    >
      <RouterProvider
        router={router}
      />
    </div>
  )
}

export default App
