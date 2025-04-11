import React from 'react';
import dow from '../assets/dow.png';
import git from '../assets/git.png';
import Vector from '../assets/Vector.png';

const StatsSection = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold mb-2">
          Shiddat bilan o‘sib borayotgan Khan Academy
        </h1>
        <p className="text-lg mb-8">
          We’re dedicated to improving the experience and performance of Webbrain UI
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <h2 className="text-5xl font-bold">1.2M</h2>
            <p className="text-lg flex items-center space-x-2">
              <span>Downloads per month</span>
          <img src={dow} alt="" />
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-5xl font-bold">25.1K</h2>
            <p className="text-lg flex items-center space-x-2">
              <span>GitHub stars</span>
  <img src={git} alt="" />
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-5xl font-bold">14</h2>
            <p className="text-lg flex items-center space-x-2">
              <span>Core contributors</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-5xl font-bold">6.2K</h2>
            <p className="text-lg flex items-center space-x-2">
              <span>Discord members</span>
       <img src={Vector} alt="" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;