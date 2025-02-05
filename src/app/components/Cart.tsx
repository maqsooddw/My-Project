"use client";


import React from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { Josefin_Sans } from 'next/font/google';
import { Lato } from 'next/font/google';

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
});




interface CartItem {
  _id: string | number;
  imageUrl: string;
  name: string;
  price: number;
  discountPercentage: number;
  description: string;
  quantity: number;
}

interface CartProps {
  cart: CartItem[];
  updateQuantity: (productId: string | number, quantity: number) => void;
  removeFromCart: (productId: string | number) => void;
}

export default function Cart({ cart, updateQuantity, removeFromCart }: CartProps) {
  return (
    <div className="mt-8 p-4 bg-gray-100 rounded-lg">
      <h2 className="text-lg font-bold">Shopping Cart ({cart.length})</h2>

      {cart.length > 0 ? (
        <table className="w-fit table-auto border-collapse">
          <thead>
            <tr className={`${josefinSans.className} text-[20px] leading-[23.44px] text-[#1d3178]`}>
              <th className="p-2 text-left">Product</th>
              <th className="p-2 text-left">Price</th>
                         
              <th className="p-2 text-left">Quantity</th>

            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item._id} className="border-b">
   
<td className="p-2">
              
{/* Main div */}
<div className="flex items-center gap-4"> {/* Add gap between child elements */}

  {/* Picture div and cross mark */}
  <div className="flex relative w-[84px] h-[88px] bg-red-600">
    {/* Close icon positioned at the top-right corner */}
    <div className="absolute z-20 top-0 right-0">
      <IoMdCloseCircle />
    </div>

    {/* Image container */}
    <div className="bg-yellow-200 absolute z-10">
      <img src={item.imageUrl} alt={item.name} width={83} height={87} />
    </div>
  </div>

  {/* List container */}
  <div className="">
    <ul>
      <li className={`${josefinSans.className} text-[14px] leading-[16.41px] font-bold text-[#000000]`}>{item.name}</li>
     
      <li> <div className="flex">
        <div className={`${josefinSans.className} text-[12px] leading-[14.06px] text-[#a1a8c1]`}>Description : </div>
        <div className={`${josefinSans.className} text-[14px] leading-[16.41px] text-[#a1a8c1]`}>{item.description}</div>
       </div> </li>

        <li> <div className="flex">
        <div className={`${josefinSans.className} text-[12px] leading-[14.06px] text-[#a1a8c1]`}>Items Id : </div>
        <div className={`${josefinSans.className} text-[14px] leading-[16.41px] text-[#a1a8c1]`}>{item._id}</div>
       </div> </li>
    </ul>
  </div>

</div>           
                </td>
          
                
                <td className={`${josefinSans.className} text-[14px] leading-[16.46px] text-[#334072]`}>
  {((item.price - (item.price * item.discountPercentage) / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }))}
</td>
               
  
                <td className="p-2">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item._id, item.quantity + 1)}
                      className="flex justify-center items-center bg-[#e7e7ef] text-[#b3b4b7] px-2 py-1 w-[12px] h-[15px] rounded"
                    >
                      +
                    </button>
                    <p className={`${josefinSans.className} bg-[#f0eff2] text-[#b3b4b7] text-[12px] leading-[14.06]`}>{item.quantity}</p>
                    <button
                      onClick={() => updateQuantity(item._id, item.quantity - 1)}
                      className="flex justify-center items-center bg-[#e7e7ef] text-[#b3b4b7] px-2 py-1 w-[12px] h-[15px] rounded"
                    >
                      -
                    </button>
                  </div>
                </td>
          
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
}
