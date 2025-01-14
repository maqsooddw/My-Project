import React from 'react';
import { Josefin_Sans } from 'next/font/google';
import { Lato } from 'next/font/google';
import { FaPenNib } from 'react-icons/fa';
import { SlCalender } from 'react-icons/sl';

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
    <div className="px-4 sm:px-6 lg:px-12">
      {/* Heading */}
      <div className="flex items-center justify-center mt-20">
        <h3 className={`${josefinSans.className} text-[28px] sm:text-[36px] lg:text-[42px] leading-[40px] sm:leading-[45px] lg:leading-[49.22px] font-semibold text-heading`}>
          Latest Blog
        </h3>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 Xl:grid-cols-3 gap-5 mt-8">
        {/* Blog Card 1 */}
        <div className="relative bg-white shadow-md rounded-lg overflow-hidden w-full">
          {/* Image */}
          <img src="/JIUjvqe2ZHg.png" alt="Blog 1" className="w-full h-[255px] object-cover" />

          {/* Content */}
          <div className="p-4">
            {/* Writer and Date */}
            <div className="flex justify-between items-center mt-3">
              <ul className="flex items-center gap-1">
                <li className="text-[#fb2e86]">
                  <FaPenNib />
                </li>
                <li className={`${josefinSans.className} text-[14px] text-[#151875]`}>SaberAli</li>
              </ul>
              <ul className="flex items-center gap-1">
                <li className="text-[#ffaf69]">
                  <SlCalender />
                </li>
                <li className={`${josefinSans.className} text-[14px] text-[#151875]`}>21 August, 2020</li>
              </ul>
            </div>

            {/* Title */}
            <h3 className={`${josefinSans.className} text-[18px] mt-5 text-heading`}>
              Top Essential Trends in 2021
            </h3>

            {/* Description */}
            <ul className="mt-5">
              <li className={`${lato.className} text-[16px] text-[#807f9b]`}>More off this less hello samlande lied much</li>
              <li className={`${lato.className} text-[16px] font-bold text-[#807f9b]`}>
                Over tightly circa horse taped mightily
              </li>
            </ul>

            {/* Read More */}
            <p className={`${lato.className} text-[16px] underline mt-7 cursor-pointer text-[#151875]`}>
              Read More
            </p>
          </div>
        </div>

        {/* Repeat Blog Cards */}
        {[...Array(2)].map((_, index) => (
          <div key={index} className="relative bg-white shadow-md rounded-lg overflow-hidden w-full">
            {/* Image */}
            <img src={`/2dcYhvbHV-M${index === 1 ? ' (1)' : ''}.png`} alt={`Blog ${index + 2}`} className="w-full h-[255px] object-cover" />

            {/* Content */}
            <div className="p-4">
              {/* Writer and Date */}
              <div className="flex justify-between items-center mt-3">
                <ul className="flex items-center gap-1">
                  <li className="text-[#fb2e86]">
                    <FaPenNib />
                  </li>
                  <li className={`${josefinSans.className} text-[14px] text-[#151875]`}>
                    {index === 0 ? 'Surfauxion' : 'SaberAli'}
                  </li>
                </ul>
                <ul className="flex items-center gap-1">
                  <li className="text-[#ffaf69]">
                    <SlCalender />
                  </li>
                  <li className={`${josefinSans.className} text-[14px] text-[#151875]`}>21 August, 2020</li>
                </ul>
              </div>

              {/* Title */}
              <h3 className={`${josefinSans.className} text-[18px] mt-5 text-${index === 0 ? '[#fb2e86]' : 'heading'}`}>
                Top Essential Trends in 2021
              </h3>

              {/* Description */}
              <ul className="mt-5">
                <li className={`${lato.className} text-[16px] text-[#807f9b]`}>
                  More off this less hello samlande lied much
                </li>
                <li className={`${lato.className} text-[16px] font-bold text-[#807f9b]`}>
                  Over tightly circa horse taped mightily
                </li>
              </ul>

              {/* Read More */}
              <p
                className={`${lato.className} text-[16px] underline mt-7 cursor-pointer ${
                  index === 0 ? 'text-[#fb2e86]' : 'text-[#151875]'
                }`}
              >
                Read More
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
