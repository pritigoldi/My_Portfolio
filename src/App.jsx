// import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import Resume from './Resume'
import Skills from './Skills'
import Education from './Education'
import Projects from './Projects'
import Contacts from './Contacts'

function App() {
  return (
    <div className="portfolio-container">
      <Navbar />
      <section id="home"><Home /></section>
      <section id="resume"><Resume /></section>
      <section id="skills"><Skills /></section>
      <section id="education"><Education /></section>
      <section id="projects"><Projects /></section>
      <section id="contacts"><Contacts /></section>
    </div>
  )
}

export default App
