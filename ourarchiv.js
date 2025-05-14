import React from 'react';
import './ourarchiv.css';

const achievements = [
  {
    id: 1,
    title: 'Top 12 du Maroc',
    image: '/img/ena.jpg',
    summary: 'The Enactus club has been recognized as one of the 12 best school clubs in Morocco...',
    fullText: `The Enactus club has been recognized as one of the 12 best school clubs in Morocco,
    a distinction highlighting their commitment and impact in the field of social entrepreneurship. This recognition reflects their dedication
    to addressing social and environmental challenges through innovative and sustainable projects.`,
  },
  {
    id: 2,
    title: 'Got Impact Award',
    image: '/img/ena (5).jpg',
    summary: 'The Enactus club has won the prestigious Enactus Got Impact award...',
    fullText: `The Enactus club has won the prestigious Enactus Got Impact award, a major recognition that highlights
    the significant impact of their project. This award honors initiatives that combine innovation, entrepreneurship,
    and social commitment to create lasting change in communities.`,
  },
  {
    id: 3,
    title: 'Semi-Finalist 2023/2024',
    image: '/img/ena (2).jpg',
    summary: 'The end of one adventure, but the beginning of another...',
    fullText: `The end of one adventure, but the beginning of another. Although we could have reached greater heights,
    things don’t always turn out as we hoped. We are proud to be among the top 12 teams in Morocco—a historic achievement
    for Enactus FSBM, marking a milestone in our ongoing journey. This is just the beginning, and the story continues
    to unfold with more opportunities for growth and success.`,
  }
];

const OurArchiv = () => {
  return (
    <>
          <section className="team-hero">
  <div className="team-hero-content">
    <h2 className="team-title">Moments That Matter: News & Events</h2>
  </div>
  <div className="wave-bottom" aria-hidden="true">
    <svg viewBox="0 0 1440 150" preserveAspectRatio="none">
      <path fill="#fef3c7" d="M0,32L60,48C120,64,240,96,360,106.7C480,117,600,107,720,106.7C840,107,960,117,1080,122.7C1200,128,1320,128,1380,128L1440,128L1440,150L1380,150C1320,150,1200,150,1080,150C960,150,840,150,720,150C600,150,480,150,360,150C240,150,120,150,60,150L0,150Z"></path>
    </svg>
  </div>
</section>
  <h2 className="timeline-title">Our Achievements</h2>
    <section className="timeline">
      {achievements.map(({ id, title, image, summary, fullText }, index) => (
        <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={id}>
          <div className="content">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{summary}</p>
            <details>
              <summary>Read More</summary>
              <p>{fullText}</p>
            </details>
          </div>
        </div>
      ))}
    </section>
    </>
  );
};

export default OurArchiv;
