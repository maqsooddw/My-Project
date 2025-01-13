import React from 'react'
import { Josefin_Sans } from 'next/font/google';
import { Lato } from 'next/font/google';
import styles from '/LegendsList.module.css';
import Link from 'next/link';

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
});


const Topcategories = () => {
  return (
    <div>
  
{/* heading div */}<div className={`${josefinSans.className} text-heading text-[42px] leading-[49.22px] text-center font-bold mt-12`}><h3>Discount Item</h3></div>


{/* handiling all product div */} <div className='flex justify-center gap-6 items-center'>



{/* product 1 */}
<div className="flex flex-col items-center justify-center relative w-[269px] h-[345px]">
      {/* Product Image */}
      <div className="flex flex-col justify-center items-center w-[247px] h-[244px] z-0">
      <div className="absolute bg-[#9575e5] rounded-full w-[269px] h-[269px] ml-[-10px] mb-[-15px] z-0"></div>
      <div className="absolute bg-[#fcecf1] rounded-full w-[269px] h-[269px] z-0"></div>
  
        <img
          src="/image 20.png"
          alt="Topcatogory Product 1"
          className="w-[178px] h-[178px] z-10"
        />
        <div className='flex justify-center items-center '><button className={ `${josefinSans.className} text-[#FFFFFF] mt-5
        text-center absolute w-[94px] h-[29px] rounded-[2px] bg-[#08d15f] text-[12px] leading-[12px]`}>View Shop</button></div>
      </div>

      {/* Product Price */}
      <div className="text-center mt-6">
        <ul className="flex flex-col gap-3 justify-center items-center">
          <li
            className={`${josefinSans.className} text-[20px] font-[400px] leading-[23.44px] text-[#151875]`}
          >
          Mini LCW Chair
          </li>
          <li
            className={`${josefinSans.className} text-[16px] leading-[16px] font-medium text-[#151875]`}
          >
            $56.00
          </li>
        </ul>
      </div>
      </div>

      {/* product 2 */}
<div className="flex flex-col justify-center relative w-[269px] h-[345px]">
      {/* Product Image */}
      <div className="flex justify-center items-center w-[247px] h-[244px] z-0">
      <div className="absolute bg-[#fcecf1] rounded-full w-[269px] h-[269px] z-0"></div>
        <img
          src="/image 1168a.png"
          alt="Topcatogory Product 2"
          className="w-[178px] h-[178px] z-10"
        />
      </div>

      {/* Product Price */}
      <div className="text-center mt-6">
        <ul className="flex flex-col gap-3 justify-center items-center">
          <li
            className={`${josefinSans.className} text-[20px] font-[400px] leading-[23.44px] text-[#151875]`}
          >
          Mini LCW Chair
          </li>
          <li
            className={`${josefinSans.className} text-[16px] leading-[16px] font-medium text-[#151875]`}
          >
            $56.00
          </li>
        </ul>
      </div>
      </div>

          {/* product 3 */}
<div className="flex flex-col justify-center relative w-[269px] h-[345px]">
      {/* Product Image */}
      <div className="flex justify-center items-center w-[247px] h-[244px] z-0">
      <div className="absolute bg-[#fcecf1] rounded-full w-[269px] h-[269px] z-0"></div>
        <img
          src="/image 1171a.png"
          alt="Topcatogory Product 3"
          className="w-[178px] h-[178px] z-10"
        />
      </div>

      {/* Product Price */}
      <div className="text-center mt-6">
        <ul className="flex flex-col gap-3 justify-center items-center">
          <li
            className={`${josefinSans.className} text-[20px] font-[400px] leading-[23.44px] text-[#151875]`}
          >
          Mini LCW Chair
          </li>
          <li
            className={`${josefinSans.className} text-[16px] leading-[16px] font-medium text-[#151875]`}
          >
            $56.00
          </li>
        </ul>
      </div>
      </div>

    
    {/* product 4 */}
<div className="flex flex-col justify-center relative w-[269px] h-[345px]">
      {/* Product Image */}
      <div className="flex justify-center items-center w-[247px] h-[244px] z-0">
      <div className="absolute bg-[#fcecf1] rounded-full w-[269px] h-[269px] z-0"></div>
        <img
          src="/image 20.png"
          alt="Topcatogory Product 4"
          className="w-[178px] h-[178px] z-10"
        />
      </div>

      {/* Product Price */}
      <div className="text-center mt-6">
        <ul className="flex flex-col gap-3 justify-center items-center">
          <li
            className={`${josefinSans.className} text-[20px] font-[400px] leading-[23.44px] text-[#151875]`}
          >
          Mini LCW Chair
          </li>
          <li
            className={`${josefinSans.className} text-[16px] leading-[16px] font-medium text-[#151875]`}
          >
            $56.00
          </li>
        </ul>
      </div>
      </div>

      </div> {/* end product div */} 



    </div>
  )
}

export default Topcategories
