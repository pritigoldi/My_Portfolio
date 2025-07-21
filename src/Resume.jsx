import { FaFileAlt, FaCheckCircle, FaUserGraduate, FaCode, FaUsers } from 'react-icons/fa';

function Resume() {
  return (
    <div className="animated" style={{
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)', // modern gradient
      position: 'relative',
      overflow: 'hidden',
      padding: 0,
      margin: 0
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 32,
        background: 'rgba(255,255,255,0.85)',
        borderRadius: 24,
        padding: '2.5rem 2rem',
        boxShadow: '0 8px 32px rgba(100,108,255,0.10)',
        maxWidth: 900,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        backdropFilter: 'blur(8px)',
        border: '1.5px solid #e0e7ff',
      }}>
        {/* Left: About/Summary */}
        <div style={{flex: 1, minWidth: 260, textAlign: 'left'}}>
          <div className="portfolio-header" style={{alignItems: 'center', gap: 12}}>
            <FaFileAlt size={32} color="#646cff" />
            <h2 style={{margin: 0}}>Resume</h2>
          </div>
          <p style={{fontSize: '1.15rem', margin: '1.2em 0 1.5em 0', color: '#222', fontWeight: 500}}>
            MCA student and web developer with a strong foundation in computer science and hands-on experience in modern web development. Skilled in React, Node.js, and building responsive, user-centric applications.
          </p>
          <a href="/PRITI-KUMARI-FlowCV-Resume-20250622 (1).pdf" download style={{
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
            letterSpacing: 1,
            marginTop: 16
          }}>Download Resume</a>
        </div>
        {/* Right: Highlights */}
        <div style={{flex: 1, minWidth: 260, textAlign: 'left', marginTop: 24}}>
          <h3 style={{color: '#646cff', fontWeight: 700, marginBottom: 18, display: 'flex', alignItems: 'center', gap: 8}}><FaUserGraduate /> Highlights</h3>
          <ul style={{listStyle: 'none', padding: 0, margin: 0, fontSize: '1.08rem'}}>
            <li style={{marginBottom: 18, display: 'flex', alignItems: 'center', gap: 10}}><FaCode color="#646cff" /> Strong problem-solving and teamwork skills</li>
            <li style={{marginBottom: 18, display: 'flex', alignItems: 'center', gap: 10}}><FaUsers color="#646cff" /> Passionate about UI/UX and clean code</li>
            <li style={{marginBottom: 18, display: 'flex', alignItems: 'center', gap: 10}}><FaCheckCircle color="#646cff" /> Quick learner, always up-to-date with new tech</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume; 