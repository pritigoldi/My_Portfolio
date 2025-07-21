import './Navbar.css';
import { Link as ScrollLink } from 'react-scroll';
import { FaUserCircle } from 'react-icons/fa';

const navItems = [
  { name: 'Home', to: 'home' },
  { name: 'Resume', to: 'resume' },
  { name: 'Skills', to: 'skills' },
  { name: 'Education', to: 'education' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contacts', to: 'contacts' },
];

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <FaUserCircle size={28} color="#fff" style={{marginRight: 8}} />
        <span style={{fontWeight: 700, fontSize: '1.2rem', color: '#fff'}}>PRITI KUMARI</span>
      </div>
      <ul>
        {navItems.map(item => (
          <li key={item.to}>
            <ScrollLink
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
            >
              {item.name}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar; 