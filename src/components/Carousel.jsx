import '../App.css'

//React Imports
import { useState, useEffect } from 'react'


//Asset Imports  [Only images from Unsplash for backgrounds & wallpapers]
import image1 from '../assets/carouselAssets/image1.jpg'
import image2 from '../assets/carouselAssets/image2.jpg'
import image3 from '../assets/carouselAssets/image3.jpg'
import image4 from '../assets/carouselAssets/image4.jpg'

//Icons Imports
import { BsChevronDoubleLeft,BsChevronDoubleRight  } from 'react-icons/bs';


//Redux Imports
import { useSelector } from 'react-redux';

//Component Imports
import Modal from './Modal'


function MainCarousel() {

  const carouselData = [image1, image2, image3, image4]
  const [currentIndex, setImageIndex] = useState(2)

  
  //Handle autoslider
  useEffect(() => {
    const timer = setTimeout(() => {
     handleNextSlide()
    }, 5000);
    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //If its on the first index slide, goto last index slide,else goto prevCurrentIndex (currentIndex-1)
  const handlePrevSlide = ()=>{
    //Store current slide if its current index is 0 (1st image)
    const currentSlide = currentIndex ===0 //To reset carousel
    const newSlide =  currentSlide ? carouselData.length-1 : currentIndex -1
    setImageIndex(newSlide)
  }
  
  //If its on the last index slide, goto 1st index slide,else goto nextCurrentIndex (currentIndex+1)
  function handleNextSlide(){
      const currentSlide = currentIndex === carouselData.length-1 //To reset carousel
      const newSlide =  currentSlide ? 0 : currentIndex +1
      setImageIndex(newSlide)
  }

    //Modals
        //User Visit Tracking with localStorage
        let numberOfVisits = localStorage.getItem("numberOfVisits");

        if (!numberOfVisits) {
          numberOfVisits = 0;
        }
        numberOfVisits = +numberOfVisits + 1; 
      
        localStorage.setItem("numberOfVisits", numberOfVisits);

       // console.log(numberOfVisits)
      
        //Modal handling
        const [modal, setModal] = useState(false)
        const userData = useSelector((state)=> state.arcadia.userInfo)
        //Use Selector to see if string is in user's store

        useEffect(()=>{

          if(userData){
            const alreadyAppliedDiscount = userData.usedDiscount

            if(alreadyAppliedDiscount)setModal(false)
        }

          if(numberOfVisits > 10){
              setModal(false) //Keep modal close
          }else{
            setModal(true)
          }      
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[])
   
  return(
        <div>
              <div id='carousel' className='relative w-full h-[800px] lg:h-[900px] m-auto z-0 transition-all duration-1000'>
                    <div 
                      style={{backgroundImage: `url(${carouselData[currentIndex]})`}}
                      className='w-full h-full bg-cover bg-no-repeat bg-center flex transition-all delay-300 duration-1000 ease-in-out animate-fade' 
                    >  </div>

                    <div className='absolute top-[50%] left-5 rounded-full py-2 bg-black/25 text-white cursor-pointer
                                    hover: transition-transform duration-300  hover:border-2  hover:border-white
                    '>
                        <BsChevronDoubleLeft
                          size={50}
                          onClick={handlePrevSlide}
                        />
                    </div>

                    <div className='absolute top-[50%] right-5 rounded-full py-2 bg-black/25 text-white cursor-pointer
                                    hover: transition transform duration-300 hover:border-2 hover:border-white
                    '>
                        <BsChevronDoubleRight
                          size={50}
                          onClick={handleNextSlide}
                        />
                    </div>

                    <div
                      
                      className='banner  text-center md:left-48 drop-shadow-2xl rounded-br-3xl' 
                      // className='opacity-60  w-3/12 h-2/6 top-2/4 left-24'
                    >
                        
                            <div
                                onClick={()=>window.scrollTo(0, 0)}
                             >
                                <h1 className='
                                  font-bold text-2xl
                                  transition duration-300
                                '> SIGNUP NOW FOR A 10% DISCOUNT</h1>
                                <i className='underline underline-offset-4 text-amber-400 transition duration-300'><span href="#products">Check out the new arrivals</span ></i>
                            </div>
                        
                    </div>

                </div>
                <div className='sticky inset-y-7 bottom-10' >
                 {modal && (<Modal/>)}
                </div>
        </div>
  )

}

export default MainCarousel
