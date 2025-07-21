import { FaUserCircle } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';

function useTypewriter(text, speed = 60) {
  const [displayed, setDisplayed] = useState('');
  const i = useRef(0);
  useEffect(() => {
    if (i.current < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text[i.current]);
        i.current += 1;
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [displayed, text, speed]);
  return displayed;
}

function Home() {
  const tagline = useTypewriter('Turning ideas into interactive digital experiences.');
  return (
    <div className="animated hero-section" style={{
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(120deg, #646cff 0%, #a5b4fc 100%), url(/profile/hero-bg.jpg) center/cover no-repeat',
      position: 'relative',
      overflow: 'hidden',
      padding: 0,
      margin: 0
    }}>
      <div style={{
        textAlign: 'center',
        background: 'rgba(255,255,255,0.85)',
        borderRadius: 24,
        padding: '2.5rem 2rem',
        boxShadow: '0 8px 32px rgba(100,108,255,0.10)',
        maxWidth: 480,
        width: '100%'
      }}>
        <img src="/profile/priti.jpg" alt="Profile" style={{width: 220, height: 220, borderRadius: '50%', objectFit: 'cover', marginBottom: 28, border: '6px solid #646cff', boxShadow: '0 0 32px 4px #a5b4fc', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} />
        <div className="portfolio-header" style={{justifyContent: 'center'}}>
          <FaUserCircle size={40} color="#646cff" />
          <h1 style={{fontSize: '2.6rem', marginBottom: '0.3em', letterSpacing: '2px', fontWeight: 800}}>PRITI KUMARI</h1>
        </div>
        <h2 style={{fontWeight: 600, marginBottom: '1em', color: '#646cff', fontSize: '1.5rem'}}>Web Developer | Age 22</h2>
        <p style={{fontSize: '1.15rem', maxWidth: 400, margin: '0 auto 1.2em', lineHeight: 1.6, color: '#222', fontWeight: 500}}>
          MCA student & web development enthusiast passionate about building beautiful, functional, and user-friendly web applications.
        </p>
        <p style={{fontSize: '1.1rem', color: '#646cff', marginBottom: '2em', minHeight: 28, fontFamily: 'monospace', letterSpacing: 1}}>
          {tagline}
          <span className="typewriter-cursor" style={{color: '#646cff', fontWeight: 700}}>|</span>
        </p>
        <div style={{display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '2em'}}>
          <a href="https://github.com/pritigoldi" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5em', background: '#fff', color: '#222', borderRadius: '6px', padding: '0.5em 1.2em', fontWeight: 600, textDecoration: 'none', boxShadow: '0 2px 8px rgba(100,108,255,0.10)', transition: 'background 0.2s'
          }}>
            GitHub
          </a>
          <a href="http://linkedin.com/in/priti-kumari-203a97230" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5em', background: '#0a66c2', color: '#fff', borderRadius: '6px', padding: '0.5em 1.2em', fontWeight: 600, textDecoration: 'none', boxShadow: '0 2px 8px rgba(100,108,255,0.10)', transition: 'background 0.2s'
          }}>
            LinkedIn
          </a>
        </div>
        <a href="#resume" style={{
          display: 'inline-block',
          padding: '1em 2.5em',
          background: 'linear-gradient(90deg, #646cff 0%, #a5b4fc 100%)',
          color: '#fff',
          borderRadius: '12px',
          fontWeight: 700,
          fontSize: '1.15rem',
          textDecoration: 'none',
          boxShadow: '0 2px 12px rgba(100,108,255,0.15)',
          transition: 'background 0.2s',
          letterSpacing: 1
        }}>View Resume</a>
      </div>
    </div>
  );
}

export default Home; 