//Css Imports
import '../App.css'

//React imports
import { useState } from 'react';
import { Link} from 'react-router-dom';

//Redux Imports
import { useSelector} from 'react-redux'
//import { addToCart } from '../states/arcadiaSlice';

//Image Imports
import { IoIosHome } from 'react-icons/io';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IoIosArrowDropdown } from 'react-icons/io';
import { IoIosContact } from 'react-icons/io';




function Header() {

  const [isDropDown,setDropDown]=useState(false)

  function handleClick(){
    setDropDown((prevDropDown)=>!prevDropDown)
  }

  //Redux

  const totalCartQuantity = useSelector((state)=>state.arcadia.productData).length
  const userData = useSelector((state)=>state.arcadia.userInfo)

  


  return (
    <nav id='header' className=' w-full h-20 bg-white border-b-[2px] border-b-gray-800 opacity-95 flex justify-between  sticky z-50 top-0' >
          <div className='w-4/5 m-auto flex justify-between items-center' >
              <Link to='/Arcadia' className='transform duration-1000'>
                <div id='home' className=" text-3xl font-bold text-slate-900 dark:text-white transform transition duration-300 hover:scale-110 hover:cursor-pointer  hover:text-amber-600">
                  Arcadia <span className='line-through'>|||</span> 
                </div>
              </Link>
              
    
              <div >
                  <ul className='hidden md:visible md:flex flex-row gap-16 ' >
                      <Link to='/Arcadia' className='transform duration-1000'>
                           <li  id='home' className='transform transition duration-300 hover:scale-110 hover:cursor-pointer  hover:text-amber-600'> <IoIosHome size={30} /> </li>
                      </Link>
                      
                      <Link to='/Arcadia/cart' className='transform duration-1000'>
                          <li className='flex justify-center transform transition duration-300 hover:scale-110 hover:cursor-pointer hover:text-amber-600'>
                            <AiOutlineShoppingCart size={30}/> 
                            <div className='circle'>{totalCartQuantity}</div>
                          </li>
                      </Link>

                      <Link to='/Arcadia/user' className='transform duration-1000 flex gap-5'>
                          <li className='transform transition duration-300 hover:scale-110 hover:cursor-pointer  hover:text-amber-600'> <IoIosContact size={30}/> </li>
                          <div className=' font-medium w-auto underline underline-offset-4 hover:text-amber-600 '>
                            {userData &&
                                <p>{userData.name}</p>
                            }
                          </div>
                      </Link>


                    </ul>

                  <div className='transform transition duration-300 hover:scale-110 hover:cursor-pointer md:hidden' > 
                    <IoIosArrowDropdown onClick={handleClick} size={30}/> 
                  </div>              
              </div>
          </div>
          {isDropDown &&
                                <ul className='visible absolute z-50 transform transition duration-300 hover:cursor-pointer
                                                  left top-20 w-[30%] h-[320px] border-r border-r-gray-900 bg-yellow-700 rounded-br-full
                                                 flex items-center flex-col gap-7  
                                                 md:hidden 
                                                ' >

                                        <Link to='/Arcadia' className='transform duration-1000'>
                                            <li id='home' className='mt-7 transform transition duration-300  hover:scale-110 hover:text-slate-200 hover:cursor-pointer'> <IoIosHome size={50} /> </li>
                                        </Link>

                                        <Link to='/Arcadia/cart' className='transform duration-1000'>
                                            <li id='checkout' className='transform transition duration-300 hover:scale-110  hover:text-slate-200 hover:cursor-pointer'> <AiOutlineShoppingCart size={50}/> </li>
                                        </Link>

                                        <Link to='/Arcadia/user' className='transform duration-1000'>
                                        <li id='user' className='transform transition duration-300 hover:scale-110  hover:text-slate-200 hover:cursor-pointer'> <IoIosContact size={50}/> </li>
                                        </Link>
                                </ul>
          }


    </nav>
  )
}

export default Header
