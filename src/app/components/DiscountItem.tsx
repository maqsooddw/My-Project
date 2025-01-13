import React from 'react'
import { FaCheck } from "react-icons/fa6";
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

const DiscountItem = () => {
  return (
    <div className='flex flex-col justify-center items-center'> 

{/* heading div */}<div className={`${josefinSans.className} text-heading text-[42px] leading-[49.22px] text-center font-bold mt-12`}><h3>Discount Item</h3></div>

{/* start discount item main product div */} <div className='relative flex w-[1214PX] h-[597PX]'>

    <div>

    {/* sub menue */} <div className='flex items-center absolute ml-[430px] justify-center text-heading z-10'>
        <ul className={`${lato.className} flex gap-4 text-center text-[18px] leading-[21.6px] font-[400px]`}>
            <li className=' hover:text-[#fb2e86] hover:underline hover:cursor-pointer'>Wood Chair</li>
            <li className=' hover:text-[#fb2e86] hover:underline hover:cursor-pointer'>Plastic Chair</li>
            <li className=' hover:text-[#fb2e86] hover:underline hover:cursor-pointer'>Sofa Colletion</li>
        </ul>
    </div>

    {/* text box */} <div className=''>
        <div className='mt-10'> 
            <h3 className={`${josefinSans.className} text-heading text-[35px] leading-[46.2px] tracking-1-5`}>20% Discount Of All Products</h3>
            <p className={`${josefinSans.className} text-[#fb2e86] text-[21px] leading-[27.72px] tracking-1-5 my-6`}>Eams Sofa Compact</p>
            <p className={`${lato.className} text-[#b7bacb] text-[17px] leading-[30px] tracking-2 font-[400px]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget<br />feugiat habitasse nec, bibendum condimentum.</p>
        </div>
        <div className='mt-9'>
            <ul className='flex text-center items-center justify-left gap-3 '>
                {/* <li> <img src='/Vector (1)A.png'alt='tick' className='w-[16px] h-[11px]'/></li> */}
                <li className='w-[16px] h-[11px] border-[2px] text-[#7569b2]'><FaCheck /></li>
                <li className={`${lato.className} text-[#b7bacb] text-[17px] leading-[30px] tracking-2 font-[400px]`}>Material expose like metals</li> 
                <li className='w-[16px] h-[11px] border-[2px] text-[#7569b2]'><FaCheck /></li>
                <li className={`${lato.className} text-[#b7bacb] text-[17px] leading-[30px] tracking-2 font-[400px]`}>Clear lines and geomatric figures</li>
            </ul>

            <ul className='flex text-center items-center justify-left gap-3 '>
                {/* <li> <img src='/Vector (1)A.png'alt='tick' className='w-[16px] h-[11px]'/></li> */}
                <li className='w-[16px] h-[11px] border-[2px] text-[#7569b2]'><FaCheck /></li>
                <li className={`${lato.className} text-[#b7bacb] text-[17px] leading-[30px] tracking-2 font-[400px]`}>Simple neutral colours.</li> 
                <li className='w-[16px] h-[11px] border-[2px] text-[#7569b2] ml-8'><FaCheck /></li>
                <li className={`${lato.className} text-[#b7bacb] text-[17px] leading-[30px] tracking-2 font-[400px]`}>Material expose like metals</li>
            </ul>
            {/* start button div */} <div>
                <button className={`${josefinSans.className} w-[200px] h-[57px] rounded-[2px]  text-[#FFFFFF] bg-[#fb2e86] text-[17px] leading-[19.92px] tracking-2 my-6`}>Shop Now</button>
            </div>
      
    </div>
    </div>

    </div>
        {/* image div */} <div className="relative flex justify-center items-center  z-0">
               {/* Red Circle Background */}
      <div className="absolute bg-[#fcecf1] rounded-full w-[400px] h-[400px] z-0"></div>
            <img src='/tortuga-01-b 1.png' alt='wood chair' className='w-[669px] h-[597px] z-10'/>
        </div>

{/* end discount item main product div */}</div>


      {/* main Div */} <div>

      </div>
    </div>
  )
}

export default DiscountItem
