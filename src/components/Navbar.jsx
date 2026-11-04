import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FileText, Megaphone } from 'lucide-react';

export default function Navbar({ onOpenComunicado }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const goSection = (id) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const linkCls = 'text-[11px] font-mono tracking-[0.18em] uppercase text-slate-300 hover:text-[#F1C40F] transition-colors duration-200';

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <header
        data-testid="navbar"
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#031538]/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
          <button data-testid="nav-logo" onClick={() => navigate('/')} className="flex items-center gap-3 group">
            <img src="/prona-logo.webp" alt="PRONA" className="h-9 w-auto rounded-sm transition-transform duration-300 group-hover:scale-105" />
            <span className="hidden sm:block text-left leading-tight">
              <span className="block font-display font-bold text-white text-sm tracking-wide">PRONA</span>
              <span className="block text-[9px] font-mono tracking-[0.22em] text-[#F1C40F] uppercase">Legado RP</span>
            </span>
          </button>
          <nav className="flex items-center gap-4 sm:gap-6">
            <button data-testid="nav-link-estatuto" className={linkCls} onClick={() => goSection('estatuto')}>Estatuto</button>
            <button data-testid="nav-link-orgaos" className={`${linkCls} hidden lg:block`} onClick={() => goSection('conheca')}>Órgãos</button>
            <button data-testid="nav-link-elegibilidade" className={`${linkCls} hidden lg:block`} onClick={() => goSection('filiacao')}>Filiação</button>
            <button data-testid="nav-link-programa" className={`${linkCls} hidden sm:block`} onClick={() => navigate('/programa')}>Programa</button>
            <button data-testid="nav-link-mural" className={`${linkCls} hidden sm:block`} onClick={() => navigate('/comunicados')}>Mural</button>
            <button data-testid="nav-link-eneas" className={linkCls} onClick={() => navigate('/eneas')}>Enéas</button>
            <button
              data-testid="nav-open-comunicado-button"
              onClick={onOpenComunicado}
              className="flex items-center gap-2 text-[10px] font-mono tracking-[0.14em] uppercase bg-[#F1C40F] text-[#031538] px-3 py-2 rounded-sm font-bold hover:bg-white transition-colors duration-200"
            >
              <Megaphone size={13} strokeWidth={2.5} />
              <span className="hidden sm:inline">Comunicado</span>
              <FileText size={13} className="sm:hidden" />
            </button>
          </nav>
        </div>
        <div className="flag-strip" />
      </header>
    </>
  );
}
