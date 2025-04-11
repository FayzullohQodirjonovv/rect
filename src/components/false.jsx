import React from 'react';
import jojo from '../assets/jojo.png';


const falsee = ()=>{
    return (
        <section className="py-12 bg-gray-100 mt-[50px]">
                <div className="lists lg:w-1/2 p-4">
        <h2 className=" text-[40px] font-bold text-gray-800 mt-4 text-center">
        Kelajagingizni <span className='text-[#1D72D2]'> Khan Academy <br />
        bilan</span> quring
        </h2>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button className='kosmos1'>Ko’proq ko’rish</button>
      </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <img
                  src={jojo}
                  alt="Banner"
                  className="w-full h-100 object-cover rounded-lg"
                />
            <div className="flex flex-col lg:flex-row items-center mb-12">
          
            </div>
          </div>
        </section>
      );
    };
    
    export default falsee;