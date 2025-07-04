import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import ProjectsPage from './pages/ProjectsPage';
import PublicationsPage from './pages/PublicationsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <main className="ml-64 w-full min-h-screen bg-gray-100 p-8">
          <div className="max-w-6xl mx-auto">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/publications" element={<PublicationsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;