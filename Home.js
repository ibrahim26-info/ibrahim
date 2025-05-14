import React from 'react';
import './Home.css';
const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section" id='home'>
        <div className="hero-content">
          <h1 className="hero-title fade-in">
            <span className="highlight">
              Tackling the<br />
              problems of today, whilst creating the leaders of tomorrow.
            </span>
          </h1>
          <h3 className="hero-subtitle fade-in">
            <strong>
              JOIN US TO ENGAGE THE NEXT GENERATION OF ENTREPRENEURIAL LEADERS TO USE INNOVATION AND BUSINESS TO IMPROVE THE WORLD.
            </strong>
          </h3>
        </div>

        {/* Wave at Bottom of Hero */}
        <div className="wave-bottom">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path
              d="M0,224L48,218.7C96,213,192,203,288,186.7C384,171,480,149,576,160C672,171,768,213,864,208C960,203,1056,149,1152,117.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L0,320Z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
      </section>
      <section className="mission-section">
      <h1 className="mission-title">ENACTUS MISSION</h1>

      <div className="mission-content">
        <div className="mission-text">
          <p>
            Enactus Morocco est une ONG qui a pour mission de révéler le potentiel entrepreneurial des jeunes en les accompagnant à la création d’impact durable et inclusif.
          </p>
          <p>
            Œuvrant dans le domaine de l’entrepreneuriat social et le développement durable, Enactus développe des partenariats entre le monde des affaires, les acteurs institutionnels et ceux de l‘enseignement supérieur, afin de préparer les jeunes à contribuer substantiellement au développement de leur pays en tant que leaders entrepreneurs, éthiques et socialement responsables.
          </p>
        </div>

        <div className="mission-image">
          <img src="/img/Enactus.png" alt="Enactus colorful" />
        </div>
      </div>
    </section>
<section class="ourimpact">
  <h1 class="impact-title">OUR IMPACT</h1>
  <div class="impact-grid">
    <div class="impact-card">
      <img src="/img/Beneficiaires-impactes.png" alt="Impact Image" />
      <p>Bénéficiaires impactés<br /><span className='nmbrs'>+ 20,000 </span></p>
    </div>
    <div class="impact-card">
      <img src="/img/Entreprises-ceees.png" alt="Impact Image" />
      <p>Entreprises créées<br /></p><span className='nmbrs'>+ 300</span>
    </div>
    <div class="impact-card">
      <img src="/img/etablissements-univers.png" alt="Impact Image" />
      <p>Établissements univers affiliés<br /></p><span className='nmbrs'>120</span>
    </div>
    <div class="impact-card">
      <img src="/img/Jeunes-mobilises.png" alt="Impact Image" />
      <p>Jeunes mobilisés<br /></p><span className='nmbrs'>10 000</span>
    </div>
    <div class="impact-card">
      <img src="/img/Professionnels-mobilises.png" alt="Impact Image" />
      <p>Professionnels mobilisés</p><span className='nmbrs'>+ 400</span>
    </div>
    <div class="impact-card">
      <img src="/img/Projets-developpes.png" alt="Impact Image" />
      <p>Projets développés (dont 200 à fort impact)</p><span className='nmbrs'>600</span>
    </div>
  </div>
</section>
<section className="darwin-section">
  <h2 className="darwin-title">From Evolution to Revolution: Leading Through Change</h2>
  <div className="darwin-content">
    <div className="darwin-image">
      <img src="/img/darwin.png" alt="Charles Darwin" />
    </div>
    <div className="darwin-text">
      <blockquote>
        Charles Darwin once said:
        <br />
        <em>“It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.”</em>
      </blockquote>
    </div>
  </div>
</section>


    </>
  );
};

export default Home;
