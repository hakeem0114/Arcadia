import '../App.css'

//Component Imports
import ProductCard from './ProductCard'

function Products(props) {

  return (
      <div id='products' className='py-10 grid justify-center items-center text-center'>
            <div className='flex flex-col items-center gap-4'>
                <h1 className='text-2xl bg-black text-white py-2 w-80 text-center rounded-br-2xl'>
                ALL FEATURED ITEMS
                </h1>
                <span className='w-20 h-[3px] bg-black'></span>
                <p>
                We are very excited about this new initiative for Arcadia stylish wear. 
                It will provide a safe alternative for you, our clients, to browse and now shop some of our collections.
                </p>
            </div>

            {/*** MAP PRODUCT USING PRODUCT CARDS***/}
            <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-2 gap-20
                            md:grid-cols-4
            '>
                {
                    props.products.map((item)=>(
                        <ProductCard
                            key = {item._id}
                            product = {item}
                        />
                    ))
                }
            </div>


      </div>
  )
}

export default Products
