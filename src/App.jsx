import HomePage from '../src/homePage/Home.jsx';
import AboutPage from './aboutPage/AboutPage.jsx';
import CurriculumPage from './curriculumPage/CurriculumPage.jsx';
import ContactPage from './contactPage/ContactPage.jsx';
import { Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

import './App.css';

library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/curriculum" element={<CurriculumPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
