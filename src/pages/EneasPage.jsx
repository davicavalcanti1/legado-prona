import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Quote, GraduationCap, Stethoscope, Landmark, Flag, Mic } from 'lucide-react';
import Marquee from '../components/Marquee';
import EneasGallery from '../components/EneasGallery';

const TIMELINE = [
  { ano: '1938', titulo: 'Nasce Enéas Ferreira Carneiro', texto: 'Nascido em Rio Branco, no Acre, filho de família humilde. Perdeu o pai aos 9 anos e, desde cedo, trabalhou para sustentar os estudos — origem que marcaria para sempre seu discurso em defesa do povo trabalhador.', icon: Flag },
  { ano: '1959', titulo: 'Formação em Medicina', texto: 'Ingressou na Faculdade de Medicina do Rio de Janeiro, financiando o curso com o próprio trabalho. Formou-se médico e especializou-se em cardiologia, passando em concorridas provas de título.', icon: Stethoscope },
  { ano: '1965–1985', titulo: 'Carreira acadêmica e científica', texto: 'Tornou-se professor de cardiologia, publicou dezenas de trabalhos científicos no Brasil e no exterior e exerceu cargos em sociedades médicas. Também estudou matemática e física por vocação intelectual.', icon: GraduationCap },
  { ano: '1989', titulo: 'Funda o PRONA e disputa a Presidência', texto: 'Fundou o Partido de Reedificação da Ordem Nacional e lançou-se candidato à Presidência da República na primeira eleição direta após a redemocratização, com o lema da soberania nacional.', icon: Landmark },
  { ano: '1994', titulo: '“Meu nome é Enéas!”', texto: 'Na campanha presidencial de 1994, sua saudação de abertura no horário eleitoral — “Meu nome é Enéas!” — tornou-se um dos bordões mais lembrados da história política e da cultura popular brasileira.', icon: Mic },
  { ano: '2002', titulo: 'Deputado federal mais votado do Brasil', texto: 'Elegeu-se deputado federal por São Paulo com cerca de 1,57 milhão de votos — na época, a maior votação nominal já registrada para o cargo no país. No Congresso, defendeu ciência, educação e indústria nacional.', icon: Landmark },
  { ano: '2007', titulo: 'Legado', texto: 'Faleceu em 6 de maio de 2007, no Rio de Janeiro, em pleno exercício do mandato. Deixou como legado a defesa intransigente da soberania, da educação e do desenvolvimento científico e tecnológico nacional.', icon: Quote },
];

const IDEIAS = [
  { t: 'Soberania nacional', d: 'Defesa intransigente da autonomia decisória do Brasil, de suas riquezas e de seu território.' },
  { t: 'Educação e ciência', d: 'A educação de qualidade e a pesquisa científica como fundamentos do desenvolvimento do país.' },
  { t: 'Indústria nacional', d: 'Fortalecimento da capacidade produtiva e tecnológica brasileira, gerando trabalho e renda.' },
  { t: 'Valorização do trabalho', d: 'Respeito ao trabalhador e ao empreendedor, motores verdadeiros da construção nacional.' },
];

function SectionTitle({ eyebrow, title }) {
  return (
    <div>
      <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#0B8450] mb-3">{eyebrow}</p>
      <h2 className="font-display font-black text-3xl sm:text-5xl text-[#031538] tracking-tight">{title}</h2>
    </div>
  );
}

