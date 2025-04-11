import React from 'react';
import gogle from '../assets/gogle.png';
import avatar from '../assets/avatar.png';
import c from '../assets/c.png';

const CollaborationSection = () => {
  const organizationSponsors = [
    gogle,
    gogle,
    gogle,
    gogle,
  ];

  const individualSponsors = [
     avatar,
     avatar,
     avatar,
     avatar,
     avatar,
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Hamkorlik qilishga tayyormisiz?
        </h2>
        <p className="text-lg mb-8">
          Our maintainers devote their time, effort, and heart to ensure Webbrain UI keeps getting better. Support us by ensuring our collective.
        </p>
        <div>
        <div className="flex justify-center space-x-4 mb-12">
          <button className="bg-white text-blue-500 px-6 py-2 rounded-lg flex items-center space-x-2">
            <span className="w-6 h-6  rounded-full flex items-center justify-center text-white">
              <img src={c} alt="" />
            </span>
            <span>Sponsor the Webbrain UI maintainers</span>
            <button className="bg-[#1D72D2] text-white px-6 py-2 rounded-lg">
            Sponsor
          </button>
          </button>
       
        </div>
        <div className="flex justify-center space-x-4 mb-12">
          <button className="bg-white text-blue-500 px-6 py-2 rounded-lg flex items-center space-x-2">
            <span className="w-6 h-6  rounded-full flex items-center justify-center text-white">
              <img src={c} alt="" />
            </span>
            <span>Sponsor the Webbrain UI maintainers</span>
            <button className="bg-[#1D72D2] text-white px-6 py-2 rounded-lg">
            Sponsor
          </button>
          </button>
         
        </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Organization Sponsors</h3>
          <div className="flex justify-center space-x-4">
            {organizationSponsors.map((sponsor, index) => (
              <img
                key={index}
                src={sponsor}
                alt={`Sponsor ${index + 1}`}
                className="w-16 h-16 rounded-full"
              />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Individual Sponsors</h3>
          <div className="flex justify-center space-x-4">
            {individualSponsors.map((sponsor, index) => (
              <img
                key={index}
                src={sponsor}
                alt={`Individual Sponsor ${index + 1}`}
                className="w-12 h-12 rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;