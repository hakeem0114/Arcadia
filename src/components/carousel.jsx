import '../App.css'

//React Imports
import { useState } from 'react'


//Asset Imports  [Only images from Unsplash for backgrounds & wallpapers]
import image1 from '../assets/carouselAssets/image1.jpg'
import image2 from '../assets/carouselAssets/image2.jpg'
import image3 from '../assets/carouselAssets/image3.jpg'
import image4 from '../assets/carouselAssets/image4.jpg'

//React Carousel Imports
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

//Icons Imports
import { BsChevronDoubleLeft,BsChevronDoubleRight  } from 'react-icons/bs';

function MainCarousel() {

  const carouselData = [image1, image2, image3, image4]

  const [currentIndex, setImageIndex] = useState(2)

  //If its on the first index slide, goto last index slide,else goto prevCurrentIndex (currentIndex-1)
  const handlePrevSlide = ()=>{
    //Store current slide if its current index is 0 (1st image)
    const currentSlide = currentIndex ===0 //To reset carousel
    const newSlide =  currentSlide ? carouselData.length-1 : currentIndex -1
    setImageIndex(newSlide)
  }
  
  //If its on the last index slide, goto 1st index slide,else goto nextCurrentIndex (currentIndex+1)
  const handleNextSlide = ()=>{
      const currentSlide = currentIndex === carouselData.length-1 //To reset carousel
      const newSlide =  currentSlide ? 0 : currentIndex +1
      setImageIndex(newSlide)
  }
  return(
    <div className='w-full h-[800px] m-auto relative z-0'>
        <div 
          style={{backgroundImage: `url(${carouselData[currentIndex]})`}}
          className='w-full h-full bg-cover bg-no-repeat bg-center transition-transform duration-500 delay-1000 ease-in-out' 
        >  </div>

        <div className='absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 rounded-full py-2 bg-black/25 text-white cursor-pointer
                        hover: transition-transform duration-200  hover:border-2  hover:border-white
        '>
            <BsChevronDoubleLeft
              size={50}
              onClick={handlePrevSlide}
            />
        </div>

        <div className='absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 rounded-full py-2 bg-black/25 text-white cursor-pointer
                        hover: transition-transformduration-200 hover:border-2 hover:border-white
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
          <div>
            <h1 className='
               font-bold text-2xl
            '>SIGNUP NOW FOR A 10% DISCOUNT</h1>
            <i className='underline underline-offset-4 text-amber-400 transition duration-200 hover:scale-150 hover:cursor-pointer'><a href="#products">Check out the new arrivals</a></i>

          </div>
        </div>

    </div>
  )

}

export default MainCarousel
