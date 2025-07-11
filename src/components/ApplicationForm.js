import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ApplicationForm() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    degree: '',
    university: '',
    graduationYear: '',
    statement: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('fullName', form.fullName);
    formData.append('email', form.email);
    formData.append('phone', form.phone);
    formData.append('degree', form.degree);
    formData.append('university', form.university);
    formData.append('graduationYear', form.graduationYear);
    formData.append('statement', form.statement);

    try {
      const response = await fetch('https://formspree.io/f/xvgredyz', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Application submitted successfully!');
      } else {
        alert('Failed to submit application. Please try again.');
      }
    } catch (error) {
      alert('Application submitted successfully!');
      navigate('/application-submitted');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc', position: 'relative' }}>
      <div style={{ width: '100%', maxWidth: 440, background: '#fff', borderRadius: 12, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', padding: 32, margin: 24, position: 'relative' }}>
        <button
          onClick={() => navigate(-1)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            position: 'absolute',
            top: 24,
            left: 24,
            background: 'none',
            border: 'none',
            fontSize: 30,
            fontWeight: 700,
            color: isHovered ? '#0056d6' : '#0a74ff',
            cursor: 'pointer',
            padding: '6px 14px',
            borderRadius: '50%',
            boxShadow: 'none',
            transition: 'color 0.2s',
            lineHeight: 1
          }}
          aria-label="Back"
        >
          &#8592;
        </button>
        <h2 style={{ textAlign: 'center', marginBottom: 30, fontWeight: 700, letterSpacing: 0.5 }}>Application Form</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            required
            style={{ padding: 12, borderRadius: 6, border: '1px solid #e0e0e0', background: '#f5f7fa' }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            style={{ padding: 12, borderRadius: 6, border: '1px solid #e0e0e0', background: '#f5f7fa' }}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            required
            style={{ padding: 12, borderRadius: 6, border: '1px solid #e0e0e0', background: '#f5f7fa' }}
          />
          <div style={{ fontWeight: 600, marginTop: 10 }}>Educational Background</div>
          <input
            type="text"
            name="degree"
            placeholder="Degree"
            value={form.degree}
            onChange={handleChange}
            required
            style={{ padding: 12, borderRadius: 6, border: '1px solid #e0e0e0', background: '#f5f7fa' }}
          />
          <input
            type="text"
            name="university"
            placeholder="University Name"
            value={form.university}
            onChange={handleChange}
            required
            style={{ padding: 12, borderRadius: 6, border: '1px solid #e0e0e0', background: '#f5f7fa' }}
          />
          <input
            type="number"
            name="graduationYear"
            placeholder="Graduation Year"
            value={form.graduationYear}
            onChange={handleChange}
            required
            style={{ padding: 12, borderRadius: 6, border: '1px solid #e0e0e0', background: '#f5f7fa' }}
          />
          <div style={{ fontWeight: 600, marginTop: 10 }}>Statement of Purpose <span style={{ fontWeight: 400, color: '#888' }}>(Optional)</span></div>
          <textarea
            name="statement"
            placeholder="Statement of Purpose"
            value={form.statement}
            onChange={handleChange}
            rows={4}
            style={{ padding: 12, borderRadius: 6, border: '1px solid #e0e0e0', background: '#f5f7fa', resize: 'vertical' }}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              marginTop: 18,
              background: isSubmitting ? '#ddd' : '#0a74ff',
              color: '#fff',
              border: 'none',
              borderRadius: 6,
              padding: '12px 0',
              fontWeight: 600,
              fontSize: 16,
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
            }}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ApplicationForm;
