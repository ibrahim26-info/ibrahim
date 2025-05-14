import React from "react";
import './membres.css';
function Membres(){
    return(
        <section className="members-section">
  <h2 className="members-title">Members</h2>
  <div className="members-grid">
    <div className="member-card">
      <img src="/img/younes.png" alt="Younes TAOUMI" />
      <h3>Younes TAOUMI</h3>
      <p>Team Leader</p>
    </div>
    <div className="member-card">
      <img src="/img/maryam.png" alt="Maryam BADRI" />
      <h3>Maryam BADRI</h3>
      <p>Vice Team Leader</p>
    </div>
    <div className="member-card">
      <img src="/img/hind.png" alt="Hind ZAKY" />
      <h3>Hind ZAKY</h3>
      <p>Human Resources Manager</p>
    </div>
    <div className="member-card">
      <img src="/img/ammar.png" alt="Ammar MASSAOUDI" />
      <h3>Ammar MASSAOUDI</h3>
      <p>Communication Manager</p>
    </div>
    <div className="member-card">
      <img src="/img/imane.png" alt="Imane OUAZZANI-CHAHDI" />
      <h3>Imane OUAZZANI-CHAHDI</h3>
      <p>Head of Partnerships</p>
    </div>
    <div className="member-card">
      <img src="/img/abdelwadoud.png" alt="Abdelwadoud ELBAROUJI" />
      <h3>Abdelwadoud ELBAROUJI</h3>
      <p>Treasurer</p>
    </div>
    <div className="member-card">
      <img src="/img/wiam.png" alt="Wiam ABOUTARA BELRHITI" />
      <h3>Wiam ABOUTARA BELRHITI</h3>
      <p>Vice President Project</p>
    </div>
    <div className="member-card">
      <img src="/img/basma.png" alt="Basma JAWHAR" />
      <h3>Basma JAWHAR</h3>
      <p>Event Manager</p>
    </div>
  </div>
</section>

    )
}
export default Membres;