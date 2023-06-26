/* eslint-disable react-hooks/exhaustive-deps */

import '../App.css'

//React Imports
import { useEffect, useState } from 'react';
import { useLocation} from 'react-router-dom';

//Icon Imports
import {BsFillCartPlusFill}  from 'react-icons/bs';

//Redux Imports
import { useDispatch} from 'react-redux';
import {addToCart} from '../states/arcadiaSlice'

//React Toastify for notifications Imports
import { ToastContainer, toast } from 'react-toastify';


function Product() {

  //Redux to update productData intial State array onClick
  const dispatch = useDispatch()
  const addProduct = ()=>{
    //Takes in the updated productQTY to replace (1) from /home
    dispatch(
          addToCart({
            _id: productDetails._id,
            title: productDetails.title,
            image: productDetails.image,
            price: productDetails.price,
            quantity: productQTY,
            description: productDetails.description,
          })
    ) & 
          toast('Added')
  }

  let [productQTY, setproductQTY] = useState(1)

  //React Router
  const location = useLocation() //Returns location object of current URL with any options from useNavigate()

  const [productDetails, setProductDetails] = useState({})

  //Render the data from location state & update it to local state(productDetails,)
  useEffect(()=>{
    setProductDetails(location.state.item)
  },[]) // eslint-disable-next-line react-hooks/exhaustive-deps
  //console.log(productDetails.price)


  return (
      <div className=''>
        {productDetails &&
                  <div className='
                            
                       ml-4 mr-4 my-10 flex gap-10
                       max-w-screen-xl md:mx-auto
                            
                  '> 
                      <div className=' md:-ml-32 h-[800px] md:h-[650px] md:w-3/5 shadow-xl shadow-yellow-700 w-2/5 relative'>
                          <img 
                              className='w-full h-full object-cover  ' 
                              src={productDetails.image} 
                              alt="prodimage" 
                          />
                          <div className='absolute top-4 left-0'>
                              {productDetails.isNew && (
                                <p className='rounded-br-2xl bg-black text-white font-semibold font-titleFont px-6 py-1'> 
                                    Sale
                                </p>
                              )}
                          </div>
                      </div>

                      <div className='w-2/5 flex flex-col justify-center gap-12 md:w-3/5 md:mr-20'>
                        <div>
                            <h2 className='text-xl font-semibold md:text-4xl'>{productDetails.title}</h2>
                        </div>
                        <div className='flex items items-center gap-4 mt-3'>
                            <i className='text-xl line-through text-amber-500 '>${productDetails.oldPrice}</i>
                            <p className='text-2xl font-medium'>${productDetails.price}</p>
                          </div>

                          <div className='text-base text-gray-500 -mt-3'>
                            <p>{productDetails.description}</p>
                          </div>

                          <div className='flex flex-col gap-4'>
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

                             <button 
                                onClick={addProduct}
                              className='rounded-br-3xl md:w-72 flex justify-center gap-2 md:gap-5 bg-black text-white py-3 px-6 active:bg gray-800  hover:bg-gray-700 hover:text-white cursor-pointer
                            '>
                                <span>Add to Cart</span> <span><BsFillCartPlusFill size={30}/></span>
                              </button>
                          </div>
                          <p className='text-base text-gray-500'>Category: <span className='font-bold capitalize'>{productDetails.category}</span></p>

                      </div>
      
                 </div>
        }
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

export default Product
