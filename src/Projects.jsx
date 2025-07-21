import { FaCloudSun, FaTasks, FaChartBar } from 'react-icons/fa';

const projects = [
  {
    title: 'Weather App',
    icon: <FaCloudSun color="#fbbf24" size={22} />,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    description: 'A web application that provides real-time weather updates for any city using OpenWeatherMap API. Features a clean UI, search, and responsive design.',
    tech: ['React', 'OpenWeatherMap API', 'CSS'],
    link: 'https://github.com/pritigoldi/weather-app',
  },
  {
    title: 'DocConsult Hospital website',
    icon: <FaTasks color="#34d399" size={22} />,
    image: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=400&q=80',
    description: 'A hospital management and consultation platform for booking appointments, managing patient records, and doctor-patient communication.',
    tech: ['React', 'Node.js', 'MongoDB', 'CSS'],
    link: 'https://github.com/pritigoldi/docconsult-hospital',
  },
  {
    title: 'Fraud Detection website',
    icon: <FaChartBar color="#a5b4fc" size={22} />,
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    description: 'A web application for detecting fraudulent transactions using machine learning algorithms and real-time analytics.',
    tech: ['React', 'Python', 'Machine Learning', 'CSS'],
    link: 'https://github.com/pritigoldi/fraud-detection',
  },
];

function Projects() {
  return (
    <div className="animated" style={{
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)', // unique blue gradient
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
        background: 'radial-gradient(circle at 60% 40%, rgba(100,108,255,0.08) 0%, transparent 70%)',
        zIndex: 0
      }} />
      <div style={{
        background: 'rgba(255,255,255,0.85)',
        borderRadius: 24,
        padding: '2.5rem 2rem',
        boxShadow: '0 8px 32px rgba(100,108,255,0.10)',
        maxWidth: 1100,
        width: '100%',
        position: 'relative',
        zIndex: 1
      }}>
        <div className="portfolio-header" style={{alignItems: 'center', gap: 12, justifyContent: 'center'}}>
          <FaChartBar size={32} color="#a5b4fc" />
          <h2 style={{margin: 0}}>Projects</h2>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: 36,
          marginTop: 36,
        }}>
          {projects.map(project => (
            <div key={project.title} style={{
              background: 'rgba(240,244,255,0.95)',
              borderRadius: 18,
              boxShadow: '0 4px 24px rgba(100,108,255,0.13)',
              padding: '1.5rem 1.2rem',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transition: 'transform 0.2s, box-shadow 0.2s',
              minHeight: 420,
              position: 'relative',
              cursor: 'pointer',
              border: '1.5px solid #e0e7ff',
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(100,108,255,0.18)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 4px 24px rgba(100,108,255,0.13)';
            }}
            >
              <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10}}>
                {project.icon}
                <h3 style={{margin: 0, fontSize: '1.3rem', fontWeight: 700, color: '#646cff'}}>{project.title}</h3>
              </div>
              <img src={project.image} alt={project.title} style={{width: '100%', height: 160, objectFit: 'cover', borderRadius: 12, marginBottom: 14, boxShadow: '0 2px 8px rgba(100,108,255,0.10)'}} />
              <p style={{fontSize: '1.05rem', color: '#222', marginBottom: 12, fontWeight: 500}}>{project.description}</p>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16}}>
                {project.tech.map(tech => (
                  <span key={tech} style={{background: '#e0e7ff', color: '#646cff', borderRadius: 6, padding: '0.2em 0.8em', fontWeight: 600, fontSize: '0.98rem'}}>{tech}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" style={{
                color:'#fff',
                background: 'linear-gradient(90deg, #646cff 0%, #a5b4fc 100%)',
                fontWeight: 700,
                borderRadius: 8,
                padding: '0.7em 1.5em',
                textDecoration: 'none',
                marginTop: 'auto',
                boxShadow: '0 2px 8px rgba(100,108,255,0.13)',
                transition: 'background 0.2s',
                display: 'inline-block',
                letterSpacing: 1
              }}>View Project</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects; 