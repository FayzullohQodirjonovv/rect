import React from 'react';
import watch from '../assets/watch.png';
import image from '../assets/image.png';

const center = ()=> {
    return(
        <section className="makrot mt-12">
            <div className="container">
        <h2 className="koko text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 leading-tight text-center sm:text-left">
          Kam vaqtda ko'proq o'rganish
        </h2>
  <div className='koko'>
  <p className="koko mt-2 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto sm:mx-0 sm:text-left">
          Khan akademiyasi juda qisqa muddatda istalgan <br /> dasturlash sohasida Junior darajasiga chiqa olasiz
        </p>
  </div>

        <div className="tanho mt-6 flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="relative w-[50%] lg:w-3/5">
          <img src={watch} alt="" />
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full  shadow-lg hover:bg-gray-100">
            </button>
          </div>

          <div className="goho w-full lg:w-1/5 bg-white rounded-lg shadow-md p-4">
            <div className="bg-gray-200 rounded-lg h-34 flex items-center justify-center">
              <span className="text-gray-500"><img src={image} alt="" /></span>
            </div>
            <div className="mt-4">
              <p className="text-gray-500 text-sm">PLUS, VERIFIED • CAPE TOWN</p>
              <h3 className="text-lg font-semibold text-blue-800">Modern, Chic Penthouse</h3>
              <p className="text-gray-600 text-sm mt-1">$119/night</p>
              <div className="flex items-center mt-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600 text-sm ml-2">4.5 (190)</span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    )
}
export default center;