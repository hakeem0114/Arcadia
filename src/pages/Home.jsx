//Css Imports
import '../App.css'

//Component Imports
import MainCarousel from '../components/Carousel'
import Products from '../components/Products'

//React Imports
//useEffect to render api data

//Router Imports
import { useLoaderData } from 'react-router-dom'

function Home() {

  // const cartData = useLoaderData() //Get loader data from route
  // console.log(cartData)
  
  return (
    <div>
      <MainCarousel/>
      <Products/>
    </div>
  )
}

export default Home
