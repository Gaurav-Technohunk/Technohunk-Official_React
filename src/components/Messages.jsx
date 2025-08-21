import React, { useState } from 'react'
import messageImg from '../assets/images/img/connect.png';
import SectionTitle from './SectionTitle';

const Messages = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    number: '',
    area: 'India',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
  const res = await fetch('https://technohunk-official-node.onrender.com/api/sendMail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('Message sent successfully!');
        setForm({ name: '', email: '', number: '', area: 'India', message: '' });
      } else {
        setStatus(data.error || 'Failed to send message.');
      }
    } catch (err) {
      setStatus('Error sending message.');
    }
  };

  return (
    <section className="ep-messages-section position-relative pt-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="message-text position-relative">
              <SectionTitle subTitle="Talk to us" title="We’re just a conversation away." extraClass="mb-40" />
              <form className="message-form" onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-lg-6">
                    <div className="input-group">
                      <label className="form-label">Your Name</label>
                      <input type="text" name="name" className="form-control form-field shadow-none" placeholder="Adnan Walker" value={form.name} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-group">
                      <label className="form-label">Your Email</label>
                      <input type="email" name="email" className="form-control form-field shadow-none" placeholder="info.example@gmail.com" value={form.email} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-group">
                      <label className="form-label">Your Number</label>
                      <input type="text" name="number" className="form-control form-field shadow-none" placeholder="+088123456789" value={form.number} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-group">
                      <label className="form-label">Your Area</label>
                      <select name="area" className="form-select form-field shadow-none" aria-label="Default select example" value={form.area} onChange={handleChange} required>
                        <option>India</option>
                        <option>USA</option>
                        <option>Chicago</option>
                        <option>Houston</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-group">
                      <label className="form-label">Your Message</label>
                      <textarea name="message" className="form-field textarea-control" placeholder="Message here.." value={form.message} onChange={handleChange} required></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button type="submit" className="theme-btn position-relative">Send Now</button>
                  </div>
                  {status && (
                    <div className="col-lg-12">
                      <div className="alert alert-info mt-3">{status}</div>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="message-image overflow-hidden position-absolute bottom-0 end-0">
              <img loading="lazy" src={messageImg} alt="message-image" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Messages
