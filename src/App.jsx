import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/main-layout/MainLayout';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contacts from './components/contacts/Contacts';
import NotFound from './components/not-found/NotFound';

import './App.css';
import StarsCanvas from './canvas/stars-canvas';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MainLayout />
                <StarsCanvas />
              </>
            }
          >
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
