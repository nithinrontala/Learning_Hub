import React, { useState } from 'react';

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
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you can handle form submission (e.g., send to API)
  };

  return (
    <div style={{ maxWidth: 500, margin: '40px auto', padding: 20 }}>
      <h2 style={{ textAlign: 'center', marginBottom: 30 }}>Application Form</h2>
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
        <div style={{ fontWeight: 600, marginTop: 10 }}>Statement of Purpose (Optional)</div>
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
          style={{ marginTop: 18, background: '#0a74ff', color: '#fff', border: 'none', borderRadius: 6, padding: '12px 0', fontWeight: 600, fontSize: 16, cursor: 'pointer' }}
        >
          Submit
        </button>
        {submitted && (
          <div style={{ color: 'green', textAlign: 'center', marginTop: 10 }}>
            Application submitted!
          </div>
        )}
      </form>
    </div>
  );
}

export default ApplicationForm;
