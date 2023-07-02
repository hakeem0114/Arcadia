import { useState } from "react"

//Email.js Imports
import emailjs from '@emailjs/browser';

//React Toastify for notifications Imports
import { toast } from 'react-toastify';



const Modal = () => {
    
    const [trackModal, setTrackModal] = useState(true)

    const handleModal =()=>{
        setTrackModal(false)
    }

 //Newsletter with email.js
  function handleNewsLetterSubmit(event){
    event.preventDefault()

    emailjs.sendForm('service_eeio13h', 'template_aj9hg46', event.target, 'lYwtEBV-JBe0Bbtv1')
    .then((result) => {
        console.log('SUCCESS!',result.text);
    }, (error) => {
      console.log('FAILED...', error.text);
    });
    setTrackModal(false)
    toast('Subcribed')
    
    
  }

  return (
    <div className="">
        {trackModal &&(
            <section className="z-50 sticky top-0 bg-gray-900 w-1/3  mx-auto my-2 ">
                <div className="py-8 px-4 max-w-screen-xl lg:py-16 lg:px-6 border-[2px] border-neutral-600 shadow-lg shadow-orange-500">

                    {/**CLOSE MODAL BUTTON**/}
                    <button onClick={handleModal} type="button" className="bg-gray-200 top-0 left-0 rounded-md p-1 m-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/**MAIN CONTENTS**/}
                    <div className="mx-auto max-w-screen-md sm:text-center">
                        <h2 className="mb-4 text-3xl tracking-tight font-extrabol sm:text-4xl text-white">Sign up for our newsletter</h2>
                        <p className="mx-auto mb-8 max-w-2xl font-light md:mb-12 sm:text-xl text-gray-400">Sign Up for an exclusive discount. Stay up to date with the roadmap progress, announcements and exclusive content.</p>
                        <form onSubmit={handleNewsLetterSubmit}>
                            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                                <div className="relative w-full">
                                    <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-300">Email address</label>
                                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                        </div>
                                    <input className="block p-3 pl-10 w-full text-sm  sm:rounded-none sm:rounded-l-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500" type="email" name="email" id="email" placeholder='email'  />
                                </div>
                                <div>
                                    <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center rounded-lg border cursor-pointer sm:rounded-none  text-white sm:rounded-r-lg bg-primary-600 hover:bg-yellow-700 focus:ring-primary-800">Subscribe</button>
                                </div>
                            </div>
                            <div className="text-center mx-auto max-w-screen-sm text-sm  newsletter-form-footer text-gray-300">We care about the protection of your data. <a href="#" className="font-medium text-primary-500 hover:underline">Read our Privacy Policy</a>.</div>
                        </form>
                    </div>
                </div>
            </section>
        )}

    </div>
  )
}

export default Modal


