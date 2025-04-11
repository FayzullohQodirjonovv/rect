import React from 'react';
import one from '../assets/lekn.png';
const ProjectsSection = () => {
  const projects = [
    {
      image: one,
      alt: "Project 1",
    },
      ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Bizning loyihalar
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Beautiful and responsive React components to build your application quicker
        </p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 mb-12">
          Batafsil →
        </button>
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className=" overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;