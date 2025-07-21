import { FaTools, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaJava, FaDatabase } from 'react-icons/fa';

const skills = [
  { name: 'HTML', level: 95, icon: <FaHtml5 color="#e34c26" /> },
  { name: 'CSS', level: 90, icon: <FaCss3Alt color="#1572b6" /> },
  { name: 'JavaScript', level: 90, icon: <FaJs color="#f7df1e" /> },
  { name: 'React', level: 85, icon: <FaReact color="#61dafb" /> },
  { name: 'Node.js', level: 80, icon: <FaNodeJs color="#3c873a" /> },
  { name: 'Java', level: 80, icon: <FaJava color="#007396" /> },
  { name: 'DSA', level: 60, icon: <FaDatabase color="#a5b4fc" /> },
  { name: 'Git & GitHub', level: 85, icon: <FaGithub color="#222" /> },
];

function Skills() {
  return (
    <div className="animated" style={{
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(120deg, #fbc2eb 0%, #a6c1ee 100%)', // unique purple/blue gradient
      position: 'relative',
      overflow: 'hidden',
      padding: 0,
      margin: 0
    }}>
      {/* Subtle overlay for depth */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 40% 60%, rgba(100,108,255,0.08) 0%, transparent 70%)',
        zIndex: 0
      }} />
      <div style={{
        background: 'rgba(255,255,255,0.85)',
        borderRadius: 24,
        padding: '2.5rem 2rem',
        boxShadow: '0 8px 32px rgba(100,108,255,0.10)',
        maxWidth: 900,
        width: '100%',
        backdropFilter: 'blur(8px)',
        border: '1.5px solid #e0e7ff',
        position: 'relative',
        zIndex: 1
      }}>
        <div className="portfolio-header" style={{alignItems: 'center', gap: 12, justifyContent: 'center'}}>
          <FaTools size={32} color="#a5b4fc" />
          <h2 style={{margin: 0}}>Skills</h2>
        </div>
        <p style={{fontSize: '1.15rem', margin: '1.2em 0 2em 0', color: '#222', fontWeight: 500, textAlign: 'center'}}>
          My core skills in web development are shown below. I love learning new technologies and improving my craft every day.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 32,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {skills.map(skill => (
            <div key={skill.name} style={{
              background: 'rgba(240,244,255,0.95)',
              borderRadius: 16,
              padding: '1.5rem 1.2rem',
              boxShadow: '0 4px 24px rgba(100,108,255,0.13)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 140,
              border: '1.2px solid #e0e7ff',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 6px 18px rgba(100,108,255,0.15)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 4px 24px rgba(100,108,255,0.13)';
            }}
            >
              <div style={{fontSize: 36, marginBottom: 10}}>{skill.icon}</div>
              <span style={{fontWeight: 700, fontSize: '1.15rem', marginBottom: 8}}>{skill.name}</span>
              <div style={{background: '#e0e7ff', borderRadius: 8, height: 10, marginTop: 4, marginBottom: 2, width: '100%', maxWidth: 160}}>
                <div style={{width: `${skill.level}%`, background: 'linear-gradient(90deg, #646cff 0%, #a5b4fc 100%)', height: 10, borderRadius: 8, transition: 'width 0.5s'}}></div>
              </div>
              <span style={{fontSize: '0.95em', color: '#a5b4fc', fontWeight: 600}}>{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills; 