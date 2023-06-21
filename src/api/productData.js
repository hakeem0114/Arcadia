//Fake items from fakestoreapi.com

export default async function productData(){
    const products = await fetch('https://fakestoreapiserver.reactbd.com/products')
    const response = await products.json()

   return response
}
