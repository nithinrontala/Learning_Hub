import React from 'react';
import './Contact.css';


function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h1>Let's Talk</h1>
        <p className="contact-subtext">We'd love to hear from you. Send us a message.</p>
        <form className="contact-form">
          <input type="text" placeholder="Full  Name" className="contact-input" />
          <input type="email" placeholder="Email  Address" className="contact-input" />
          <input type="text" placeholder="Subject" className="contact-input" />
          <textarea placeholder="Message" className="contact-textarea" rows={5}></textarea>
          <button type="submit" className="contact-btn">Send Message</button>
        </form>
      </div>
      <div className="contact-right">
        <h2>Contact Information</h2>
        <div className="contact-info-list">
          <div className="contact-info-item">
            <span className="contact-icon">📧</span>
            <div>
              <div className="contact-info-label">Email</div>
              <div className="contact-info-value">learinghubquery@gmail.com</div>
            </div>
          </div>
          <div className="contact-info-item">
            <span className="contact-icon">📞</span>
            <div>
              <div className="contact-info-label">Phone</div>
              <div className="contact-info-value">+91 6766498489</div>
            </div>
          </div>
          <div className="contact-info-item">
            <span className="contact-icon">📍</span>
            <div>
              <div className="contact-info-label">Address</div>
              <div className="contact-info-value">pin 500032</div>
            </div>
          </div>
          <div className="contact-info-item">
            <span className="contact-icon">🌐</span>
            <div>
              <div className="contact-info-label">Website</div>
              <div className="contact-info-value">www.edusite.com</div>
            </div>
          </div>
        </div>
        <div className="contact-map-img">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Map" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
