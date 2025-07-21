import { FaEnvelopeOpenText, FaGithub, FaLinkedin, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';
// import emailjs from 'emailjs-com';
// import emailjs from '@emailjs/browser';

function Contacts() {
  const formRef = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('');
    emailjs.sendForm(
      'YOUR_SERVICE_ID', // replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // replace with your EmailJS template ID
      formRef.current,
      'YOUR_USER_ID' // replace with your EmailJS user ID (public key)
    )
    .then(() => {
      setStatus('Message sent successfully!');
      formRef.current.reset();
    }, (error) => {
      setStatus('Failed to send message. Please try again.');
    });
  };

  return (
    <div className="animated" style={{
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(rgba(40,60,120,0.7), rgba(40,60,120,0.7)), url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80) center/cover no-repeat',
      position: 'relative',
      overflow: 'hidden',
      padding: 0,
      margin: 0
    }}>
      <div style={{
        background: 'rgba(255,255,255,0.92)',
        borderRadius: 24,
        padding: '2.5rem 2rem',
        boxShadow: '0 8px 32px rgba(100,108,255,0.10)',
        maxWidth: 500,
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <div className="portfolio-header" style={{alignItems: 'center', gap: 12, justifyContent: 'center'}}>
          <FaEnvelopeOpenText size={32} color="#a5b4fc" />
          <h2 style={{margin: 0}}>Contact Me</h2>
        </div>
        <p style={{margin: '1em 0 2em 0', color: '#222', fontWeight: 500}}>
          This website is my personal achievement showcase. Feel free to reach out!
        </p>
        <form ref={formRef} onSubmit={sendEmail} style={{display: 'flex', flexDirection: 'column', gap: 18, margin: '1.5em 0', width: '100%'}}>
          <input name="user_name" type="text" placeholder="Your Name" required style={{padding: 14, borderRadius: 8, border: '1px solid #e0e7ff', fontSize: '1rem', outline: 'none'}} />
          <input name="user_email" type="email" placeholder="Your Email" required style={{padding: 14, borderRadius: 8, border: '1px solid #e0e7ff', fontSize: '1rem', outline: 'none'}} />
          <textarea name="message" placeholder="Your Message" rows={4} required style={{padding: 14, borderRadius: 8, border: '1px solid #e0e7ff', fontSize: '1rem', outline: 'none'}} />
          <button type="submit" style={{padding: '1em 2.5em', background: 'linear-gradient(90deg, #646cff 0%, #a5b4fc 100%)', color: '#fff', border: 'none', borderRadius: 12, fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer', boxShadow: '0 2px 12px rgba(100,108,255,0.15)', transition: 'background 0.2s'}}>Send Message</button>
        </form>
        {status && <div style={{marginTop: 12, color: status.includes('success') ? '#22c55e' : '#ef4444', fontWeight: 600}}>{status}</div>}
        <div style={{display: 'flex', justifyContent: 'center', gap: 32, marginTop: 16}}>
          <a href="https://github.com/pritigoldi" target="_blank" rel="noopener noreferrer" style={{color:'#222', fontSize: 32, background:'#e0e7ff', borderRadius: '50%', padding: 10, transition: 'background 0.2s'}}><FaGithub /></a>
          <a href="http://linkedin.com/in/priti-kumari-203a97230" target="_blank" rel="noopener noreferrer" style={{color:'#0a66c2', background:'#fff', borderRadius: '50%', fontSize: 32, padding: 10, transition: 'background 0.2s'}}><FaLinkedin /></a>
        </div>
        <div style={{marginTop: 28, textAlign: 'left', width: '100%'}}>
          <p style={{margin: '1em 0', display: 'flex', alignItems: 'center', gap: 10, color: '#646cff', fontWeight: 600}}><FaEnvelope /> Email: <a href="mailto:pritikumari60007@gmail.com" style={{color:'#646cff', textDecoration:'underline'}}>pritikumari60007@gmail.com</a></p>
          <p style={{margin: '1em 0', display: 'flex', alignItems: 'center', gap: 10, color: '#646cff', fontWeight: 600}}><FaPhoneAlt /> Contact No: <a href="tel:9955369829" style={{color:'#646cff', textDecoration:'underline'}}>9955369829</a></p>
        </div>
      </div>
    </div>
  );
}

export default Contacts; 