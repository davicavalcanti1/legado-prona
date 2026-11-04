import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Quote } from 'lucide-react';

const FOTOS = [
  {
    id: 'congresso', span: 'md:col-span-8',
    url: 'https://images.unsplash.com/photo-1625426078245-6911839409dd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHxfHxicmFzaWxpYSUyMGFyY2hpdGVjdHVyZSUyMG5hdGlvbmFsJTIwY29uZ3Jlc3MlMjBnb3Zlcm5tZW50fGVufDB8fHx8MTc5Mzc5NDU4NXww&ixlib=rb-4.1.0&q=85',
    tag: 'CONGRESSO NACIONAL', titulo: 'O palco do mandato',
    historia: 'O Congresso Nacional, em Brasília, foi o palco do mandato de deputado federal de Enéas Carneiro (2003–2007). Ali, ele discursou em defesa da soberania, da ciência e da educação, sempre com a mesma voz firme que o tornou conhecido do Brasil inteiro.',
  },
  {
    id: 'bandeira', span: 'md:col-span-4',
    url: 'https://images.unsplash.com/photo-1527374071603-76de89807336?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHszfHxicmF6aWwlMjBmbGFnJTIwYnJhc2lsaWElMjBuYXRpb25hbCUyMGNvbmdyZXNzJTIwZGViYXRlJTIwc3BlZWNoJTIwcG9kaXVtJTIwcG9saXRpY3MlMjB2aW50YWdlJTIwYXJjaGl2ZXxlbnwwfHx8fDE3OTM3OTQ1ODJ8MA&ixlib=rb-4.1.0&q=85',
    tag: 'ORDEM E PROGRESSO', titulo: 'Símbolo da soberania',
    historia: 'A bandeira nacional era a imagem constante dos palanques de Enéas. Para ele, "Ordem e Progresso" não era apenas um lema: era um programa — ordem na administração pública e progresso pela educação e pela ciência.',
  },
  {
    id: 'imprensa', span: 'md:col-span-4',
    url: 'https://images.unsplash.com/photo-1785807047596-3f3abd23df6a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHw0fHxwcmVzcyUyMG1pY3JvcGhvbmUlMjBzcGVlY2glMjBwb2RpdW0lMjBkZWJhdGUlMjBwb2xpdGljc3xlbnwwfHx8fDE3OTM3OTQ1ODV8MA&ixlib=rb-4.1.0&q=85',
    tag: 'DEBATE PRESIDENCIAL', titulo: 'Os debates dos anos 90',
    historia: 'Nas campanhas de 1989, 1994 e 1998, Enéas enfrentou os grandes partidos nos debates televisivos, com discurso técnico e direto. Foi nesse período que o país inteiro aprendeu: "Meu nome é Enéas!".',
  },
  {
    id: 'microfone', span: 'md:col-span-4',
    url: 'https://images.unsplash.com/photo-1658310073290-ab48982d69d2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHwyfHxwcmVzcyUyMG1pY3JvcGhvbmUlMjBzcGVlY2glMjBwb2RpdW0lMjBkZWJhdGUlMjBwb2xpdGljc3xlbnwwfHx8fDE3OTM3OTQ1ODV8MA&ixlib=rb-4.1.0&q=85',
    tag: 'HORÁRIO ELEITORAL', titulo: 'Quinze segundos históricos',
    historia: 'Com apenas quinze segundos de horário eleitoral gratuito, Enéas criava frases que entravam para a cultura popular. O microfone era sua tribuna — e a palavra, sua ferramenta de transformação.',
  },
  {
    id: 'torres', span: 'md:col-span-6',
    url: 'https://images.unsplash.com/photo-1640655367482-fa9797fe1258?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHw0fHxicmFzaWxpYSUyMGFyY2hpdGVjdHVyZSUyMG5hdGlvbmFsJTIwY29uZ3Jlc3MlMjBnb3Zlcm5tZW50fGVufDB8fHx8MTc5Mzc5NDU4NXww&ixlib=rb-4.1.0&q=85',
    tag: 'BRASÍLIA', titulo: 'As torres do poder',
    historia: 'As torres gêmeas do Congresso simbolizam o centro das decisões nacionais. Enéas acreditava que aquele poder deveria servir, acima de tudo, ao povo trabalhador e ao desenvolvimento do país.',
  },
  {
    id: 'tribuna', span: 'md:col-span-6',
    url: 'https://images.unsplash.com/photo-1764874299006-bf4266427ec9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHwxfHxwcmVzcyUyMG1pY3JvcGhvbmUlMjBzcGVlY2glMjBwb2RpdW0lMjBkZWJhdGUlMjBwb2xpdGljc3xlbnwwfHx8fDE3OTM3OTQ1ODV8MA&ixlib=rb-4.1.0&q=85',
    tag: 'TRIBUNA', titulo: 'A voz que atravessou gerações',
    historia: 'Da tribuna, Enéas defendia seus projetos com dados, ciência e convicção. Seus discursos seguem circulando e inspirando novas gerações — inclusive a nossa, dentro do Legado.',
  },
];

