import '../App.css'

//Icon Imports 
import { googleLogo, git } from '../assets/iconAssets/assets'

//1. Google & Github Login
    //Connect to firebase


//2. Formik & Yup Form: Make it a simple email & password, password confirmation

function User() {

  return (
      <div className='w-full flex flex-col items-center justify-center gap-10 py-20'>
            <div className='w-full flex items-center justify-center gap-10'>
                <div className='text-base w-60 h-12 tracking-wider border-[2px] border-gray-400 
                                rounded-md flex items-center justify-center gap-2 hover:border-yellow-600
                                cursor-pointer duration-300
                '>
                    <img className='w-8' src={git} alt="google" />
                    <span className='text-sm text-gray-900'>Sign in with Git</span>
                </div>
                <button className='bg-black text-white text-base py-3 px-8 tracking wide rounded-md
                            hover:bg-gray-800 duration-300
                ' >Sign Out</button>
            </div>
            <div className='w-full flex items-center justify-center gap-10'>
                <div className='text-base w-60 h-12 tracking-wider border-[2px] border-gray-400 
                                rounded-md flex items-center justify-center gap-2 hover:border-yellow-600
                                cursor-pointer duration-300
                '>
                    <img className='w-8' src={googleLogo} alt="google" />
                    <span className='text-sm text-gray-900'>Sign in with Google</span>
                </div>
                <button className='bg-black text-white text-base py-3 px-8 tracking wide rounded-md
                            hover:bg-gray-800 duration-300
                ' >Sign Out</button>
            </div>
       </div>

  )
}

export default User
