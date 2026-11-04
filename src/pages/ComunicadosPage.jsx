import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollText, FileSignature, Megaphone, ChevronDown } from 'lucide-react';
import { DOCUMENTOS, TIPOS_DOC } from '../data/comunicados';

const TIPO_STYLE = {
  ATA: { cls: 'bg-[#062C6E] text-white', icon: ScrollText },
  'DELIBERAÇÃO': { cls: 'bg-[#0B8450] text-white', icon: FileSignature },
  EDITAL: { cls: 'bg-[#F1C40F] text-[#031538]', icon: Megaphone },
};

export default function ComunicadosPage() {
  const [filtro, setFiltro] = useState('TODOS');
  const [aberto, setAberto] = useState(null);

  const docs = DOCUMENTOS.filter((d) => filtro === 'TODOS' || d.tipo === filtro);

  return (
    <main data-testid="comunicados-page">
      <section className="relative bg-[#031538] overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src="https://images.unsplash.com/photo-1625426078245-6911839409dd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHxfHxicmF6aWwlMjBwb2xpdGljcyUyMGNvbmdyZXNzJTIwY29uc3RpdHV0aW9uJTIwaGlzdG9yeXxlbnwwfHx8fDE3OTM3OTI5MTl8MA&ixlib=rb-4.1.0&q=85" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#031538] to-[#031538]/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 pt-36 pb-16">
          <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="font-mono text-[10px] sm:text-xs tracking-[0.34em] uppercase text-[#F1C40F] mb-5">
            Diretório Nacional — Publicações oficiais
          </motion.p>
          <h1 className="font-display font-black text-white leading-[0.98] tracking-tight text-[clamp(2.4rem,6.5vw,5rem)]">
            <span className="mask-line"><motion.span initial={{ y: '115%' }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}>Mural de</motion.span></span>
            <span className="mask-line text-[#F1C40F]"><motion.span initial={{ y: '115%' }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>Comunicados</motion.span></span>
          </h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }} className="mt-6 max-w-2xl text-slate-300 text-base sm:text-lg leading-relaxed">
            Atas, deliberações e editais dos órgãos partidários do PRONA, publicados em cumprimento ao princípio da transparência (Arts. 16 e 50 do Estatuto).
          </motion.p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-8 py-14 sm:py-20">
        <div className="flex flex-wrap gap-2.5 mb-10">
          {TIPOS_DOC.map((t) => (
            <button
              key={t}
              data-testid={`comunicado-filter-${t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')}`}
              onClick={() => setFiltro(t)}
              className={`font-mono text-[10px] tracking-[0.18em] uppercase font-bold px-4 py-2.5 rounded-sm border transition-all duration-300 ${filtro === t ? 'bg-[#031538] text-[#F1C40F] border-[#031538]' : 'bg-white text-slate-500 border-slate-200 hover:border-[#031538]'}`}
            >
              {t}
            </button>
          ))}
        </div>

        <AnimatePresence mode="popLayout">
          <div className="space-y-5">
            {docs.map((doc, i) => {
              const st = TIPO_STYLE[doc.tipo];
              const Icon = st.icon;
              const isOpen = aberto === doc.id;
              return (
                <motion.article
                  layout
                  key={doc.id}
                  data-testid={`comunicado-card-${i}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white border border-slate-200 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    data-testid={`comunicado-toggle-${i}`}
                    onClick={() => setAberto(isOpen ? null : doc.id)}
                    className="w-full text-left p-6 sm:p-7"
                  >
                    <div className="flex items-start gap-4 sm:gap-5">
                      <div className={`shrink-0 w-11 h-11 rounded-sm flex items-center justify-center ${st.cls}`}>
                        <Icon size={19} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1.5">
                          <span className={`font-mono text-[9px] tracking-[0.2em] font-bold px-2 py-1 rounded-sm ${st.cls}`}>{doc.tipo}</span>
                          <span className="font-mono text-[10px] tracking-wider text-slate-400">{doc.numero} · {doc.data}</span>
                        </div>
                        <h2 className="font-display font-bold text-lg sm:text-xl text-[#031538] leading-snug">{doc.titulo}</h2>
                        <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">{doc.resumo}</p>
                        <div className="mt-3 flex items-center justify-between">
                          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#0B8450]">{doc.orgao}</span>
                          <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-[0.16em] uppercase text-slate-400">
                            {isOpen ? 'Recolher' : 'Ler íntegra'}
                            <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div data-testid={`comunicado-integra-${i}`} className="border-t border-dashed border-slate-200 bg-[#FBFAF7] px-6 sm:px-7 py-6 space-y-4">
                          {doc.integra.map((p, j) => (
                            <p key={j} className="text-sm sm:text-[15px] leading-relaxed text-slate-600 font-display">{p}</p>
                          ))}
                          <p className="pt-2 font-mono text-[10px] tracking-[0.2em] uppercase text-slate-400">Publicado no Diário Oficial do Partido — PRONA / Legado</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>
        </AnimatePresence>

        <div className="mt-12 border-l-4 border-[#F1C40F] bg-white p-6 text-[13px] leading-relaxed text-slate-500 rounded-r-md">
          Os documentos deste mural são peças de ficção produzidas para a simulação política do jogo Legado, sem qualquer validade jurídica ou vínculo com instituições reais.
        </div>
      </section>
    </main>
  );
}
