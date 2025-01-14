import React from 'react';
import { FaCheck } from "react-icons/fa6";
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

const DiscountItem = () => {
  return (
    <div className='flex flex-col justify-center items-center px-4 sm:px-6 lg:px-16'> 
      {/* Heading */}
      <div className={`${josefinSans.className} text-heading text-center text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] leading-[49.22px] font-bold mt-8 sm:mt-12`}>
        <h3>Discount Item</h3>
      </div>

      {/* Main Discount Item Section */}
      <div className='relative flex flex-col lg:flex-row w-full max-w-7xl mx-auto mt-8 lg:mt-12'>
        {/* Text Section */}
        <div className='flex-1 px-4 sm:px-8 lg:px-12'>
          {/* Sub Menu */}
          <div className='flex justify-center lg:justify-start mb-6'>
            <ul className={`${lato.className} flex gap-4 text-[14px] sm:text-[16px] md:text-[18px] font-[400]`}>
              <li className='hover:text-[#fb2e86] hover:underline cursor-pointer'>Wood Chair</li>
              <li className='hover:text-[#fb2e86] hover:underline cursor-pointer'>Plastic Chair</li>
              <li className='hover:text-[#fb2e86] hover:underline cursor-pointer'>Sofa Collection</li>
            </ul>
          </div>

          {/* Text Content */}
          <div>
            <h3 className={`${josefinSans.className} text-heading text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] leading-[1.4]`}>
              20% Discount Of All Products
            </h3>
            <p className={`${josefinSans.className} text-[#fb2e86] text-[18px] sm:text-[20px] lg:text-[21px] leading-[1.6] mt-4`}>
              Eams Sofa Compact
            </p>
            <p className={`${lato.className} text-[#b7bacb] text-[14px] sm:text-[16px] md:text-[17px] leading-[1.8] mt-4`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget<br />
              feugiat habitasse nec, bibendum condimentum.
            </p>
          </div>

          {/* Features List */}
          <div className='flex mt-6 w-[530px] h-fit justify-evenly items-center relative'>
            <ul className='flex flex-wrap justify-evenly items-center relative gap-4'>
              <li className='flex items-center gap-2 w-[230px] h-fit'>
                <FaCheck className='text-[#7569b2]' />
                <span className={`${lato.className} text-[#b7bacb] text-[14px] sm:text-[16px] md:text-[17px] leading-[1.8]`}>
                  Material expose like metals
                </span>
              </li>
              <li className='flex items-center gap-2 w-[270px] h-fit'>
                <FaCheck className='text-[#7569b2]' />
                <span className={`${lato.className} text-[#b7bacb] text-[14px] sm:text-[16px] md:text-[17px] leading-[1.8]`}>
                  Clear lines and geometric figures
                </span>
              </li>
              <li className='flex items-center gap-2 w-[230px] h-fit'>
                <FaCheck className='text-[#7569b2]' />
                <span className={`${lato.className} text-[#b7bacb] text-[14px] sm:text-[16px] md:text-[17px] leading-[1.8]`}>
                  Simple neutral colors
                </span>
              </li>
              <li className='flex items-center gap-2 w-[270px] h-fit'>
                <FaCheck className='text-[#7569b2]' />
                <span className={`${lato.className} text-[#b7bacb] text-[14px] sm:text-[16px] md:text-[17px] leading-[1.8]`}>
                Material expose like metals
                </span>
              </li>
            </ul>
          </div>
{/* Material expose like metals */}
          {/* Shop Now Button */}
          <div className='mt-6'>
            <button className={`${josefinSans.className} w-full sm:w-[200px] h-[48px] sm:h-[57px] bg-[#fb2e86] text-white rounded-[2px] text-[16px] sm:text-[17px] font-bold`}>
              Shop Now
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center items-center z-0">
  {/* Red Circle Background */}
  <div className="absolute bg-[#fcecf1] rounded-full w-[400px] h-[400px] z-0"></div>
  <img
    src="/tortuga-01-b 1.png"
    alt="wood chair"
    className="w-[669px] h-[597px] z-10 lg:w-[669px] lg:h-[597px] md:w-[500px] md:h-[450px] sm:w-[400px] sm:h-[350px]"
  />
</div>
      </div>
    </div>
  );
};

export default DiscountItem;
