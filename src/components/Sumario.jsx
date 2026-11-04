import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TITULOS, PREAMBULO, DISPOSICOES_FINAIS } from '../data/estatuto';

const CHIPS = [
  { id: 't0', label: 'PREÂMBULO', sub: 'Nossas referências', cor: 'g' },
  ...TITULOS.map((t) => ({ id: t.id, label: t.label, sub: t.sub, cor: t.cor })),
  { id: DISPOSICOES_FINAIS.id, label: DISPOSICOES_FINAIS.label, sub: DISPOSICOES_FINAIS.sub, cor: DISPOSICOES_FINAIS.cor },
];

export default function Sumario() {
  return (
    <section id="sumario" className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#0B8450] mb-3">Navegação rápida</p>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-[#031538] tracking-tight mb-4">Sumário</h2>
        <p className="lead">Vá direto ao título que você quer ler.</p>
      </motion.div>
      <motion.div
        className="chips grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
        variants={{ show: { transition: { staggerChildren: 0.05 } } }}
      >
        {CHIPS.map((c) => (
          <motion.a
            key={c.id}
            className={`chip ${c.cor}`}
            href={`#${c.id}`}
            data-testid={`sumario-chip-${c.id}`}
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }}
          >
            {c.label}
            <small>{c.sub}</small>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
