import React from 'react';
import icon from '../assets/icon.png';

 const grid = () => {
    return(
    <section className="mt-12">
        <div className="container">
          <h2 className="lobar text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 leading-tight text-center sm:text-left">
            <span className='spantro'>Bizning ustun</span> jihatlarimiz
          </h2>
          <p className="lobar mt-2 text-gray-600 text-base sm:text-lg ">
            Quyida bizning eng muhim jihatlar bilan tanishing
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center sm:items-start">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          <img src={icon} alt="" />
              </div>
              <h3 className="text-lg font-semibold text-blue-800">Kuchli Mentorlik</h3>
              <p className="mt-2 text-gray-600 text-center sm:text-left">
                Webbrain strictly follows all components WAIARIA standards.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center sm:items-start">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <img src={icon} alt="" />
              </div>
              <h3 className="text-lg font-semibold text-blue-800">Muntazam o'rganish</h3>
              <p className="mt-2 text-gray-600 text-center sm:text-left">
                Webbrain strictly follows all components WAIARIA standards.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center sm:items-start">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <img src={icon} alt="" />
              </div>
              <h3 className="text-lg font-semibold text-blue-800">Qulay muhit</h3>
              <p className="mt-2 text-gray-600 text-center sm:text-left">
                Webbrain strictly follows all components WAIARIA standards.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center sm:items-start">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <img src={icon} alt="" />
              </div>
              <h3 className="text-lg font-semibold text-blue-800">Intensiv Darslar</h3>
              <p className="mt-2 text-gray-600 text-center sm:text-left">
                Webbrain strictly follows all components WAIARIA standards.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center sm:items-start">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <img src={icon} alt="" />
              </div>
              <h3 className="text-lg font-semibold text-blue-800">Ahil Jamoa</h3>
              <p className="mt-2 text-gray-600 text-center sm:text-left">
                Webbrain strictly follows all components WAIARIA standards.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center sm:items-start">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <img src={icon} alt="" />
              </div>
              <h3 className="text-lg font-semibold text-blue-800">Amaliy darslar</h3>
              <p className="mt-2 text-gray-600 text-center sm:text-left">
                Webbrain strictly follows all components WAIARIA standards.
              </p>
            </div>
          </div>
        </div>
        </section>
    )
 }
  export default grid;