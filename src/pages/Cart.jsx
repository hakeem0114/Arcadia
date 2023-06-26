import '../App.css'

//React router Imports
import { Link } from "react-router-dom";


//React router Imports
import { useState, useEffect } from 'react';

//Redux Imports
import { useSelector } from 'react-redux';

//Component Imports
import CartItems from '../components/CartItems';

//React Icon Imports
import { HiOutlineArrowLeft} from 'react-icons/hi';


function Cart() {

  const productItem = useSelector((state)=>state.arcadia.productData)

      //States
      let [totalPrice, setTotalPrice] = useState(0)

    //Total Price
    useEffect(()=>{
      let sum = 0
      productItem.map((item)=>{
          sum += item.quantity * item.price
      })
      setTotalPrice(sum)
  },[productItem])
  
  return (
      <div>
        {productItem.length>0 && (
                
                <div 
                  className='max-w-screen-xl 
                            
                            md:gap-28 md:mx-5 md:py-20 lg:flex lg:mx-auto
                  '
                >
                    <CartItems/>


                    {/***CART SUMMARY*/}
                    <div 
                        className=' 
                                  flex flex-col w-[2/3] mx-9 md:mx-1 md:mr-10 md:pr-5 mb-5 lg:h-2/4
                                  md:rounded-br-2xl md:w-auto lg:w-2/3 bg-[##fefce8] py-6 px-4 shadow-sm shadow-gray-500
                        '
                    >
                        <div className=' flex flex-col gap-6 border-b-[2px] border-b-gray-500 pb-6'>
                            <h2 className='text-2xl font-medium'>SUMMARY</h2>

                            <p className='flex items-center gap-4 text-lg'>
                              Subtotal 
                              <span className='font-bold text-lg'>${(totalPrice).toFixed(3)}</span>
                            </p>

                            <p className='flex items-start gap-4 text-lg'>
                                Shipping 
                                <span>
                                 <i> Free Shipping Till GTA VI release</i>
                                </span>
                            </p> 

                            <p className='flex items-start gap-4 text-lg'>
                                GST/HST 
                                <span>
                                 <i> {(0.13*totalPrice).toFixed(3)}</i>
                                </span>
                            </p> 
                        </div>
                        <p className='font-semibold text-lg flex justify-between mt-6'>
                          Total   <span className='text-xl font-bold'>${(1.13*totalPrice).toFixed(3)}</span>
                        </p>
                        <button className='text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300'>Continue Checkout</button>
                    </div>
                </div>
              ) 
          }

          {/**NO ITEMS IN CART PAGE**/}
          {productItem.length ==0 &&
          (
            <div className='max-h-screen m-40 flex flex-col justify-center items-center gap-5'>
              <p  className='text-2xl mt-10 uppercase font-bold text-orange-600'>Your Shopping Cart is Empty. Check out exciting products BELOW!</p>
              <Link to='/'>
                    <button className='text-lg mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300'>
                        <span> < HiOutlineArrowLeft  size={30}/> </span>

                      Go Back To Shopping
                    </button>
                </Link>           
             </div>
          )}
      </div>
  )
}

export default Cart
