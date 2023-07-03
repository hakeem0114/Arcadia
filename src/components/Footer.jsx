import '../App.css'

//Asset Imports
import paymentImage from '../assets/footerAssets/payment.png'
import githubImage from '../assets/footerAssets/github.png'
import instagramImage from '../assets/footerAssets/instagram.png'
import linkedInImage from '../assets/footerAssets/linkedIn.png'

//React Icon Imports
import { HiUserCircle } from 'react-icons/hi';
import { FaStripe} from 'react-icons/fa';
import { TiLocationArrow } from 'react-icons/ti';
import { MdOutlineSupportAgent} from 'react-icons/md';

//React imports
import { Link} from 'react-router-dom';

//Email.js Imports
import emailjs from '@emailjs/browser';


//React Toastify for notifications Imports
import { ToastContainer, toast } from 'react-toastify';


function Footer() {

  //Newsletter with email.js
  function handleNewsLetterSubmit(event){
    event.preventDefault()

    emailjs.sendForm('service_eeio13h', 'template_aj9hg46', event.target, 'lYwtEBV-JBe0Bbtv1')
    .then((result) => {
        console.log('SUCCESS!',result.text);
    }, (error) => {
      console.log('FAILED...', error.text);
    });
  
    toast('Subcribed')
    
  }

  return (
    <div 
      id='Footer' 
      className='bg-black text-[#949494] text-sm'
    >
      <div className='
      max-w-screen-xl py-4 grid grid-cols-1/2 justify-center items-center gap-14 mx-auto 
      md:grid-cols-2 md:p-20 lg:grid-cols-4 lg:mx-auto

      '>
          {/***1st col: Website Info***/}
          <div className='flex flex-col'>
                <Link to='/Arcadia' className='transform duration-1000'>
                    <div className=" text-3xl font-bold text-white dark:text-white transform transition duration-200 hover:scale-[1.01] hover:cursor-pointer">
                          Arcadia <span className='line-through'>|||</span> 
                      </div>
                </Link>
                <p className='text-white text-sm tracking-wide'>Arcadia.com</p>
                <img className='w-72' src={paymentImage} alt="payment" />

                <div className='flex flex-row gap-2 w-32 h-10'>

                    <a   className=' rounded-2 w-full  hover:scale-[1.05]  duration-300 hover:cursor-pointer ease-in-out'  rel="noopener noreferrer" href="https://github.com/hakeem0114" target="_blank">
                      <img src={githubImage} alt="git" /> 
                    </a>

                    <a className=' rounded-2 w-full  hover:scale-[1.05]  duration-300 hover:cursor-pointer ease-in-out'  rel="noopener noreferrer" href="https://www.linkedin.com/in/hakeemabdul-razak/" target="_blank">
                     <img src={linkedInImage} alt="linkedin" />
                    </a>

                     <a className=' rounded-2 w-full  hover:scale-[1.05]  duration-300 hover:cursor-pointer ease-in-out'  href="https://hakeem0114.github.io/Portfolio/" target="_blank" rel="noreferrer">
                        <img src={instagramImage} alt="ig" />
                     </a>
               </div>
          </div>

          {/***2nd col: Find Us Info***/}
          <div>
             <h2 className='text-2xl font-semibold text-white mb-4'>Find us at</h2>
             <div className='text-base flex flex-col gap-2'>
                <p>Hakeem Abdul-Razak, B.Eng</p>
                <p>Email: hakeem0114@gmail.com </p>
                <p>Mobile(email preferred): <br/> +1 (416)-569-4699</p>
             </div>
          </div>

          {/***3rd col: User auth Info***/}
          <div>
              <h2 className='text-2xl font-semibold text-white mb-4'>User Profile</h2>

              <div className='text-base flex flex-col gap-2'>
                  <Link to='/Arcadia/user' className='transform duration-1000'>
                      <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                          <span> <HiUserCircle size={30}/> </span> <span >My Account</span>
                      </p>
                  </Link>

                  <Link to='/Arcadia/cart' className='transform duration-1000'>
                      <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                          <span> <FaStripe size={50}/> </span> <span>Checkout</span>
                      </p>
                  </Link>


                  <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                      <span> <TiLocationArrow size={30}/> </span> <span href="#orders">My Orders</span>
                  </p>
                  <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                      <span> <MdOutlineSupportAgent size={30}/> </span> <span href="#contact">Contact Us</span>
                  </p>
              </div>
          </div>

          {/***4th col: Newsletter***/}
          <div className=''>
              <h2 className='text-2xl font-semibold text-white mb-4 md:flex justify-center'>Join Our Newsletter</h2>

              
              <form className='flex flex-col justify-center' onSubmit={handleNewsLetterSubmit}>
                      <input 
                          type="name" name="name" id="name" placeholder='Name' 
                          className='text-center bg-transparent border px-4 py-4 text-md text-white focus:outline-none active:border-yellow-400 focus:border-yellow-400'
                      />
                      <input 
                          type="email" name="email" id="email" placeholder='email' 
                          className='text-center bg-transparent border px-4 py-4 text-md text-white focus:outline-none active:border-yellow-400 focus:border-yellow-400 '
                      />
                      <button 
                          className='rounded-br-2xl py-2 text-center text-md border font-bold uppercase text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-white active:outline-none active:border-orange-300 '>
                        Subscribe
                      </button>
              </form>
             
          </div>

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

export default Footer
