import { FaGraduationCap } from 'react-icons/fa';

function Education() {
  return (
    <div className="animated" style={{
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(120deg, #6a85b6 0%, #bac8e0 100%)', // darker blue gradient
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
        background: 'radial-gradient(circle at 40% 60%, rgba(60,80,120,0.10) 0%, transparent 70%)',
        zIndex: 0
      }} />
      <div style={{
        background: 'rgba(255,255,255,0.97)', // higher opacity for better contrast
        borderRadius: 24,
        padding: '2.5rem 2rem',
        boxShadow: '0 8px 32px rgba(60,80,120,0.10)',
        maxWidth: 700,
        width: '100%',
        position: 'relative',
        zIndex: 1,
        backdropFilter: 'blur(8px)',
        border: '1.5px solid #bac8e0',
      }}>
        <div className="portfolio-header" style={{alignItems: 'center', gap: 12, justifyContent: 'center'}}>
          <FaGraduationCap size={32} color="#6a85b6" />
          <h2 style={{margin: 0, color: '#222'}}>Education</h2>
        </div>
        <div style={{borderLeft: '3px solid #6a85b6', paddingLeft: '1.5em', marginTop: '2em', textAlign: 'left'}}>
          <div style={{marginBottom: '2em', paddingBottom: 12, borderBottom: '1.2px solid #bac8e0'}}>
            <h3 style={{margin: 0, color: '#6a85b6', fontWeight: 700}}>MCA (Master of Computer Applications)</h3>
            <p style={{margin: 0, fontWeight: 600, color: '#222'}}>MIT-WPU, PUNE<br/>2024 - Present</p>
            <p style={{margin: 0, fontSize: '0.98em', color: '#6a85b6'}}>Current Student | Enthusiast in Web Development</p>
          </div>
          <div>
            <h4 style={{margin: 0, color: '#6a85b6', fontWeight: 700}}>BCA (Bachelor of Computer Applications)</h4>
            <p style={{margin: 0, fontWeight: 600, color: '#222'}}>Patna women college, Patna<br/>2021 - 2024</p>
            <p style={{margin: 0, fontSize: '0.98em', color: '#6a85b6'}}>Graduated with Distinction</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education; 