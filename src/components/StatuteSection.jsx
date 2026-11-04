import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, ChevronDown, Printer } from 'lucide-react';
import { PREAMBULO, TITULOS, DISPOSICOES_FINAIS, NOTA_FINAL } from '../data/estatuto';

function Hl({ text, q }) {
  if (!q) return <>{text}</>;
  const idx = text.toLowerCase().indexOf(q.toLowerCase());
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="hl">{text.slice(idx, idx + q.length)}</mark>
      {text.slice(idx + q.length)}
    </>
  );
}

function Artigo({ art, q }) {
  return (
    <article className="art" data-testid="statute-article-card">
      <span className="bd" data-testid="statute-article-badge">{art.n}</span>
      <div>
        {art.texto.map((p, i) => (
          <p key={i}><Hl text={p} q={q} /></p>
        ))}
        {art.lista && (
          <ol>
            {art.lista.map((li, i) => (
              <li key={i}><Hl text={li} q={q} /></li>
            ))}
          </ol>
        )}
      </div>
    </article>
  );
}

function artigoMatches(art, q) {
  const hay = [...art.texto, ...(art.lista || [])].join(' ').toLowerCase();
  return hay.includes(q.toLowerCase());
}

function Titulo({ titulo, q, forceOpen }) {
  const capitulos = useMemo(() => {
    if (!q) return titulo.capitulos;
    return titulo.capitulos
      .map((c) => ({ ...c, artigos: c.artigos.filter((a) => artigoMatches(a, q)) }))
      .filter((c) => c.artigos.length > 0);
  }, [titulo, q]);

  if (q && capitulos.length === 0) return null;

  return (
    <section className="tit" id={titulo.id}>
      <details className="statute-details" open={forceOpen || !!q}>
        <summary className={`th ${titulo.cor}`} data-testid={`statute-title-accordion-${titulo.id}`}>
          <span>{titulo.label}</span>
          <strong>{titulo.sub}</strong>
          <span className="chev"><ChevronDown size={16} /></span>
        </summary>
        <div className="tb">
          {capitulos.map((cap) => (
            <div className="cap" key={cap.label + cap.sub}>
              <h3><em>{cap.label}</em> {cap.sub}</h3>
              {cap.artigos.map((art) => <Artigo key={art.n} art={art} q={q} />)}
            </div>
          ))}
        </div>
      </details>
    </section>
  );
}

export default function StatuteSection() {
  const [q, setQ] = useState('');
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'start 20%'] });
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const preambuloMatches = !q || PREAMBULO.join(' ').toLowerCase().includes(q.toLowerCase());
  const finaisMatches = useMemo(
    () => DISPOSICOES_FINAIS.artigos.filter((a) => !q || artigoMatches(a, q)),
    [q]
  );

  const totalResultados = useMemo(() => {
    if (!q) return null;
    let n = finaisMatches.length;
    TITULOS.forEach((t) => t.capitulos.forEach((c) => c.artigos.forEach((a) => { if (artigoMatches(a, q)) n++; })));
    if (preambuloMatches) n++;
    return n;
  }, [q, finaisMatches, preambuloMatches]);

  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <motion.section id="estatuto" ref={ref} style={{ y, opacity }} className="max-w-5xl mx-auto px-4 sm:px-8 py-16 sm:py-24">
      <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#0B8450] mb-3">Documento institucional</p>
      <h2 className="font-display font-black text-3xl sm:text-5xl text-[#031538] tracking-tight mb-4">Texto completo</h2>
      <p className="lead">80 artigos, 11 títulos, preâmbulo e disposições finais — íntegra oficial do Estatuto Geral.</p>

      <button
        data-testid="statute-print-button"
        onClick={() => window.print()}
        className="no-print mb-8 flex items-center gap-2 bg-[#031538] text-[#F1C40F] font-mono text-[11px] font-bold tracking-[0.18em] uppercase px-6 py-3.5 rounded-sm hover:bg-[#0B8450] hover:text-white transition-colors duration-300"
      >
        <Printer size={15} />
        Imprimir / Salvar PDF
      </button>

      <div className="no-print sticky top-20 z-30 mb-10 flex items-center gap-3 bg-white/90 backdrop-blur-md border border-slate-200 rounded-md px-4 py-3 shadow-sm">
        <Search size={18} className="text-[#0B8450] shrink-0" />
        <input
          id="q"
          data-testid="statute-search-input"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar no estatuto (ex.: soberania, filiação, contas)…"
          aria-label="Buscar no estatuto"
          className="w-full bg-transparent outline-none text-sm placeholder:text-slate-400"
        />
        <div data-testid="statute-search-count" className="shrink-0 font-mono text-[10px] tracking-wider text-slate-500">
          {q && totalResultados !== null ? `${totalResultados} RESULTADO${totalResultados === 1 ? '' : 'S'}` : ''}
        </div>
      </div>

      <div className="space-y-8">
        {preambuloMatches && (
          <section className="tit" id="t0">
            <details className="statute-details" open>
              <summary className="th g" data-testid="statute-title-accordion-t0">
                <span>PREÂMBULO</span>
                <strong>Nossas referências</strong>
                <span className="chev"><ChevronDown size={16} /></span>
              </summary>
              <div className="tb">
                {PREAMBULO.map((p, i) => (
                  <p className="pr" key={i}>
                    {p.startsWith('**') ? <b>{p.replaceAll('**', '')}</b> : <Hl text={p} q={q} />}
                  </p>
                ))}
              </div>
            </details>
          </section>
        )}

        {TITULOS.map((t) => <Titulo key={t.id} titulo={t} q={q} forceOpen />)}

        {finaisMatches.length > 0 && (
          <section className="tit" id="t12">
            <details className="statute-details" open>
              <summary className="th g" data-testid="statute-title-accordion-t12">
                <span>DISPOSIÇÕES</span>
                <strong>Finais</strong>
                <span className="chev"><ChevronDown size={16} /></span>
              </summary>
              <div className="tb">
                <div className="cap">
                  {finaisMatches.map((art) => <Artigo key={art.n} art={art} q={q} />)}
                  <p className="pr mt-6"><b>Presidente Nacional</b></p>
                  <p className="pr"><b>Secretário-Geral</b></p>
                  <p className="pr"><b>Tesoureiro Nacional</b></p>
                </div>
                <div className="sig">
                  <p>Brasília – Distrito Federal, ____ de ______________ de 2026.</p>
                  <hr /><hr /><hr />
                </div>
              </div>
            </details>
          </section>
        )}
      </div>

      <div data-testid="statute-note" className="mt-12 border-l-4 border-[#F1C40F] bg-white p-6 text-[13px] leading-relaxed text-slate-500 rounded-r-md">
        {NOTA_FINAL}
      </div>
    </motion.section>
  );
}
