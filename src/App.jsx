import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/main-layout/main-layout';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Projects from './components/pages/projects-page/ProjectsPage';
import Contacts from './components/pages/contacts/Contacts';
import NotFound from './components/pages/not-found/NotFound';
import StarsCanvas from './canvas/Stars-canvas';

import './App.css';
import BurgerMenu from './components/burger-menu/burger-menu';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <div id="layout_container">
              <BurgerMenu />
              <div id="layout">
                <MainLayout />
                <StarsCanvas />
              </div>
            </div>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects/:id?" element={<Projects />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
