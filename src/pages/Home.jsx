//Css Imports
import '../App.css'

//Component Imports
import MainCarousel from '../components/Carousel'
import Products from '../components/Products'

//React Imports
import { useEffect,useState } from 'react'

//Router Imports
import { useLoaderData } from 'react-router-dom'



function Home() {

  //Carrying api data to /home path on load
  const cartData = useLoaderData() //Get loader data from route
  
  //Render data on home
  const [products, setProducts] = useState([])

  useEffect(()=>{
    setProducts(cartData)
  },[cartData]) //Rerender when cardData api is called
  
  // console.log(products)
  
  return (
    <div id='home'>
      <MainCarousel/>
      <Products
        key = {products._id} 
        products= {products}
      />
    </div>
  )
}

export default Home
