import { useEffect, useState, useCallback } from 'react';
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ComunicadoModal from './components/ComunicadoModal';
import HomePage from './pages/HomePage';
import EneasPage from './pages/EneasPage';
import ComunicadosPage from './pages/ComunicadosPage';
import ProgramaPage from './pages/ProgramaPage';

function ScrollManager() {
  const location = useLocation();
  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 120);
      window.history.replaceState({}, document.title);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return null;
}

function Shell() {
  const [modalOpen, setModalOpen] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    let raf;
    const loop = (t) => { lenis.raf(t); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); lenis.destroy(); };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', modalOpen);
  }, [modalOpen]);

  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  return (
    <div className="grain">
      <ScrollManager />
      <Navbar onOpenComunicado={openModal} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/eneas" element={<EneasPage />} />
        <Route path="/programa" element={<ProgramaPage />} />
        <Route path="/comunicados" element={<ComunicadosPage />} />
      </Routes>
      <Footer />
      <ComunicadoModal open={modalOpen} onClose={closeModal} />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Shell />
      </BrowserRouter>
    </div>
  );
}

export default App;
