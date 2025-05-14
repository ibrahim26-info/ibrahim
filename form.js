import React, { useState } from 'react';
import './form.css';

const Form = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    setSubmitted(true); // Trigger thank-you message
    // Optionally reset the form or send data to backend here
  };

  return (
    <>
                  <section className="team-hero">
  <div className="team-hero-content">
    <h2 className="team-title">Your Spark Starts Here — Be the Impact!</h2>
  </div>
  <div className="wave-bottom" aria-hidden="true">
    <svg viewBox="0 0 1440 150" preserveAspectRatio="none">
      <path fill="#fef3c7" d="M0,32L60,48C120,64,240,96,360,106.7C480,117,600,107,720,106.7C840,107,960,117,1080,122.7C1200,128,1320,128,1380,128L1440,128L1440,150L1380,150C1320,150,1200,150,1080,150C960,150,840,150,720,150C600,150,480,150,360,150C240,150,120,150,60,150L0,150Z"></path>
    </svg>
  </div>
</section>
    <section className="form-section">
      {!submitted ? (
        <>
          <h2 className="form-main-title">Join Enactus</h2>
          <form className="enactus-form" onSubmit={handleSubmit}>
            <h3 className="form-section-title">Personal Information</h3>

            <label>Full Name:</label>
            <input type="text" name="name" required />

            <label>Student ID:</label>
            <input type="text" name="studentId" required />

            <label>Email Address:</label>
            <input type="email" name="email" required />

            <label>Phone Number:</label>
            <input type="tel" name="phone" required />

            <label>Year of Study:</label>
            <input type="number" name="yearOfStudy" required />

            <label>Major or Program:</label>
            <input type="text" name="major" required />

            <h3 className="form-section-title">Motivation and Interests</h3>

            <label>What inspired you to join Enactus?</label>
            <textarea name="motivation" rows="4" required />

            <label>What are your interests and passions?</label>
            <textarea name="interests" rows="4" required />

            <h3 className="form-section-title">Availability and Commitment</h3>

            <label>Are you available to attend weekly meetings?</label>
            <div className="radio-group">
              <label><input type="radio" name="availability" value="yes" required /> Yes</label>
              <label><input type="radio" name="availability" value="no" /> No</label>
            </div>

            <label>Are you interested in participating in specific projects or events?</label>
            <div className="radio-group">
              <label><input type="radio" name="projectsInterest" value="yes" required /> Yes</label>
              <label><input type="radio" name="projectsInterest" value="no" /> No</label>
            </div>

            <button type="submit" className="submit-button">Submit Application</button>
          </form>
        </>
      ) : (
        <div className="thank-you-message">
          <h2>🎉 Thank You for Joining Enactus!</h2>
          <p>We’ve received your application and will get in touch soon. Welcome to the journey of impact! 🌍</p>
        </div>
      )}
    </section>
    </>
  );
};

export default Form;
