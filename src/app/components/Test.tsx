import React from 'react'
import { Josefin_Sans } from 'next/font/google';
import { Lato } from 'next/font/google';
import Link from 'next/link';

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
});


const Firstblock = () => {
  return (
    <div>
    <div className="pt-4 pb-4">
    <div className="items-center w-full">
        {/* handiling set 1 an set 2 */}
        <div className='flex p-2 relative'>

        
        {/* set one */}
        <div className="flex md:flex-row items-start justify-start">

        <img src="/image 32.png" alt="Hanging lamp" className="lg:w-[387px] lg:h-[387px] lg:ml-[-100px] md:w-[200px] md:h-[200px] md:ml-[0px]" />
            
        <div className='mt-40 ml-[-100px]'>
            <p className={`${lato.className} text-[14px] text-[#fb2e86] font-[700px] leading-[28px]`}>Best Furniture For Your Castle....</p>
            <h1 className={`${josefinSans.className} text-[#072b4b] text text-[53px] font-bold leading-custom tracking-1-5 text-nowrap`}>New Furniture Collection <br /> Trends in 2020</h1>
            <p className={`${lato.className} text-[16px] text-[#8a8fb9] font-[700px] mb-2`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing <br />in phasellus non in justo.</p>
            <button className="bg-[#fb2e86] text-white px-6 py-3 rounded-[3px] font-semibold">Shop Now</button>
           </div>
            
           </div>
        {/* ending set 1 */}
       
        {/*set 2  */}
    <div className="flex md:flex-row  items-end justify-end mt-8 md:mt-0 relative">

  {/* Pink Chair Image */}
  <img
    src="/Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room 1.png"
    alt="Pink chair"
    className="w-[629px] h-[629px] z-10"
  />
  
  {/* 50% Logo */}
  <div className="flex absolute top-0 z-20">
    <img
      src="/50plogo.png"
      alt="50% logo"
      className="w-[136.56px] h-[138.49px]"
    />
  </div>
</div>
{/* ending set 2 */}

</div>

{/* ending handiling set 1 and set 2 */}
    </div>
    <div className="flex space-x-2 mt-8 items-center justify-center">
        <span className="w-3 h-3 bg-[#fb2e86] rounded-full cursor-pointer hover:bg-[#fb2e86]"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full cursor-pointer hover:bg-[#fb2e86]"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full cursor-pointer hover:bg-[#fb2e86]"></span>
    </div>
  </div>


  </div>
  )
}

export default Firstblock
