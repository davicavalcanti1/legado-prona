import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, Factory, HeartPulse, ShieldCheck, TrainFront, Leaf, Landmark, Users } from 'lucide-react';
import Marquee from '../components/Marquee';

const EIXOS = [
  {
    icon: GraduationCap, cor: 'bg-[#062C6E] text-white',
    titulo: 'Educação, Ciência e Tecnologia',
    propostas: [
      'Universalizar o acesso à educação de qualidade, da alfabetização à formação técnica e superior.',
      'Criar o programa nacional de bolsas de pesquisa científica para jovens talentos do Legado.',
      'Investir em laboratórios, institutos de tecnologia e ensino profissionalizante em todas as regiões.',
      'Valorizar os professores com plano de carreira, formação continuada e salários dignos.',
    ],
  },
  {
    icon: Factory, cor: 'bg-[#F1C40F] text-[#031538]',
    titulo: 'Economia, Indústria e Trabalho',
    propostas: [
      'Fortalecer a indústria nacional com incentivos à produção local e à inovação tecnológica.',
      'Garantir a independência econômica e energética do país, reduzindo dependências externas.',
      'Apoiar o pequeno e médio empreendedor com crédito facilitado e desburocratização.',
      'Gerar empregos por meio de grandes obras de infraestrutura e qualificação profissional.',
    ],
  },
  {
    icon: HeartPulse, cor: 'bg-[#0B8450] text-white',
    titulo: 'Saúde Pública',
    propostas: [
      'Ampliar a rede pública de hospitais e postos de saúde em todas as cidades do Legado.',
      'Criar o programa nacional de produção de medicamentos essenciais.',
      'Investir em prevenção, campanhas de vacinação e saúde mental da população.',
      'Formar e fixar médicos e profissionais de saúde nas regiões mais carentes.',
    ],
  },
  {
    icon: ShieldCheck, cor: 'bg-[#062C6E] text-white',
    titulo: 'Segurança e Ordem',
    propostas: [
      'Fortalecer as instituições de segurança pública com equipamentos, treinamento e inteligência.',
      'Combater a corrupção e o crime organizado com rigor, dentro do Estado de Direito.',
      'Investir na prevenção social: educação, esporte e oportunidades para a juventude.',
      'Modernizar o sistema de justiça para dar celeridade e transparência aos processos.',
    ],
  },
  {
    icon: TrainFront, cor: 'bg-[#F1C40F] text-[#031538]',
    titulo: 'Infraestrutura e Logística',
    propostas: [
      'Construir e recuperar estradas, ferrovias e portos para integrar as regiões do país.',
      'Garantir segurança energética com matriz diversificada e investimento em tecnologia nacional.',
      'Universalizar o acesso à internet de qualidade como ferramenta de educação e trabalho.',
      'Planejar o crescimento urbano com moradia digna, saneamento e transporte público.',
    ],
  },
  {
    icon: Leaf, cor: 'bg-[#0B8450] text-white',
    titulo: 'Meio Ambiente e Recursos Naturais',
    propostas: [
      'Proteger os biomas nacionais e fiscalizar o uso responsável dos recursos naturais.',
      'Promover o desenvolvimento sustentável unindo produção, emprego e preservação.',
      'Investir em energias limpas e na pesquisa científica ambiental.',
      'Recuperar áreas degradadas e proteger as bacias hidrográficas do país.',
    ],
  },
  {
    icon: Landmark, cor: 'bg-[#062C6E] text-white',
    titulo: 'Administração Pública e Transparência',
    propostas: [
      'Publicar todas as contas e decisões da administração em portal permanente de transparência.',
      'Combater a corrupção com responsabilidade administrativa e gestão por resultados.',
      'Simplificar a máquina pública, cortando desperdícios e valorizando o servidor eficiente.',
      'Garantir prestação de contas periódica aos órgãos de fiscalização e à sociedade.',
    ],
  },
  {
    icon: Users, cor: 'bg-[#F1C40F] text-[#031538]',
    titulo: 'Cultura, Cidadania e Juventude',
    propostas: [
      'Fomentar a cultura nacional, a história e a identidade do povo do Legado.',
      'Criar o programa de formação cidadã e política para jovens em todo o país.',
      'Apoiar o esporte como instrumento de educação, saúde e inclusão social.',
      'Estimular a participação popular nas decisões públicas e o debate fundamentado.',
    ],
  },
];

