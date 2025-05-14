import React from 'react';
import './corevalue.css';

function CoreValue() {
  return (
    <section className="core-values-section">
      <h2 className="section-title">Core Values</h2>
      <div className="core-image-container">
        <img src="/img/corevalue.jpg" alt="Enactus Core Values" className="core-image" />
        
        {/* Overlay containers for each icon */}
        <div className="icon-overlay handshake">
          <div className="value-description">
            We believe in the power of teamwork and the collective strength of diverse minds. United, no dream is too big, and no goal is beyond reach.
          </div>
        </div>

        <div className="icon-overlay lightbulb">
          <div className="value-description">
            Innovation begins with a single idea. We encourage creativity and bold thinking in all our projects.
          </div>
        </div>

        <div className="icon-overlay plant">
          <div className="value-description">
            We foster personal and professional growth through every initiative we undertake.
          </div>
        </div>

        <div className="icon-overlay magnifier">
          <div className="value-description">
            Research and understanding guide our strategies for impactful solutions.
          </div>
        </div>

        <div className="icon-overlay bag">
          <div className="value-description">
            We value the support of our sponsors who help turn our visions into reality.
          </div>
        </div>

        <div className="icon-overlay computer">
          <div className="value-description">
            Effective project management and execution are at the heart of our operations.
          </div>
        </div>

        <div className="icon-overlay network">
          <div className="value-description">
            Building strong networks opens doors to endless opportunities.
          </div>
        </div>

        <div className="icon-overlay key">
          <div className="value-description">
            We unlock opportunities and open new paths for change and impact.
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoreValue;