export default function EneasPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const quoteRef = useRef(null);
  const quoteInView = useInView(quoteRef, { once: true, margin: '-100px' });

  return (
    <main>
      {/* HERO */}
      <section ref={heroRef} data-testid="eneas-bio-hero" className="relative min-h-[80vh] flex items-end bg-[#031538] overflow-hidden">
        <motion.div style={{ y: yBg }} className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1527374071603-76de89807336?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHw0fHxicmF6aWwlMjBwb2xpdGljcyUyMGNvbmdyZXNzJTIwY29uc3RpdHV0aW9uJTIwaGlzdG9yeXxlbnwwfHx8fDE3OTM3OTI5MTl8MA&ixlib=rb-4.1.0&q=85"
            alt=""
            className="w-full h-[120%] object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#031538] via-[#031538]/60 to-[#031538]/70" />
        </motion.div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full pb-16 pt-36">
          <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="font-mono text-[10px] sm:text-xs tracking-[0.34em] uppercase text-[#F1C40F] mb-6">
            1938 — 2007 · Fundador do PRONA
          </motion.p>
          <h1 className="font-display font-black text-white leading-[0.98] tracking-tight text-[clamp(2.4rem,7vw,5.6rem)]">
            <span className="mask-line"><motion.span initial={{ y: '115%' }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>Dr. Enéas Ferreira</motion.span></span>
            <span className="mask-line text-[#F1C40F]"><motion.span initial={{ y: '115%' }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}>Carneiro</motion.span></span>
          </h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="mt-6 max-w-2xl text-slate-300 text-base sm:text-lg leading-relaxed">
            Médico cardiologista, professor, cientista e político. Fundador do Partido de Reedificação da Ordem Nacional e autor de uma das vozes mais marcantes da história política brasileira — homenageado como inspiração histórica do nosso PRONA no Legado.
          </motion.p>
        </div>
      </section>

      {/* QUOTE BANNER */}
      <section ref={quoteRef} data-testid="eneas-quote-banner" className="relative bg-[#0B8450] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1710360683896-e0506fb3579a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHszfHxwb2xpdGljYWwlMjBzcGVlY2glMjBwb2RpdW0lMjBtaWNyb3Bob25lfGVufDB8fHx8MTc5Mzc5MjkyMnww&ixlib=rb-4.1.0&q=85" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-8 py-20 sm:py-28 text-center">
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.94 }}
            animate={quoteInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black italic text-white text-[clamp(2rem,6vw,4.5rem)] leading-tight tracking-tight"
          >
            “Meu nome é <span className="text-[#F1C40F]">Enéas</span>!”
          </motion.blockquote>
          <motion.p initial={{ opacity: 0 }} animate={quoteInView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.4 }} className="mt-6 font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase text-white/80">
            A saudação que entrou para a história — campanha presidencial de 1994
          </motion.p>
        </div>
      </section>

      <Marquee />

      {/* BIOGRAFIA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 py-16 sm:py-24">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}>
          <SectionTitle eyebrow="Biografia" title="Do Acre à história do Brasil" />
        </motion.div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-[15px] leading-relaxed text-slate-600">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="space-y-4">
            <p><strong className="text-[#031538]">Enéas Ferreira Carneiro</strong> nasceu em 5 de novembro de 1938, em Rio Branco, capital do Acre. Filho de uma família humilde, perdeu o pai ainda criança e precisou conciliar estudo e trabalho desde cedo — experiência que moldou seu caráter disciplinado e sua admiração pelo povo trabalhador brasileiro.</p>
            <p>Formou-se em <strong className="text-[#031538]">Medicina</strong>, especializou-se em cardiologia e construiu uma respeitada carreira científica e acadêmica, com trabalhos publicados no Brasil e no exterior e aprovação em renomados concursos de título universitário.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="space-y-4">
            <p>Em <strong className="text-[#031538]">1989</strong>, insatisfeito com os rumos da política nacional, fundou o <strong className="text-[#031538]">Partido de Reedificação da Ordem Nacional — PRONA</strong>, pelo qual disputou três eleições presidenciais (1989, 1994 e 1998), sempre em defesa da soberania, da educação e da ciência.</p>
            <p>Em <strong className="text-[#031538]">2002</strong>, foi eleito deputado federal por São Paulo com cerca de <strong className="text-[#031538]">1,57 milhão de votos</strong>, recorde histórico à época. Faleceu em 2007, em pleno mandato, deixando um legado que atravessa gerações — inclusive a nossa, dentro do Legado.</p>
          </motion.div>
        </div>
      </section>

      {/* IDEIAS */}
      <section className="bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}>
            <SectionTitle eyebrow="Pensamento" title="As bandeiras de Enéas" />
          </motion.div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {IDEIAS.map((idea, i) => (
              <motion.div
                key={idea.t}
                data-testid={`eneas-ideia-card-${i}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`group p-6 rounded-md border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${i % 3 === 0 ? 'bg-[#062C6E] border-transparent text-white' : i % 3 === 1 ? 'bg-[#F1C40F] border-transparent text-[#031538]' : 'bg-[#0B8450] border-transparent text-white'}`}
              >
                <span className="font-mono text-[10px] tracking-[0.28em] uppercase opacity-70">0{i + 1}</span>
                <h3 className="font-display font-bold text-xl mt-3 mb-2">{idea.t}</h3>
                <p className="text-sm leading-relaxed opacity-90">{idea.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA & FRASES */}
      <EneasGallery />

      {/* TIMELINE */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 py-16 sm:py-24">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}>
          <SectionTitle eyebrow="Trajetória" title="Linha do tempo" />
        </motion.div>
        <div data-testid="eneas-timeline-list" className="mt-14 relative">
          <div className="absolute left-[19px] sm:left-[23px] top-2 bottom-2 w-px bg-gradient-to-b from-[#0B8450] via-[#F1C40F] to-[#062C6E]" />
          <div className="space-y-12">
            {TIMELINE.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.ano + item.titulo}
                  data-testid={`eneas-timeline-item-${i}`}
                  initial={{ opacity: 0, x: -32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.65, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-16 sm:pl-20"
                >
                  <div className={`absolute left-0 top-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ${i % 2 === 0 ? 'bg-[#062C6E] text-[#F1C40F]' : 'bg-[#0B8450] text-white'} shadow-lg`}>
                    <Icon size={18} />
                  </div>
                  <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#0B8450]">{item.ano}</span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#031538] mt-1 mb-2">{item.titulo}</h3>
                  <p className="text-sm sm:text-[15px] leading-relaxed text-slate-600 max-w-2xl">{item.texto}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 border-l-4 border-[#F1C40F] bg-white p-6 text-[13px] leading-relaxed text-slate-500 rounded-r-md"
        >
          Esta página é uma homenagem histórica e educativa no contexto de simulação do jogo Legado. O PRONA deste site é uma organização fictícia inspirada no partido real fundado por Enéas Carneiro, sem qualquer vínculo oficial com instituições do mundo real.
        </motion.div>
      </section>
    </main>
  );
}