export default function ProgramaPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 130]);

  return (
    <main data-testid="programa-page">
      <section ref={heroRef} data-testid="programa-hero" className="relative min-h-[75vh] flex items-end bg-[#031538] overflow-hidden">
        <motion.div style={{ y: yBg }} className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1527374071603-76de89807336?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHw0fHxicmF6aWwlMjBwb2xpdGljcyUyMGNvbmdyZXNzJTIwY29uc3RpdHV0aW9uJTIwaGlzdG9yeXxlbnwwfHx8fDE3OTM3OTI5MTl8MA&ixlib=rb-4.1.0&q=85"
            alt=""
            className="w-full h-[120%] object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#031538] via-[#031538]/60 to-[#031538]/70" />
        </motion.div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full pb-16 pt-36">
          <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="font-mono text-[10px] sm:text-xs tracking-[0.34em] uppercase text-[#F1C40F] mb-5">
            Deliberação Nº 006/2026 — Eleições do Legado
          </motion.p>
          <h1 className="font-display font-black text-white leading-[0.98] tracking-tight text-[clamp(2.4rem,6.5vw,5.2rem)]">
            <span className="mask-line"><motion.span initial={{ y: '115%' }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}>Programa de</motion.span></span>
            <span className="mask-line text-[#F1C40F]"><motion.span initial={{ y: '115%' }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>Governo</motion.span></span>
          </h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }} className="mt-6 max-w-2xl text-slate-300 text-base sm:text-lg leading-relaxed">
            Oito eixos, um compromisso: por um Brasil soberano, desenvolvido e justo. As propostas oficiais do PRONA para o futuro do Legado.
          </motion.p>
        </div>
      </section>

      <Marquee />

      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}>
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#0B8450] mb-3">Eixos programáticos</p>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#031538] tracking-tight">O que o PRONA propõe</h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {EIXOS.map((eixo, i) => {
            const Icon = eixo.icon;
            return (
              <motion.article
                key={eixo.titulo}
                data-testid={`programa-pilar-${i}`}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white border border-slate-200 rounded-md overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`flex items-center gap-4 px-6 py-5 ${eixo.cor}`}>
                  <span className="w-10 h-10 rounded-sm bg-white/15 flex items-center justify-center shrink-0">
                    <Icon size={19} />
                  </span>
                  <div>
                    <span className="font-mono text-[9px] tracking-[0.28em] uppercase opacity-70">Eixo 0{i + 1}</span>
                    <h3 className="font-display font-bold text-lg sm:text-xl leading-tight">{eixo.titulo}</h3>
                  </div>
                </div>
                <ul className="px-6 py-5 space-y-3">
                  {eixo.propostas.map((p, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                      <span className="shrink-0 mt-[7px] w-1.5 h-1.5 rotate-45 bg-[#0B8450]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="bg-[#0B8450]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-16 sm:py-20 text-center">
          <h2 className="font-display font-black text-white text-3xl sm:text-4xl tracking-tight">Junte-se à reedificação da ordem nacional</h2>
          <p className="mt-4 text-white/85 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Confira se você preenche os requisitos de filiação e faça parte da construção deste programa.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              state={{ scrollTo: 'filiacao' }}
              data-testid="programa-cta-filiacao"
              className="bg-[#F1C40F] text-[#031538] font-mono text-xs font-bold tracking-[0.2em] uppercase px-8 py-4 rounded-sm hover:bg-white transition-colors duration-300"
            >
              Verificar filiação
            </Link>
            <Link
              to="/"
              state={{ scrollTo: 'estatuto' }}
              data-testid="programa-cta-estatuto"
              className="border border-white/40 text-white font-mono text-xs font-bold tracking-[0.2em] uppercase px-8 py-4 rounded-sm hover:border-[#F1C40F] hover:text-[#F1C40F] transition-colors duration-300"
            >
              Ler o estatuto
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
