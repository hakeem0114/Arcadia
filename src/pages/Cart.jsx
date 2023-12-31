import '../App.css'

//React router Imports
import { Link } from "react-router-dom";


//React Imports
import { useState, useEffect } from 'react';

//Redux Imports
import { useSelector, useDispatch } from 'react-redux';
import { changeDiscount } from '../states/arcadiaSlice';

//Component Imports
import CartItems from '../components/CartItems';

//React Icon Imports
import { HiOutlineArrowLeft} from 'react-icons/hi';

//React Toastify for notifications Imports
import { ToastContainer, toast } from 'react-toastify';


//Stripe Imports
import StripeCheckout from 'react-stripe-checkout';

//Axios Imports (to fix the fetch() api errors)
import axios from 'axios';



function Cart() {

  //Redux
  const dispatch = useDispatch()

  //Redux Data Imports
  const productItem = useSelector((state)=>state.arcadia.productData)
  const userData = useSelector((state)=> state.arcadia.userInfo)


  //Stripe Pay
  const [stripePay, setStripePay] = useState(false)


  //Discount
  const discount  = 'FD1144'
  const [applyDiscount, setApplyDiscount] = useState(0)
  const [checkDiscount, setCheckDiscount] = useState(false)

    //Use Selector to see if string is in user's store
    if(userData){
      const alreadyAppliedDiscount = userData.usedDiscount
    }

    const handleDiscount = (e)=>{
      e.preventDefault()
      let discountInput  = e.target.value

      if(discountInput === discount && alreadyAppliedDiscount === false){
        //correct discount & has not been applied
        setCheckDiscount(true)
        setApplyDiscount(20)

        dispatch(
          (changeDiscount())
        )

        //Store discount in User array in redux
      }else{
        //Wrong discount
        setCheckDiscount(false)
      }
    }

  //Pricing
      let [totalPrice, setTotalPrice] = useState(0)
      const tax = 0.13
      const addOnTax = 1.13
      let finalPrice = ((addOnTax * totalPrice).toFixed(2) - applyDiscount)

    //Total Price
    useEffect(()=>{
     // setTotalPrice(productItem[0].price)
      let sum = 0
      productItem.map((item)=>{
          if(item.quantity >=1){
            sum += item.quantity * item.price
          }
      })
      setTotalPrice(sum)  
  },[productItem])
  

  
  //Checkout
  const handleCheckout =()=>{
    if(userData){
     setStripePay(true)
     // toast.success('Signed In')
    }else{
      toast.error('Please sign in to Checkout')
    }
  }

  //http://localhost:3000/pay

  //Stripe API POST to sever for authentication
  const stripePayment = async (token)=>{
    try{
         await axios.post('https://arcadia-server.onrender.com',{
            amount: finalPrice*100,
            token: token,

        })
       // const res = await req.json()
        //console.log(res)
    }
  catch(error){
        console.log(error)
    }
  }

  return (
      <div>
        {productItem.length>0 && (
                
                <div 
                  className='max-w-screen-xl 
                            
                            md:gap-28 md:mx-5 md:py-20 lg:flex lg:mx-auto
                  '
                >
                  {/***CHECKOUT ITEMS*/}
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
                              <span className='font-bold text-lg'>${(totalPrice).toFixed(2)}</span>
                            </p>

                            <p className='flex items-center gap-4 text-lg'>
                                Discount 
                                {!checkDiscount &&
                                    (
                                      <input 
                                          onChange={handleDiscount}
                                          className='rounded-br-xl text-center shadow-sm shadow-gray-500 focus:border-2 focus:outline-none focus:ring focus:shadow-yellow-700 hover:border-2 hover:after:shadow-yellow-700 active:ring active:shadow-yellow-700' 
                                          type="text" name='text' placeholder='' 
                                      />
                                    )
                                }

                                {checkDiscount &&
                                    (
                                      <i className='text-yellow-400' >Applied</i>
                                    )
                                }

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
                                 <i> {(tax*totalPrice).toFixed(2)}</i>
                                </span>
                            </p> 
                        </div>

                          <p className='font-semibold text-lg flex justify-between mt-6'>
                            Total   <span className='text-xl font-bold'>${finalPrice}</span>
                          </p>

                          <button 
                            onClick={handleCheckout}
                            className='text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300'
                          >Continue Checkout</button>

                          {/***SHOW STRIPE PAY ONCLICK TO CHECKOUT***/}
                          {stripePay &&
                            <div className='w-full flex mt-6 items-start justify-center'>
                                <StripeCheckout
                                  
                                  //  stripeKey='pk_test_51NNpYuL3c9Qh3QycDJu2J4mp368bAZ4qjaK7kHWmSC074kzCRUx5UpY3RUPEPXtnKL3E6zOMfHitMM9rMty9eb1j00d0ISxDLZ'
                                  stripeKey='pk_live_51NNpYuL3c9Qh3QyccYiCHTTsa8vEN4MzcgJ0txoPwzkw92wp4PAkQtikq19UwMUpqFDwkN7zJE0x4GzJZJkJG14m00uHvyPRQr'
                                    token={stripePayment}
                                    name='Arcadia E-Pay'
                                    amount={(finalPrice)*100}
                                    label='Pay to Arcadia'

                                    description={`Payment amount = $${finalPrice}`}
                                    email={userData.email}

                                    shippingAddress
                                    allowRememberMe

                                    
                                />
                                
                                {/* <div>
                                {handleAfterPayment}
                                </div> */}
                              
                            </div>

                            

                          }
                    </div>

                    <ToastContainer
                      position="top-right"
                      autoClose={500}
                      hideProgressBar={true}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="dark"
                    />
                </div>
              ) 
          }

          {/**NO ITEMS IN CART PAGE**/}
          {productItem.length ==0 &&
          (
            <div className='max-h-screen m-40 flex flex-col justify-center items-center gap-5'>
              <p  className='text-2xl mt-10 uppercase font-bold text-orange-600'>Your Shopping Cart is Empty. Check out exciting products BELOW!</p>
              <Link to='/Arcadia'>
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
