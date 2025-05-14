import React from "react";
import './objectives.css';
import OurProject from "./ourproject";

function Objectives(){
    return(
      <>
      <section className="team-hero">
  <div className="team-hero-content">
    <h2 className="team-title">Mission in Motion: The Objectives Behind Our Impact</h2>
  </div>
  <div className="wave-bottom" aria-hidden="true">
    <svg viewBox="0 0 1440 150" preserveAspectRatio="none">
      <path fill="#fef3c7" d="M0,32L60,48C120,64,240,96,360,106.7C480,117,600,107,720,106.7C840,107,960,117,1080,122.7C1200,128,1320,128,1380,128L1440,128L1440,150L1380,150C1320,150,1200,150,1080,150C960,150,840,150,720,150C600,150,480,150,360,150C240,150,120,150,60,150L0,150Z"></path>
    </svg>
  </div>
</section>
        <section className="objectives-section" id='projects'>
  <h2 className="objectives-title">Objectives of Enactus FSBM</h2>
  <ul className="objectives-schema">
    <li> Encourage student engagement</li>
    <li> Develop a new generation of entrepreneurial leaders</li>
    <li> Enable companies to have a strong social impact</li>
    <li> Address key social challenges</li>
  </ul>
</section>
<OurProject />
      </>
    )
}
export default Objectives;