import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle } from 'lucide-react';

const REQUISITOS = [
  'Tenho o passe do planalto',
  'Estou em pleno gozo dos meus direitos políticos',
  'Aceito o Programa e o Estatuto do partido',
];

export default function FiliacaoChecker() {
  const [checks, setChecks] = useState([false, false, false]);
  const done = checks.filter(Boolean).length;
  const ok = done === 3;

  const toggle = (i) => setChecks((c) => c.map((v, j) => (j === i ? !v : v)));

  return (
    <section id="filiacao" className="max-w-5xl mx-auto px-4 sm:px-8 py-16 sm:py-24">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#0B8450] mb-3">Arts. 38 a 40</p>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-[#031538] tracking-tight mb-4">Posso me filiar?</h2>
        <p className="lead">Confira os requisitos (Arts. 38 a 40).</p>
      </motion.div>

      <div data-testid="filiation-checker-container" className="tool max-w-2xl bg-white border border-slate-200 rounded-md p-6 sm:p-8 shadow-sm">
        <div className="space-y-4">
          {REQUISITOS.map((r, i) => (
            <label
              key={r}
              data-testid={`filiation-check-${i}`}
              className={`flex items-center gap-4 cursor-pointer border rounded-md px-5 py-4 transition-all duration-300 ${checks[i] ? 'border-[#0B8450] bg-[#0B8450]/5' : 'border-slate-200 hover:border-[#0B8450]/50'}`}
            >
              <input type="checkbox" className="c sr-only" checked={checks[i]} onChange={() => toggle(i)} />
              {checks[i]
                ? <CheckCircle2 size={22} className="text-[#0B8450] shrink-0" />
                : <Circle size={22} className="text-slate-300 shrink-0" />}
              <span className={`text-sm sm:text-base transition-colors ${checks[i] ? 'text-[#075634] font-semibold' : 'text-slate-600'}`}>{r}</span>
            </label>
          ))}
        </div>
        <div className="mt-6 h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            animate={{ width: `${(done / 3) * 100}%`, backgroundColor: ok ? '#0B8450' : '#F1C40F' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <div
          id="res"
          data-testid="filiation-result-badge"
          className={`mt-5 font-mono text-xs tracking-[0.14em] uppercase font-bold px-4 py-3 rounded-sm text-center transition-colors duration-500 ${ok ? 'bg-[#0B8450] text-white' : 'bg-slate-100 text-slate-500'}`}
        >
          {ok ? 'Você preenche os requisitos para se filiar ao PRONA.' : 'Marque os três itens.'}
        </div>
      </div>
    </section>
  );
}
