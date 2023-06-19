import '../App.css'

//Asset Imports
import paymentImage from '../assets/footerAssets/payment.png'
import githubImage from '../assets/footerAssets/github.png'
import instagramImage from '../assets/footerAssets/instagram.png'
import linkedInImage from '../assets/footerAssets/linkedIn.png'

//React Icon Imports
import { HiUserCircle } from 'react-icons/hi';
import { FaApplePay} from 'react-icons/fa';
import { TiLocationArrow } from 'react-icons/ti';
import { MdOutlineSupportAgent} from 'react-icons/md';

function Footer() {

  return (
    <div 
      id='Footer' 
      className='bg-black text-[#949494] py-20 text-sm'
    >
      <div className='max-w-screen-xl mx-auto grid grid-cols-4'>
          {/***1st col: Website Info***/}
          <div className='flex flex-col gap-7 '>
              <div className=" text-3xl font-bold text-white dark:text-white transform transition duration-200 hover:scale-[1.01] hover:cursor-pointer">
                Arcadia <span className='line-through'>|||</span> 
              </div>
              <p className='text-white text-sm tracking-wide'><a href="#header">Arcadia.com</a></p>
              <img className='w-72' src={paymentImage} alt="payment" />

              <div className='flex flex-row gap-2 w-10 h-10'>
                    <img className='hover:scale-[1.05] duration-300 hover:cursor-pointer ease-in-out' src={githubImage} alt="git" />
                    <img className='hover:scale-[1.05] duration-300   hover:cursor-pointer ease-in-out' src={linkedInImage} alt="linkedin" />
                    <img className='hover:scale-[1.05] duration-300   hover:cursor-pointer ease-in-out' src={instagramImage} alt="ig" />
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
                  <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                      <span> <HiUserCircle size={30}/> </span> <a href="#user">My Account</a>
                  </p>
                  <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                      <span> <FaApplePay size={50}/> </span> <a href="#checkout">Checkout</a>
                  </p>
                  <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                      <span> <TiLocationArrow size={30}/> </span> <a href="#orders">My Orders</a>
                  </p>
                  <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                      <span> <MdOutlineSupportAgent size={30}/> </span> <a href="#contact">Contact Us</a>
                  </p>
              </div>
          </div>

          {/***4th col: Newsletter***/}
          <div className=''>
              <h2 className='text-2xl font-semibold text-white mb-4 md:flex justify-center'>Join Our Newsletter</h2>

              <div className='flex flex-col justify-center'>
                  <input 
                      type="name" name="nme" id="name" placeholder='Name' 
                      className='text-center bg-transparent border px-4 py-4 text-sm'
                  />
                  <input 
                      type="email" name="email" id="email" placeholder='email' 
                      className='text-center bg-transparent border px-4 py-4 text-sm'
                  />
                  <button 
                      className='py-2 text-center text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-white active:border-orange-300 '>
                    Subscribe to newsletter
                    {/* Link email.js & mailchimp newsletter here using  onSubmit={handleSubmit} */}
                  </button>
             </div>
          </div>

      </div>
    </div>
  )
}

export default Footer
