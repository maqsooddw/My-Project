import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  title: string;
  price: string;
  originalPrice: string;
  overlay?: string; // Optional overlay image
}

interface ThirdblockProps {
  images: ImageProps[];
}

const Thirdblock: React.FC<ThirdblockProps> = ({ images }) => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center'>
      {/* Main div for the three images */}
      {images.map((image, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center min-h-screen w-full sm:w-[360px] h-auto lg:w-[360px] lg:h-[306px]"
        >
          {/* Render additional overlay image if provided */}
          {image.overlay && (
            <img
              src={image.overlay}
              alt="Overlay"
              className="w-[84.87px] h-[56.73px] mb-[-50px] ml-[-250px] object-cover z-10"
            />
          )}
          <img
            src={image.src}
            alt={image.alt}
            className="w-full max-w-[223px] h-[277px] object-cover z-0"
          />
          <div className="flex text-center mt-4">
            <ul className="flex flex-col sm:flex-row items-center">
              <li className="text-[16px] font-bold text-blue-900">{image.title}</li>
              <li className="text-[16px] font-bold text-blue-900 sm:mr-2">{image.price}</li>
              <li className="text-[16px] font-bold text-red-500 line-through">{image.originalPrice}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Thirdblock;
