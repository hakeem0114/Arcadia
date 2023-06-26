import '../App.css'

//React Imports
import { useState } from 'react';

//React router Imports
import { useNavigate } from 'react-router-dom'; //Link image to productCard

//Redux Imports
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart, 
  deleteFromCart,
  incrementQTY,
  decrementQTY,
  resetCart
} from '../states/arcadiaSlice'

//React Icon Imports
import { AiOutlineCloseCircle } from 'react-icons/ai';


function CartItems() {
    let [productQTY, setproductQTY] = useState(0)

    const dispatch = useDispatch()
    const productItem = useSelector((state)=>state.arcadia.productData)

    // console.log(productItem.map((item)=>item))

    return (
        <div className='w-2/3 pr-10'>
            <div className='w-full'>
                <h2 className='font-titleFont text-2xl'>Checkout Items</h2>
            </div>

            <div>
                {
                 productItem.map((item)=>(
                        <div
                            key={item._id}
                            className='flex items-center justify-between gap-6 mt-6'
                        >
                            <div className='flex items-center gap-2'>
                                <AiOutlineCloseCircle
                                    className='text-xl text-gray-600 hover:text-amber-400 cursor-pointer duration-300'
                                />
                                <img 
                                    className='w-32 h-32 object-cover rounded-br-2xl'
                                    src={item.image} 
                                    alt="prodImage" 
                            />
                            </div>

                            <h2 className='w-52'>{item.title}</h2>
                            <h2 className='w-10'>${item.price}</h2>

                            <div className=' sm:rounded-br-3xl  w-42 md:w-72 flex items-center justify-center text-gray-500 gap-1 border p-1 md:gap-3 md:p-3'>
                                  <p className='text-xs md:text-lg'>Quantity</p>
                                  
                                  <div className=' flex items-center text-sm gap-4 font-semibold'>
                                    <button 
                                      onClick={()=>setproductQTY(productQTY+1)}
                                      className='border h-5 w-5 md:h-12 md:w-11 font-normal text-lg flex items-center justify-center px-2 
                                                  hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black active:shadow-md shadow-amber-200
                                      '>+</button>
                                      <span>{productQTY}</span>
                                    <button
                                      onClick={()=>setproductQTY(productQTY==0 ? (productQTY=0):productQTY-1)}
                                      className='border h-5 w-5 md:h-12 md:w-11 font-normal text-lg flex items-center justify-center px-2 
                                      hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black active:shadow-md shadow-amber-200
                                    '>-</button>
                                  </div>
                              </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
  }
  
  export default CartItems
  