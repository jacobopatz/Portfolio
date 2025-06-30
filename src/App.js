// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from "motion/react";
// Import global components



// Import all your page components (adjust paths based on your `pages` subfolders)
import HomePage from './pages/Home/Home';
import ResumePage from './pages/Resume/Resume';
import ProjectsPage from './pages/Projects/Projects';
import ExperiencePage from './pages/Experience/Experience';
import EducationPage from './pages/Education/Education';

// Import global App layout styles
import styles from './styles/App.module.css';


function App() {
  return (
    <Router>
      <div className={styles.appLayout}>
        

        <main className={styles.mainContent}>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
             <Route path="/projects" element={<ProjectsPage />} />
             
              <Route path="/Resume" element={<ResumePage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            
            <Route path="/Education" element={<EducationPage />} /> 
            <Route path="*" element={<h2 className={styles.notFound}>404 - Page Not Found</h2>} />
          </Routes>
          </AnimatePresence>
        </main>

       
      </div>
    </Router>
  );
}

export default App;