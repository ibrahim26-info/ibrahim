import React from "react";
import './aboutUs.css';
import './membres.css';
import Membres from "./membres"; // ✅ Import the Membres component
import CoreValue from "./corevalue";

function AboutUs(){
    return (
      <>
<section className="team-hero">
  <div className="team-hero-content">
    <h2 className="team-title">Meet the Team</h2>
  </div>
  <div className="wave-bottom" aria-hidden="true">
    <svg viewBox="0 0 1440 150" preserveAspectRatio="none">
      <path fill="#fef3c7" d="M0,32L60,48C120,64,240,96,360,106.7C480,117,600,107,720,106.7C840,107,960,117,1080,122.7C1200,128,1320,128,1380,128L1440,128L1440,150L1380,150C1320,150,1200,150,1080,150C960,150,840,150,720,150C600,150,480,150,360,150C240,150,120,150,60,150L0,150Z"></path>
    </svg>
  </div>
</section>
        <section className="enactus-section" id='about'>
          <div className="enactus-content">
            <div className="enactus-text">
              <h2 className="enactus-title animate-enactus-title">ENACTUS FSBM</h2>
              <p className="enactus-paragraph">
                <strong>Enactus FSBM</strong> founded in March 2014 by Abderazak Bouhram, is the heir to initiatives launched in 2009 under the SIFE name. Since its creation, the team has developed projects with social and economic impact, mobilizing 50 to 100 members each year. Enactus FSBM was recently ranked among the top 12 in Morocco and was a semi-finalist in the 2023-2024 competitions.
              </p>
            </div>
            <div className="enactus-image">
              <img src="/img/ena.jpg" alt="Enactus" />
            </div>
          </div>
        </section>
        <Membres />
        <CoreValue />
      </>
    );
}

export default AboutUs;
