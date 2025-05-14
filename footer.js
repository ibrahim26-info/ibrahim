import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="about-section">
        {/* About Section */}
        <p>
          <strong>Enactus FSBM</strong><br />
          Empowering students to change the world through entrepreneurial action.
        </p>

        {/* Contact Info */}
<div className="contact-info">
  <h2>Contact Us</h2>
  <ul className="contact-list">
    <li>
      <img src="/img/email (1).png" alt="Email" />
      <a href="mailto:enactus24.25fsbm@gmail.com">enactus24.25fsbm@gmail.com</a>
    </li>
    <li>
      <img src="/img/phone-call.png" alt="Phone" />
      <a href="tel:+212639380894">+212 639 380 894</a>
    </li>
    <li>
      <img src="/img/location.png" alt="Location" />
      <a href="https://maps.app.goo.gl/irVd6d4Atpr5hAkcA" target="_blank">Faculté des Sciences Ben M'Sick - Bd Commandant Driss Al Harti, Casablanca 20670 - Maroc</a>
    </li>
  </ul>
</div>


        {/* Social Media Links */}
    <div class="social-media">
      <a href="https://www.linkedin.com/company/enactus-fsbmc/" target="_blank">
        <img src="/img/linkedin.png" alt="LinkedIn" />
      </a>
      <a href="https://www.instagram.com/3nac1us.fsbm?igsh=YWcyaGQyOGMzNzJo" target="_blank">
        <img src="/img/instagram (1).png" alt="Instagram" />
      </a>
      <a href="https://www.tiktok.com/@enactus.fsbmposting" target="_blank">
        <img src="/img/tik-tok.png" alt="TikTok" />
      </a>
    </div>

        {/* Legal Section */}
        <p className="legal">
          © 2024 Enactus FSBM. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
