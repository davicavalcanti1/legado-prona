import { useState } from 'react';
import { motion } from 'framer-motion';
import { ORGAOS } from '../data/estatuto';

export default function Organograma() {
  const [sel, setSel] = useState(null);
  return (
    <section id="conheca" className="bg-white border-y border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-16 sm:py-24">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#0B8450] mb-3">Estrutura partidária</p>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#031538] tracking-tight mb-4">Conheça o partido</h2>
          <p className="lead">Toque em um órgão para ver o que ele faz (Art. 13 em diante).</p>
        </motion.div>

        <motion.div
          data-testid="organograma-container"
          className="org max-w-3xl mx-auto"
          initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        >
          {ORGAOS.map((o, i) => (
            <motion.button
              key={o.nome}
              type="button"
              data-testid={`organo-node-${i}`}
              aria-pressed={sel === i}
              onClick={() => setSel(sel === i ? null : i)}
              style={{ background: o.cor, width: o.w }}
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } }}
            >
              {o.nome}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          id="info"
          data-testid="organograma-info"
          key={sel === null ? 'none' : sel}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto mt-8 bg-[#FBFAF7] border border-slate-200 rounded-md p-6 text-sm leading-relaxed text-slate-600"
        >
          {sel === null ? 'Escolha um órgão acima.' : (
            <>
              <span className="block font-mono text-[10px] tracking-[0.24em] uppercase text-[#0B8450] mb-2">{ORGAOS[sel].nome}</span>
              {ORGAOS[sel].info}
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
