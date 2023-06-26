import '../App.css'

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

//Component Imports
import CartItems from '../components/CartItems';


function Cart() {

  const dispatch = useDispatch()
  const productItem = useSelector((state)=>state.arcadia.productData)

  // console.log(productItem)
  return (
      <div>
        {productItem && (
                
                <div className='max-w-screen-xl mx-auto py-20 flex'>
                    <CartItems/>


                    {/***CART SUMMARY*/}
                    <div className=' rounded-br-2xl w-1/3 bg-[##fefce8] py-6 px-4 shadow-sm shadow-gray-500'>
                        <div className=' flex flex-col gap-6 border-b-[2px] border-b-gray-500 pb-6'>
                            <h2 className='text-2xl font-medium'>SUMMARY</h2>

                            <p className='flex items-center gap-4 text-lg'>
                              Subtotal {''}
                              <span className='font-bold text-lg'>$200</span>
                            </p>

                            <p className='flex items-start gap-4 text-lg'>
                                Shipping {''}
                                <span>
                                 <i> Free Shipping Till 2077</i>
                                </span>
                            </p> 

                            <p className='flex items-start gap-4 text-lg'>
                                HST (Tax) {''}
                                <span>
                                 <i> {8*2} * 13%</i>
                                </span>
                            </p> 
                        </div>
                        <p className='font-semibold text-lg flex justify-between mt-6'>
                          Total   <span className='text-xl font-bold'>$200</span>
                        </p>
                        <button className='text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300'>Continue Checkout</button>
                    </div>
                </div>
              ) 
          }
      </div>
  )
}

export default Cart
