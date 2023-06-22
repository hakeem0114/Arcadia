import '../App.css'

//TOMORROW
//Try using framer motion store 3d thing

function ProductCard(props) {

  // console.log(props.product)
  return (
      <div className=''>
        <img src={props.product.image} alt="image" />
      </div>
  )
}

export default ProductCard
