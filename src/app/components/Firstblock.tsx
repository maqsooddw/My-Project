import React from 'react'

const Firstblock = () => {
  return (
    <div>
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
    <div className="relative flex flex-col md:flex-row items-center bg-purple-100 p-8 rounded-lg shadow-lg max-w-6xl">
        
        <div className="flex-1 flex flex-col items-start">
            <img src="/image 32.png" alt="Hanging lamp" className="w-24 h-24 mb-4" />
            <p className="text-pink-500 font-semibold mb-2">Best Furniture For Your Castle....</p>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">New Furniture Collection Trends in 2020</h1>
            <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
            <button className="bg-pink-500 text-white px-6 py-3 rounded-[3px] font-semibold">Shop Now</button>
        </div>
        
        
        <div className="flex-1 flex justify-center items-center relative mt-8 md:mt-0">
            <img src="/Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room 1.png" alt="Pink chair" className="w-80 h-80 object-cover" />
            <div className="absolute top-0 right-0 bg-blue-500 text-white text-center rounded-full p-4 transform translate-x-1/2 -translate-y-1/2">
                <p className="text-lg font-bold">50% off</p>
            </div>
        </div>
    </div>
    <div className="flex space-x-2 mt-8">
        <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
    </div>
  </div>


  </div>
  )
}

export default Firstblock
