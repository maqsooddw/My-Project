import React from 'react'
import { Josefin_Sans } from 'next/font/google';
import { Lato } from 'next/font/google';
import styles from '/LegendsList.module.css';
import Link from 'next/link';
import { FaPenNib } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
});


const Blog = () => {
  return (
    <div>
          {/* heading */} <div className='flex items-center justify-center mt-20'>
    <h3 className={`${josefinSans.className} text-[42px] leading-[49.22px] font-semibold text-heading`}>Leatest Blog</h3>
  </div>
    {/* latest blog */} <div className='flex justify-center items-center mt-8 gap-5'>

{/* blog main div 1 */}
<div className='relative w-[370px] h-[493px]'>
{/* image div */} <div> <img src='/JIUjvqe2ZHg.png' alt='blog 1 pic' className='w-full h-[255px]' />     </div>

{/* text div */} <div>
{/* blog writer name and date */} <div className='flex items-center gap-10 mt-3'>
     
    <ul className='flex items-center justify-start gap-1'>
    <li className='flex items-center w-[11.33px] h-[11.33px] text-[#fb2e86]'><FaPenNib /></li>
    <li className={`${josefinSans.className} text-[14px] leading-[16.41px] text-[#151875]`}>SaberAli</li>
    </ul>
    <ul className='flex items-center justify-start gap-1'>
    <li className='flex items-center justify-center w-[11.33px] h-[11.33px] text-[#ffaf69] '><SlCalender /></li>
    <li className={`${josefinSans.className} text-[14px] leading-[16.41px] text-[#151875] `}>21 August,2020</li>
    </ul>
    </div>
    {/* end writer name and date */}
<div><h3 className={`${josefinSans.className} text-[18px] leading-[21.09px] font-[400px] text-heading mt-7`}>Top esssential Trends in 2021</h3></div>

<div><ul><li className={`${lato.className} text-[16px] leading-[30px] font-[400px] text-[#807f9b] mt-5`}>
More off this less hello samlande lied much</li>
<li className={`${lato.className} text-[16px] leading-[30px] font-bold text-[#807f9b]`}>over tightly circa horse taped mightly</li></ul></div>

<div><p className={`${lato.className} text-[16px] leading-[30px] font-[400px] underline mt-7 cursor-pointer text-[#151875]`}>Read More</p></div>
    </div>
</div>
{/* end blog 1 */}


{/* start blog 2 */}
<div className='relative w-[370px] h-[493px]'>
{/* image div */} <div> <img src='/2dcYhvbHV-M.png' alt='blog 1 pic' className='w-full h-[255px]' />     </div>

{/* text div */} <div>
{/* blog writer name and date */} <div className='flex gap-10 items-center mt-3'>
     
    <ul className='flex items-center justify-start gap-1'>
    <li className='flex items-center w-[11.33px] h-[11.33px] text-[#fb2e86]'><FaPenNib /></li>
    <li className={`${josefinSans.className} text-[14px] leading-[16.41px] text-[#151875]`}>Surfauxion</li>
    </ul>
    <ul className='flex items-center justify-start gap-1'>
    <li className='flex items-center justify-center w-[11.33px] h-[11.33px] text-[#ffaf69] '><SlCalender /></li>
    <li className={`${josefinSans.className} text-[14px] leading-[16.41px] text-[#151875] `}>21 August,2020</li>
    </ul>
    </div>
    {/* end writer name and date */}
<div><h3 className={`${josefinSans.className} text-[18px] leading-[21.09px] font-[400px] text-[#fb2e86] mt-7`}>Top esssential Trends in 2021</h3></div>

<div><ul><li className={`${lato.className} text-[16px] leading-[30px] font-[400px] text-[#807f9b] mt-5`}>
More off this less hello samlande lied much</li>
<li className={`${lato.className} text-[16px] leading-[30px] font-bold text-[#807f9b]`}>over tightly circa horse taped mightly</li></ul></div>

<div><p className={`${lato.className} text-[16px] leading-[30px] font-[400px] underline mt-7 cursor-pointer text-[#fb2e86]`}>Read More</p></div>
    </div>
</div>


{/* end blog 2 */}

{/* start blog 3 */}
<div className='relative w-[370px] h-[493px]'>
{/* image div */} <div> <img src='/2dcYhvbHV-M (1).png' alt='blog 1 pic' className='w-full h-[255px]' />     </div>

{/* text div */} <div>
{/* blog writer name and date */} <div className='flex gap-10 items-center mt-3'>
     
    <ul className='flex items-center justify-start gap-1'>
    <li className='flex items-center w-[11.33px] h-[11.33px] text-[#fb2e86]'><FaPenNib /></li>
    <li className={`${josefinSans.className} text-[14px] leading-[16.41px] text-[#151875]`}>SaberAli</li>
    </ul>
    <ul className='flex items-center justify-start gap-1'>
    <li className='flex items-center justify-center w-[11.33px] h-[11.33px] text-[#ffaf69] '><SlCalender /></li>
    <li className={`${josefinSans.className} text-[14px] leading-[16.41px] text-[#151875] `}>21 August,2020</li>
    </ul>
    </div>
    {/* end writer name and date */}
<div><h3 className={`${josefinSans.className} text-[18px] leading-[21.09px] font-[400px] text-heading mt-7`}>Top esssential Trends in 2021</h3></div>

<div><ul><li className={`${lato.className} text-[16px] leading-[30px] font-[400px] text-[#807f9b] mt-5`}>
More off this less hello samlande lied much</li>
<li className={`${lato.className} text-[16px] leading-[30px] font-bold text-[#807f9b]`}>over tightly circa horse taped mightly</li></ul></div>

<div><p className={`${lato.className} text-[16px] leading-[30px] font-[400px] underline mt-7 cursor-pointer`}>Read More</p></div>
    </div>
</div>


{/* end blog 3 */}




    </div>
      
    </div>
  )
}

export default Blog
