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




 

</div> 

  )
}

export default Product
