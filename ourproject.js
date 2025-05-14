import React from 'react';
import './ourproject.css';

const projects = [
  {
    name: 'Biogazify',
    image: '/img/biogazify.png',
    description: 'Project aims to convert biogas from organic waste into a practical energy source for cooking.',
  },
  {
    name: 'Bistrokabb',
    image: '/img/bistrokab.png',
    description: 'Creating healthy and varied food products based on capers... reviving traditional Moroccan cuisine.',
  },
  {
    name: 'Botabaقa',
    image: '/img/Botaba9a.png',
    description: 'A sensor that measures the remaining gas level and sends alerts before the bottle is empty.',
  },
  {
    name: 'Bottle3D',
    image: '/img/bottle3d.png',
    description: 'Project aimed at collecting and recycling plastic bottles to transform them into filaments usable in 3D printers.',
  },
  {
    name: 'Educlass Mingle',
    image: '/img/educlass mingle.png',
    description: 'Website integrating social networks and study, facilitating learning, revision and communication.',
  },
  {
    name: 'Enbo',
    image: '/img/enbo.png',
    description: 'Offers eco-friendly three-layer boxes, made from recycled materials, to protect products and ensure traceability.',
  },
  {
    name: 'Potrinov',
    image: '/img/potrinov.png',
    description: 'Reinvents the art of pottery by combining traditional know-how and modern innovation.',
  },
  {
    name: 'Reskin',
    image: '/img/reskin.png',
    description: 'Transforms food waste into sustainable cosmetics that respect the skin and the planet.',
  },
  {
    name: 'Sitauti',
    image: '/img/sitauti.png',
    description: 'An interactive platform for autism support — for people, families, and caregivers.',
  },
  {
    name: 'UniRide',
    image: '/img/uniride.png',
    description: 'App optimizes student transport with adaptive carpooling in Morocco.',
  },
  {
    name: 'Voltainos',
    image: '/img/voltainos.png',
    description: 'Combines wind energy and piezoelectric technology for flexible, sustainable electricity.',
  },
];

const OurProject = () => {
  return (
    <section className="our-project-section">
      <h2 className="objectives-title">OUR PROJECT</h2>
      <div className="card-container">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <div className="card-inner">
              <div className="card-front">
                <img src={project.image} alt={`Logo of ${project.name}`} />
                <h1>{project.name}</h1>
              </div>
              <div className="card-back">
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProject;
