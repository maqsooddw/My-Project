"use client"
import React from 'react'
import Everypageupperbox from '../components/Everypageupperbox'
import Submenuofproducts from '../components/Submenuofproducts'
import Products from '../components/Products'
import Prod from '../components/prod'
import { getImage } from '../Getdata'



export const Product = async () => {

  const products = await getImage()
  console.log(products)

  return (
<div>

<Everypageupperbox text="Shop Grid Default"/>
<Submenuofproducts />


<div className='w-full grid grid-cols-1 user-4k:grid-cols-4 user-2k:grid-cols-4 user-lg:grid-cols-4 user-md:grid-cols-3 justify-items-center items-center gap-4'>
  {products.map((value:any, index:any) => (

    
    <Prod
      key={value._id} // Add a unique key for each product
      
      _id={value._id}
      imageSrc={value.imageUrl}
      productName={value.name} // Use dynamic product name from the data
      originalPrice={value.price}
      discountedPrice={(value.price-(value.price*value.discountPercentage/100))}
    />
  ))}

 
</div>



{/* 
_id,
  price,
    name,
     "imageUrl": image.asset->url,
    description,
    stockLevel,
    discountPercentage,
    category, */}


 {/* start signature icon div */} <div className=' flex items-center justify-center w-full h-fit mt-20 mb-20'> 
 
 <div className='  flex items-center justify-center'>
<img src='/image 1174.png' alt='signature div' width={904} height={93} />
</div>
</div> 
</div> 

  )
}

export default Product
