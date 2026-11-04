import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Sumario from '../components/Sumario';
import Organograma from '../components/Organograma';
import FiliacaoChecker from '../components/FiliacaoChecker';
import StatuteSection from '../components/StatuteSection';
import Marquee from '../components/Marquee';

function MaskLine({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <span ref={ref} className={`mask-line ${className}`}>
      <motion.span
        initial={{ y: '115%' }}
        animate={inView ? { y: 0 } : {}}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const yLogo = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} data-testid="hero-section" className="relative min-h-[92vh] flex items-center bg-[#031538] overflow-hidden">
      <motion.div style={{ y: yBg }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1625426078245-6911839409dd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHxfHxicmF6aWwlMjBwb2xpdGljcyUyMGNvbmdyZXNzJTIwY29uc3RpdHV0aW9uJTIwaGlzdG9yeXxlbnwwfHx8fDE3OTM3OTI5MTl8MA&ixlib=rb-4.1.0&q=85"
          alt=""
          className="w-full h-[120%] object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#031538]/70 via-[#031538]/55 to-[#031538]" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full pt-28 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-8">
          <motion.p
            initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
            className="font-mono text-[10px] sm:text-xs tracking-[0.34em] uppercase text-[#F1C40F] mb-6"
          >
            Estatuto Geral — Simulação política · Jogo Legado
          </motion.p>
          <h1 className="font-display font-black text-white leading-[0.98] tracking-tight text-[clamp(2.6rem,7.5vw,6rem)]">
            <MaskLine delay={0.25}>Partido de</MaskLine>
            <MaskLine delay={0.38}>Reedificação da</MaskLine>
            <MaskLine delay={0.51} className="text-[#F1C40F]">Ordem Nacional</MaskLine>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.85 }}
            className="mt-8 max-w-xl font-display italic text-lg sm:text-xl text-slate-300 leading-relaxed"
          >
            “Por um Brasil soberano, desenvolvido e justo.”
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#estatuto"
              data-testid="hero-cta-estatuto"
              className="group relative overflow-hidden bg-[#F1C40F] text-[#031538] font-mono text-xs font-bold tracking-[0.2em] uppercase px-8 py-4 rounded-sm"
            >
              <span className="relative z-10 flex items-center gap-2">Ler o estatuto <ArrowDown size={14} className="transition-transform duration-300 group-hover:translate-y-1" /></span>
              <span className="absolute inset-0 bg-[#0B8450] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </a>
            <a
              href="#sumario"
              data-testid="hero-cta-sumario"
              className="border border-white/30 text-white hover:border-[#F1C40F] hover:text-[#F1C40F] transition-colors duration-300 font-mono text-xs font-bold tracking-[0.2em] uppercase px-8 py-4 rounded-sm"
            >
              Ver sumário
            </a>
          </motion.div>
        </div>
        <motion.div
          style={{ y: yLogo }}
          initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4 flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-6 bg-[#F1C40F]/15 blur-3xl rounded-full" />
            <img src="/prona-logo.webp" alt="Símbolo do PRONA" className="relative w-52 sm:w-64 lg:w-72 h-auto drop-shadow-2xl rounded-md" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Sumario />
      <Organograma />
      <FiliacaoChecker />
      <StatuteSection />
    </main>
  );
}
