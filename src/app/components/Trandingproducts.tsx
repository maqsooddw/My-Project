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

const Trandingproducts = () => {
  return (
    <div> {/* Main div */}



    {/* Heading */}<div className={`${josefinSans.className} text-[#1a0b5b] text-center mb-8`}>
        <h3 className="text-[28px] md:text-[36px] lg:text-[42px] font-semibold leading-[49.2px]">
        Trending Products
        </h3>
      </div>

{/* handiling all product div */} <div className='flex justify-center items-center'>



{/* product 1 */}
      <div className="w-[270px] h-[350px] shadow-lg rounded-lg overflow-hidden">
      {/* Product Image */}
      <div className="flex justify-center items-center w-[247px] h-[244px] bg-productBg shadow-md">
        <img
          src="/image 1171.png"
          alt="Trending Product 1"
          className="w-[171px] h-[171px]"
        />
      </div>
      {/* Product Title */}
      <div className="text-center mt-3">
        <p className={`${lato.className} text-[16px] font-medium text-gray-800`}>
          Cantilever chair
        </p>
      </div>
      {/* Product Price */}
      <div className="text-center mt-2">
        <ul className="flex gap-3 justify-center items-center">
          <li
            className={`${josefinSans.className} text-[14px] font-bold text-[#1a0b5b]`}
          >
            $26.00
          </li>
          <li
            className={`${josefinSans.className} text-[12px] font-medium text-[#b9bad6] line-through`}
          >
            $42.00
          </li>
        </ul>
      </div>
      </div>

{/* product 2 */}
      <div className="w-[270px] h-[350px] shadow-lg rounded-lg overflow-hidden">
      {/* Product Image */}
      <div className="flex justify-center items-center w-[247px] h-[244px] bg-productBg shadow-md">
        <img
          src="/image 1170.png"
          alt="Trending Product 2"
          className="w-[171px] h-[171px]"
        />
      </div>
      {/* Product Title */}
      <div className="text-center mt-3">
        <p className={`${lato.className} text-[16px] font-medium text-gray-800`}>
          Cantilever chair
        </p>
      </div>
      {/* Product Price */}
      <div className="text-center mt-2">
        <ul className="flex gap-3 justify-center items-center">
          <li
            className={`${josefinSans.className} text-[14px] font-bold text-[#1a0b5b]`}
          >
            $26.00
          </li>
          <li
            className={`${josefinSans.className} text-[12px] font-medium text-[#b9bad6] line-through`}
          >
            $42.00
          </li>
        </ul>
      </div>
      </div>


{/* product 3 */}
<div className="w-[270px] h-[350px] shadow-lg rounded-lg overflow-hidden">
      {/* Product Image */}
      <div className="flex justify-center items-center w-[247px] h-[244px] bg-productBg shadow-md">
        <img
          src="/image 31.png"
          alt="Trending Product 3"
          className="w-[171px] h-[171px]"
        />
      </div>
      {/* Product Title */}
      <div className="text-center mt-3">
        <p className={`${lato.className} text-[16px] font-medium text-gray-800`}>
          Cantilever chair
        </p>
      </div>
      {/* Product Price */}
      <div className="text-center mt-2">
        <ul className="flex gap-3 justify-center items-center">
          <li
            className={`${josefinSans.className} text-[14px] font-bold text-[#1a0b5b]`}
          >
            $26.00
          </li>
          <li
            className={`${josefinSans.className} text-[12px] font-medium text-[#b9bad6] line-through`}
          >
            $42.00
          </li>
        </ul>
      </div>
      </div>

    {/* product 4 */}
<div className="w-[270px] h-[350px] shadow-lg rounded-lg overflow-hidden">
      {/* Product Image */}
      <div className="flex justify-center items-center w-[247px] h-[244px] bg-productBg shadow-md">
        <img
          src="/image 32 (2).png"
          alt="Trending Product 4"
          className="w-[171px] h-[171px]"
        />
      </div>
      {/* Product Title */}
      <div className="text-center mt-3">
        <p className={`${lato.className} text-[16px] font-medium text-gray-800`}>
          Cantilever chair
        </p>
      </div>
      {/* Product Price */}
      <div className="text-center mt-2">
        <ul className="flex gap-3 justify-center items-center">
          <li
            className={`${josefinSans.className} text-[14px] font-bold text-[#1a0b5b]`}
          >
            $26.00
          </li>
          <li
            className={`${josefinSans.className} text-[12px] font-medium text-[#b9bad6] line-through`}
          >
            $42.00
          </li>
        </ul>
      </div>
      </div>

      </div> {/* end product div */} 

{/* start 23% prdocut div */}  <div className='flex h-[270px] w-full items-center justify-center gap-4'>

    {/* product A */} <div className={`w-[420px] h-[270px] p-4`}>
        <div>
            <ul>
                <li className={`${josefinSans.className} text-[26px] leading-[26px] text-[#151875]`}>23% off in all products</li>
                <li className={`${lato.className} text-[16px] leading-[19.2px] font-bold text-[#fb2e86]`}>Shop Now</li>
            </ul>
        </div>
        <div className='flex justify-end'>
            <img src='/image 1162.png' alt='23% discount 1st product' className='w-[213px] h-[207px]'/>
        </div>

    </div>

        {/* product B */} <div className={`w-[420px] h-[270px] p-4 bg-productBg`}>
        <div className=''>
            <ul>
                <li className={`${josefinSans.className} text-[26px] leading-[26px] text-[#151875]`}>23% off in all products</li>
                <li className={`${lato.className} text-[16px] leading-[19.2px] font-bold text-[#fb2e86]`}>View Collection</li>
            </ul>
        </div>
        <div className='flex justify-end'>
            <img src='/image 1161.png' alt='23% discount 1st product' className='w-[312px] h-[173px]'/>
        </div>

    </div>


    {/* handiling product xyx div*/} <div className='flex flex-col h-[270px] w-fit p-4 gap-6'>

{/* product x */} <div className='flex items-center h-[74px] w-[267px] bg-productBg'>        
            <div>
                <img src='/image 30.png' alt='product x' className='w-[64px] h-[71px]' />
            </div>

            <div>
                <ul className=''>
                    <li className={`${josefinSans.className} text-[16px] leading-[18.75px] font-bold text-[#151875]`}>Executive Seat chair</li>
                    <li className={`${lato.className} text-[12px] leading-[12px] font-semibold text-[#151875]`}>$32.00</li>
                </ul>
            </div>


{/* end of product x */} </div>

{/* product y */} <div className='flex items-center h-[74px] w-[267px] bg-productBg'>        
<div>
                <img src='/image 19.png' alt='product y' className='w-[64px] h-[71px]' />
            </div>

            <div>
                <ul className=''>
                    <li className={`${josefinSans.className} text-[16px] leading-[18.75px] font-bold text-[#151875]`}>Executive Seat chair</li>
                    <li className={`${lato.className} text-[12px] leading-[12px] font-semibold text-[#151875]`}>$32.00</li>
                </ul>
            </div>


{/* end of product y */} </div>

{/* product z */} <div className='flex items-center h-[74px] w-[267px] bg-productBg'>        
<div>
                <img src='/image 28.png' alt='product z' className='w-[64px] h-[71px]' />
            </div>

            <div>
                <ul className=''>
                    <li className={`${josefinSans.className} text-[16px] leading-[18.75px] font-bold text-[#151875]`}>Executive Seat chair</li>
                    <li className={`${lato.className} text-[12px] leading-[12px] font-semibold text-[#151875]`}>$32.00</li>
                </ul>
            </div>


{/* end of product x */} </div>

    </div>


{/*end 23% product div*/}</div>
      
      
      
      
      
                {/*  */}
      {/* ENDING MAIN DIV */} </div>
  )
}

export default Trandingproducts
