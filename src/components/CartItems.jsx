import '../App.css'

//React router Imports
import { Link } from "react-router-dom";

//Redux Imports
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteFromCart,
  incrementQTY,
  decrementQTY,
  resetCart
} from '../states/arcadiaSlice'

//React Icon Imports
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { HiOutlineArrowLeft} from 'react-icons/hi';


function CartItems() {

    //Redux
    const dispatch = useDispatch()
    const productItem = useSelector((state)=>state.arcadia.productData)



    return (
        <div className='w-[1/3] p-5 lg:w-2/3  '>

            {productItem.length>0 &&
                (
                    <div>
                                            <div className='w-full'>
                                                <h2 className=' flex justify-center md:flex-none font-titleFont text-2xl'>Checkout Items</h2>
                                            </div>

                                            <div className=''>
                                                    {
                                                    productItem.map((item)=>(
                                                            <div
                                                                key={item._id}
                                                                className='flex flex-col md:flex-row items-center justify-between gap-6 mt-6'
                                                            >
                                                                <div className='flex items-center gap-2'>
                                                                    <AiOutlineCloseCircle size={30}
                                                                        onClick={()=>dispatch(deleteFromCart(item._id))}
                                                                        className='text-xl text-gray-600 hover:text-amber-400 cursor-pointer duration-300'
                                                                    />
                                                                    <img 
                                                                        className='w-32 h-32 object-cover rounded-br-2xl'
                                                                        src={item.image} 
                                                                        alt="prodImage" 
                                                                />
                                                                </div>
                                    
                                                                <h2 className='w-52 text-center'>{item.title}</h2>
                                                                <div className='flex flex-col justify-center items-center'>
                                                                    <h2 className='w-10 text-amber-500'>${item.price}</h2>
                                                                    {/* {item.quantity>=1?item.quantity:1} */}
                                                                    <h2 className='w-10'>{(item.quantity>=2)?(<i>${item.price * item.quantity}</i>):''}</h2>
                                                                </div>
                                    
                                                                <div className='  w-42 md:w-72 flex items-center justify-center text-gray-500 gap-1 border p-1 md:gap-3 md:p-3'>
                                                                    <p className='text-xs md:text-lg'>Quantity</p>
                                                                    
                                                                    <div className=' flex items-center text-sm gap-4 font-semibold'>
                                                                        <button 
                                                                            onClick={()=>dispatch(incrementQTY({
                                                                                _id: item._id,
                                                                                title: item.title,
                                                                                image: item.image,
                                                                                price: item.price,
                                                                                quantity: 1,
                                                                                description: item.description,
                                                                            }))}
                                                                            className='border h-5 w-5 md:h-12 md:w-11 font-normal text-lg flex items-center justify-center px-2 
                                                                                        hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black active:shadow-md shadow-amber-200
                                                                        '>+</button>

                                                                        <span>{item.quantity>=1?item.quantity:1}</span>

                                                                        <button
                                                                            onClick={()=>dispatch(decrementQTY({
                                                                                _id: item._id,
                                                                                title: item.title,
                                                                                image: item.image,
                                                                                price: item.price,
                                                                                quantity: 1,
                                                                                description: item.description,
                                                                            }))}
                                                                            className='border h-5 w-5 md:h-12 md:w-11 font-normal text-lg flex items-center justify-center px-2 
                                                                            hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black active:shadow-md shadow-amber-200
                                                                        '>-</button>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                    <button 
                                                        onClick={()=>dispatch(resetCart(productItem))}
                                                        className='mx-auto md:ml-auto rounded-br-3xl bg-orange-500 text-white mt-8 py-1 px-6 hover:bg-yellow-400 duration-300'
                                                    >
                                                        CLEAR
                                                    </button>
                                    
                                                    <Link to='/'>
                                                        <button className='mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300'>
                                                            <span>
                                                            < HiOutlineArrowLeft />
                                                            </span>
                                                            Go Back
                                                        </button>
                                                    </Link>
                                                </div>
                    </div> 

                )
            }
            

        </div>
    )
  }
  
  export default CartItems
  