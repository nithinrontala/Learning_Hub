import React from 'react';
import './About.css';

const teamMembers = [
  {
    name: 'Dr. Sharma',
    title: 'CEO & Founder',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Anil Johnson',
    title: 'Head of Curriculum',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Olivia Bennett',
    title: 'Lead Instructor',
    img: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'Sandeep Thompson',
    title: 'Community Manager',
    img: 'https://randomuser.me/api/portraits/men/41.jpg',
  },
];

function About() {
  return (
    <div className="about-container">
      <section className="about-hero">
        <div className="about-hero-img">
          <img src="https://preview.redd.it/learning-hub-at-work-this-was-a-rejected-concept-but-i-v0-7u2pi5upyijc1.jpg?width=640&crop=smart&auto=webp&s=8b221952b3fd6e5e024ec3cb67407c180d9243e6" alt="Learning Hub" />
        </div>
        <div className="about-hero-content">
          <h1>Empowering Learning Through Technology</h1>
          <p>
            Our mission is to democratize education by providing accessible, high-quality learning experiences to individuals worldwide. We believe that education should be a lifelong journey, and we're committed to supporting learners at every stage of their development.
          </p>
          <a href="/courses" className="about-btn">Explore Courses</a>
        </div>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          At Learning Hub, we're driven by a passion for education and a belief in the transformative power of technology. We strive to create a vibrant learning community where individuals can connect, collaborate, and achieve their full potential. Our platform offers a diverse range of programs, from foundational skills to advanced specializations, designed to meet the evolving needs of learners in today's dynamic world.
        </p>
      </section>

      <section className="about-team">
        <h2>Meet the Team</h2>
        <div className="about-team-list">
          {teamMembers.map((member) => (
            <div className="about-team-member" key={member.name}>
              <img src={member.img} alt={member.name} />
              <div className="about-team-info">
                <h3>{member.name}</h3>
                <p>{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-impact">
        <h2>Our Impact</h2>
        <div className="about-impact-stats">
          <div className="about-impact-card">
            <h3>Students Served</h3>
            <p className="about-impact-number">500K+</p>
          </div>
          <div className="about-impact-card">
            <h3>Courses Offered</h3>
            <p className="about-impact-number">100+</p>
          </div>
          <div className="about-impact-card">
            <h3>Countries Represented</h3>
            <p className="about-impact-number">50+</p>
          </div>
        </div>
        <p className="about-impact-desc">
          We're proud of the impact we've made in the lives of learners around the globe. Our platform has empowered individuals to pursue their passions, advance their careers, and contribute to their communities. We're committed to continuous improvement and innovation, ensuring that our programs remain relevant, engaging, and effective.
        </p>
        <a href="/contact" className="about-btn">Contact Us</a>
      </section>
    </div>
  );
}

export default About;
