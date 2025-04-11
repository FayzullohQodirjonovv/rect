import React from 'react';
import vektor from '../assets/Vector.png';

const DiscordSection = () => {
  return (
    <section className="py-6 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-blue-600 text-2xl"><img src={vektor} alt="" /></span>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Biz bilan bog‘lanish</h3>
            <p className="text-sm">
              Feel free to ask questions, reports, issues, and meet new people
            </p>
          </div>
        </div>
        <button className="bg-white text-blue-500 px-6 py-2 rounded-lg">
          #KhanAcademyga qo‘shilish
        </button>
      </div>
    </section>
  );
};

export default DiscordSection;