const FRASES = [
  {
    frase: 'Meu nome é Enéas!',
    contexto: 'Bordão histórico das campanhas do PRONA no horário eleitoral de TV.',
    tag: '1989–2006 · PROPAGANDA ELEITORAL', destaque: true,
  },
  {
    frase: 'A verdade não depende do consenso da maioria; a verdade é um fato objetivo que exige estudo, ciência e coragem.',
    contexto: 'Entrevista de imprensa durante a campanha presidencial de 1994.',
    tag: '1994 · DEBATE PRESIDENCIAL', destaque: false,
  },
  {
    frase: 'Não disputo eleições por vaidade, mas por um dever moral inescapável de servir à nossa Pátria.',
    contexto: 'Manifesto de fundação do Partido de Reedificação da Ordem Nacional.',
    tag: '1989 · MANIFESTO PRONA', destaque: false,
  },
  {
    frase: 'Um país sem soberania sobre suas riquezas e sem investimento em educação é um gigante acorrentado.',
    contexto: 'Discurso na Câmara dos Deputados em defesa das riquezas nacionais.',
    tag: '2003 · CÂMARA DOS DEPUTADOS', destaque: false,
  },
];

function QuoteCard({ frase, i }) {
  return (
    <motion.figure
      data-testid={`eneas-quote-card-${i}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`relative p-6 sm:p-8 rounded-md flex flex-col justify-between ${
        frase.destaque
          ? 'bg-[#031538] text-white md:col-span-8'
          : 'bg-white border border-slate-200 md:col-span-4'
      }`}
    >
      <span className={`absolute -top-4 left-6 w-9 h-9 rounded-full flex items-center justify-center ${frase.destaque ? 'bg-[#F1C40F] text-[#031538]' : 'bg-[#0B8450] text-white'}`}>
        <Quote size={16} />
      </span>
      <blockquote className={`font-display font-black italic leading-tight mt-4 ${frase.destaque ? 'text-[clamp(1.8rem,4.5vw,3.2rem)]' : 'text-lg sm:text-xl text-[#031538]'}`}>
        “{frase.frase}”
      </blockquote>
      <figcaption className="mt-5">
        <p className={`text-xs sm:text-sm leading-relaxed ${frase.destaque ? 'text-slate-300' : 'text-slate-500'}`}>{frase.contexto}</p>
        <p className={`mt-2 font-mono text-[9px] tracking-[0.24em] uppercase ${frase.destaque ? 'text-[#F1C40F]' : 'text-[#0B8450]'}`}>[{frase.tag}]</p>
      </figcaption>
    </motion.figure>
  );
}

export default function EneasGallery() {
  const [sel, setSel] = useState(null);

  // intercala fotos e frases no bento
  const items = [
    { type: 'foto', data: FOTOS[0] },
    { type: 'frase', data: FRASES[0] },
    { type: 'foto', data: FOTOS[1] },
    { type: 'frase', data: FRASES[1] },
    { type: 'foto', data: FOTOS[2] },
    { type: 'foto', data: FOTOS[3] },
    { type: 'frase', data: FRASES[2] },
    { type: 'foto', data: FOTOS[4] },
    { type: 'foto', data: FOTOS[5] },
    { type: 'frase', data: FRASES[3] },
  ];

  return (
    <section data-testid="eneas-gallery-section" className="bg-[#031538] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}>
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#F1C40F] mb-3">Arquivo histórico</p>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">Galeria & frases históricas</h2>
          <p className="mt-4 max-w-xl text-slate-300 text-sm sm:text-base leading-relaxed">
            Imagens que evocam a trajetória de Enéas Carneiro e as palavras que ficaram para a história. Toque em uma foto para conhecer sua história.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-5">
          {items.map((item, i) =>
            item.type === 'frase' ? (
              <QuoteCard key={`frase-${i}`} frase={item.data} i={items.filter((x, j) => x.type === 'frase' && j < i).length} />
            ) : (
              <motion.button
                key={`foto-${item.data.id}`}
                data-testid={`photo-card-${item.data.id}`}
                onClick={() => setSel(item.data)}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative overflow-hidden rounded-md text-left h-64 md:h-72 ${item.data.span}`}
              >
                <img src={item.data.url} alt={item.data.titulo} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:contrast-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#031538]/90 via-[#031538]/20 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <span className="font-mono text-[9px] tracking-[0.24em] uppercase text-[#F1C40F]">[{item.data.tag}]</span>
                  <p className="font-display font-bold text-white text-lg leading-tight mt-1">{item.data.titulo}</p>
                </div>
              </motion.button>
            )
          )}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {sel && (
          <motion.div
            data-testid="photo-lightbox-modal"
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-[#031538]/90 backdrop-blur-md"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSel(null)}
          >
            <motion.figure
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 200, damping: 24 }}
              className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto bg-[#FBFAF7] rounded-md shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                data-testid="photo-lightbox-close"
                onClick={() => setSel(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#031538]/80 text-white flex items-center justify-center hover:bg-[#F1C40F] hover:text-[#031538] transition-colors"
              >
                <X size={18} />
              </button>
              <div className="relative h-64 sm:h-80">
                <img src={sel.url} alt={sel.titulo} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#031538]/85 to-transparent" />
                <div className="absolute bottom-0 p-6 sm:p-8">
                  <span className="font-mono text-[9px] tracking-[0.24em] uppercase text-[#F1C40F]">[{sel.tag}]</span>
                  <h3 className="font-display font-black text-white text-2xl sm:text-3xl mt-1">{sel.titulo}</h3>
                </div>
              </div>
              <figcaption className="p-6 sm:p-8">
                <p className="font-display text-base sm:text-lg leading-relaxed text-slate-600">{sel.historia}</p>
                <p className="mt-5 font-mono text-[9px] tracking-[0.24em] uppercase text-slate-400">ARQUIVO HISTÓRICO — HOMENAGEM EDUCATIVA · IMAGEM ILUSTRATIVA</p>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
