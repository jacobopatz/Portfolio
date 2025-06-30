import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/projects')
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className ="portfolioContainer">
      <header className="header">
        <nav className = "navBar">
          <div className = "logo">Jacob Opatz</div>
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>

        </nav>
      </header>
      <h1>My Projects</h1>
      <ul>
        {projects.map((proj, index) => (
          <li key={index}>{proj.title} - {proj.tech.join(', ')}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;