import React from 'react';
import qizcha from '../assets/qizcha.png';
import yigitcha from '../assets/yigitcha.png';
import qiz from '../assets/qiz.png';
import yigit from '../assets/yigit.png';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Cameron Williamson",
      role: "Backend Developer",
      image: qizcha,
    },
    {
      name: "Brooklyn Simmons",
      role: "Frontend Developer",
      image: yigitcha,

    },
    {
      name: "Savannah Nguyen",
      role: "UI/UX Designer",
            image: qiz,

    },
    {
      name: "Darlene Robertson",
      role: "Copywriter",
            image: yigit,

    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Bizning professional jamoamiz
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          A collection of websites and projects built with Webbrain UI
        </p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 mb-12">
          Kurslarni ko‘rish →
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-lg shadow-lg p-4 transform hover:scale-105 transition duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-32 rounded-lg mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;