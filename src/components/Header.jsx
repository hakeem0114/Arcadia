//Css Imports
import '../App.css'

//React imports
import { useState } from 'react';
//import { useMediaQuery } from 'react-responsive'


//Image Imports
//import {headerLogo} from '../assets/assets'
import { IoIosHome } from 'react-icons/io';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IoIosArrowDropdown } from 'react-icons/io';
import { IoIosContact } from 'react-icons/io';



function Header() {

  const [isDropDown,setDropDown]=useState(false)

  function handleClick(){
    setDropDown((prevDropDown)=>!prevDropDown)
    console.log(isDropDown)
  }

  //Handle navigation & useDispatch from redux


  return (
    <nav id='header' className='w-full h-20 bg-white border-b-[2px] border-b-gray-800 opacity-95 relative z-10 flex justify-between ' >
          <div className='w-4/5 m-auto flex justify-between items-center' >
              <div className="text-3xl font-bold text-gray-900 dark:text-white transform transition duration-200 hover:scale-110 hover:cursor-pointer">
                {/* <img src={headerLogo} alt="headerLogo" className='w-24'/> */}
                Arcadia
              </div>
              
    
              <div >
                  <ul className='hidden md:visible md:flex flex-row gap-16 ' >
                 
                      <li className='transform transition duration-200 hover:scale-110 hover:cursor-pointer'> <IoIosHome size={30} /> </li>
                      <li className='flex justify-center transform transition duration-200 hover:scale-110 hover:cursor-pointer'>
                         <AiOutlineShoppingCart size={30}/> 
                         <div className='circle'>21</div>
                      </li>
                      <li className='transform transition duration-200 hover:scale-110 hover:cursor-pointer'> <IoIosContact size={30}/> </li>
                  </ul>

                  <div className='transform transition duration-200 hover:scale-110 hover:cursor-pointer md:hidden' > 
                    <IoIosArrowDropdown onClick={handleClick} size={30}/> 
                  </div>              
              </div>
          </div>
          {isDropDown &&
                                <ul className='visible absolute z-50 transform transition duration-200 hover:cursor-pointer  
                                                  left top-20 w-[30%] h-[320px] border-r border-r-gray-900 bg-gray-700 rounded-br-full
                                                 flex items-center flex-col gap-7
                                                 md:hidden 
                                                ' >
                                        <li className='mt-7 transform transition duration-200 hover:scale-110 hover:cursor-pointer hover:fill-slate-200'> <IoIosHome size={50} /> </li>
                                        <li className='transform transition duration-200 hover:scale-110 hover:cursor-pointer'> <AiOutlineShoppingCart size={50}/> </li>
                                        <li className='transform transition duration-200 hover:scale-110 hover:cursor-pointer'> <IoIosContact size={50}/> </li>
                                </ul>
          }
    </nav>
  )
}

export default Header
