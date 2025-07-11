import React, { useState } from 'react';
import './Contact.css';


function Contact() {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSuccess(false), 4000);
  };
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h1>Let's Talk</h1>
        <p className="contact-subtext">We'd love to hear from you. Send us a message.</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="contact-input"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="contact-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="contact-input"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            className="contact-textarea"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="contact-btn">Send Message</button>
          {success && (
            <div className="contact-success">Thank you! Your message has been sent.</div>
          )}
        </form>
      </div>
      <div className="contact-right">
        <h2>Contact Information</h2>
        <div className="contact-info-list">
          <div className="contact-info-item">
            <span className="contact-icon">⏰</span>
            <div>
              <div className="contact-info-label">Office Hours</div>
              <div className="contact-info-value">Mon-Fri: 9:00 AM - 6:00 PM</div>
              <div className="contact-info-label">Response Time</div>
              <div className="contact-info-value">Within 24 hours</div>
            </div>
          </div>
          {/* ...existing code for other contact-info-items... */}
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
