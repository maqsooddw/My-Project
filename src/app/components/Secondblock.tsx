import React from "react";
import { Josefin_Sans } from "next/font/google";
import { Lato } from "next/font/google";
import { BsCart } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FaSearchPlus } from "react-icons/fa";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Secondblock = () => {
  return (
    // main div of second block
    <div className={`${josefinSans.className} text-[#1a0b5b]`}>
      <h3
        className={`text-[42px] h-[42px] w-full text-center font-semibold gap-[2px]`}
      >
        Featured Products
      </h3>

      <div className="grid sm:grid-cols-[200px] md:grid-cols-[200px,200px] lg:grid-cols-[200px,200px,200px,200px] justify-center mt-[100px]">
        {/* 1st line of div */}

        {/* item-1 */}
        <div className="flex flex-col h-[270px] w-[361px] items-center">
          <img
            src="/image 1168.png"
            alt="phone logo"
            className="w-[16] h-[16] mt-[4px]"
          />
          <p className={`${lato.className} text-[14px] `}>Cantilever chair</p>
          <p className={`${josefinSans.className} text-[14px]`}>
            Code - Y523201
          </p>
          <img
            src="/Group 141.png"
            alt="phone logo"
            className="w-[16] h-[16] mt-[4px]"
          />
          <p className={`${lato.className} text-[14px]`}>$42.00 </p>
        </div>

        {/* item-2 */}
        <div className="flex flex-col justify-around h-[270px] w-[361px] items-center">
          <div className="flex ml-[-40px] space-x-3 justify-items-start place-items-start">
            {" "}
            <BsCart className="w-[19] h-[19] text-[#2f1ac4]" />{" "}
            <FaRegHeart className="w-[17] h-[17] text-[#1aa8ee]" />{" "}
            <FaSearchPlus className="w-[15] h-[15] text-[#1aa8ee]" />
          </div>
          <img
            src="/image 1.png"
            alt="phone logo"
            className="w-[16] h-[16] mt-[4px]"
          />
          <button className="bg-green-600 w-[94px] h-[29px] text-[12px] text-[#ffffff]">
            View Detail
          </button>

          <div className="felx flex-col pl-[22px] bg-[#2f1ac4] text-[#ffffff] w-[150px] justify-center text-center">
            <p className={`${lato.className} text-[14px] justify-evenly `}>
              Cantilever chair
            </p>
            <p className={`${josefinSans.className} text-[14px]`}>
              Code - Y523201
            </p>
            <img
              src="/Group 141.png"
              alt="phone logo"
              className="w-[16] h-[16] mt-[4px]"
            />
            <p className={`${lato.className} text-[14px] pl-[25px]`}>$42.00 </p>
          </div>
        </div>

        {/* item-3 */}
        <div className="flex flex-col justify-around h-[270px] w-[361px] items-center">
          <img
            src="/image 1169.png"
            alt="phone logo"
            className="w-[16] h-[16] mt-[4px]"
          />

          <p className={`${lato.className} text-[14px] `}>Cantilever chair</p>
          <p className={`${josefinSans.className} text-[14px]`}>
            Code - Y523201
          </p>
          <img
            src="/Group 141.png"
            alt="phone logo"
            className="w-[16] h-[16] mt-[4px]"
          />
          <p className={`${lato.className} text-[14px]`}>$42.00 </p>
        </div>

        {/* item-4 */}
        <div className="flex flex-col justify-around h-[270px] w-[361px] items-center">
          <img
            src="/image 3.png"
            alt="phone logo"
            className="w-[16] h-[16] mt-[4px]"
          />
          <p className={`${lato.className} text-[14px] `}>Cantilever chair</p>
          <p className={`${josefinSans.className} text-[14px]`}>
            Code - Y523201
          </p>
          <img
            src="/Group 141.png"
            alt="phone logo"
            className="w-[16] h-[16] mt-[4px]"
          />
          <p className={`${lato.className} text-[14px]`}>$42.00 </p>
        </div>
      </div>
      {/* ending 1st line div */}

{/* starting 2nd picture set div */}
      <h1
        className={` text-[42px] h-[49.22px] w-full text-center font-semibold gap-[2px] mt-[100px] ${josefinSans.className} text-[#1a0b5b]`}
      >
        Leatest Products
      </h1>
      <div className="flex justify-center items-center">
        <div
          className={`${lato.className} flex text-[18px] w-[527px] h-[22px] rounded-[1px] justify-center`}
        >
          <ul className="flex  justify-center items-center space-x-7 mt-[30px] ">
            <a href="#" className="hover:text-[#fb2e86]">
              <li>New Arrival</li>
            </a>
            <a href="#" className="hover:text-[#fb2e86]">
              <li>Best Seller</li>
            </a>
            <a href="#" className="hover:text-[#fb2e86]">
              <li>Featured</li>
            </a>
            <a href="#" className="hover:text-[#fb2e86]">
              <li>Special Offer</li>
            </a>
          </ul>
        </div>
      </div>
  {/* main div for 3 image main */}
    <div className="grid grid-cols-[200px,200px,200px] gap-20 items-center justify-center">
      
      {/* image 1 */}
      <div>
      <div className="flex flex-col items-center justify-center min-h-screen w-[360px] h-[306px]">
                    <img src="/image 1166.png" alt="A comfortable handy craft chair with a red cushion and golden legs" 
                    className="w-[223] h-[229] object-cover" />
                    <div className="felx text-center mt-4">
                        <ul className="flex">
                        <li className="text-[16px] font-bold text-blue-900">Comfort Handy Craft</li>
                        <li className="text-[16px] font-bold text-blue-900 mr-2">$42.00</li>
                        <li className="text-[16px] font-bold text-red-500 line-through">$56.00</li>
                        </ul>
                    </div>
                </div>
      
      </div>
{/* image 1 */}
<div>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 w-[360px] h-[306px]">
                   
                   <img src="/Group 27.png" alt="A comfortable handy craft chair with a red cushion and golden legs" 
                    className="w-[84.87px] h-[56.73px] mb-[-50px] ml-[-250px] object-cover z-10" />
                   
                    <img src="/image 15.png" alt="A comfortable handy craft chair with a red cushion and golden legs" 
                    className="w-[223px] h-[229px] object-cover z-0" />
                   
                    <div className="felx text-center mt-4">
                        <ul className="flex">
                        <li className="text-[16px] font-bold text-blue-900">Comfort Handy Craft</li>
                        <li className="text-[16px] font-bold text-blue-900 mr-2">$42.00</li>
                        <li className="text-[16px] font-bold text-red-500 line-through">$56.00</li>
                        </ul>
                    </div>
                </div>
      
      </div>
{/* image 1 */}
<div>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 w-[370px] h-[306px]">
                    <img src="/image 1168 (2).png" alt="A comfortable handy craft chair with a red cushion and golden legs" 
                    className="w-[223] h-[229] object-cover" />
                    <div className="felx text-center mt-4">
                        <ul className="flex">
                        <li className="text-[16px] font-bold text-blue-900">Comfort Handy Craft</li>
                        <li className="text-[16px] font-bold text-blue-900 mr-2">$42.00</li>
                        <li className="text-[16px] font-bold text-red-500 line-through">$56.00</li>
                        </ul>
                    </div>
                </div>
      
  </div>
  
  </div>
  {/* end all three image man div handy craft */}
    </div>
    // ending main div
  );
};

export default Secondblock;
