/* eslint-disable react/prop-types */
import '../App.css'


//React router Imports
import { useNavigate } from 'react-router-dom';

//React Component Imports
// import Product from './Product';

//React Icon Imports
import { FaCartArrowDown} from 'react-icons/fa';




function ProductCard(props) {

  //String manipulation for professional hyperlinks (remove spaces)
  const _id = props.product.title
  const idString = _id.toLowerCase().split(" ").join("")

  //Navigation
  const navigate = useNavigate()

  const gotoProduct = ()=>{ //Pass along clicked product state details to new path then useLocation to extract
    
    navigate(`/product/${idString}`,{
      state:{ item: props.product }
    })
  }

  return (
    <div className='group' >
        {/**PRODUCT IMAGE**/}
        <div onClick={gotoProduct} className='z-10 w-full h-96 cursor-pointer overflow-hidden '>
          <img 
            src={props.product.image} 
            alt="image"
            className=' shadow-2xl w-full h-full object-cover group-hover:scale-110 duration-300'
          />
        </div>

        {/**PRODUCT INFORMATION**/}
        <div className='relative w-full border-[2px] px-2 py-4 rounded-br-3xl'>
            <div className='flex justify-between items-center'>
                <div>
                    <h2 
                      className='font-titleFont text-base font-bold
                    '>
                        {props.product.title}
                    </h2>
                </div>

                <div className='w-32 overflow-hidden text-sm flex justify-center relative'>
                   <div 
                      className='flex gap-2 
                                transform group-hover:translate-x-24 
                                transition-transform duration-500
                   '>
                      <i className='line-through text-amber-400 '>${props.product.oldPrice}</i>
                      <i className='font-semibold'>${props.product.price}</i>
                   </div>

                    
                    {/**On hover, show checkout & make it dissapear**/}
                   <p className='absolute z-20  text-gray-600 hover:text-gray-900
                                  flex items-center gap-1 transform translate-y-6 
                                  group-hover:translate-y-0 transition-transform cursor-pointer duration-500
                   '>
                        <FaCartArrowDown size={20}/>
                   </p>
                </div>

            </div>
            <div className='z-20 absolute -top-[385px] left-0'>
                  {props.product.isNew && (
                    <p className=' rounded-br-2xl bg-black text-white font-semibold font-titleFont px-6 py-1'> 
                        Sale
                    </p>
                  )}
        </div>
        </div>

    </div>
  )
}

export default ProductCard
