import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#031538] text-white mt-0">
      <div className="flag-strip" />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <img src="/prona-logo.webp" alt="PRONA" className="h-14 w-auto mb-5" />
          <p className="font-display italic text-lg text-slate-300 leading-relaxed max-w-sm">
            “Por um Brasil soberano, desenvolvido e justo.”
          </p>
          <p className="mt-4 text-xs font-mono tracking-[0.18em] uppercase text-[#F1C40F]">Partido de Reedificação da Ordem Nacional</p>
        </div>
        <div className="md:col-span-3">
          <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-slate-400 mb-4">Navegação</p>
          <ul className="space-y-2.5 text-sm">
            <li><Link data-testid="footer-link-estatuto" to="/" className="text-slate-300 hover:text-[#F1C40F] transition-colors">Estatuto Geral</Link></li>
            <li><Link data-testid="footer-link-programa" to="/programa" className="text-slate-300 hover:text-[#F1C40F] transition-colors">Programa de Governo</Link></li>
            <li><Link data-testid="footer-link-mural" to="/comunicados" className="text-slate-300 hover:text-[#F1C40F] transition-colors">Mural de Comunicados</Link></li>
            <li><Link data-testid="footer-link-eneas" to="/eneas" className="text-slate-300 hover:text-[#F1C40F] transition-colors">Biografia de Enéas Carneiro</Link></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-slate-400 mb-4">Natureza do conteúdo</p>
          <p className="text-xs leading-relaxed text-slate-400">
            Site de caráter estritamente fictício, desenvolvido para simulação política no âmbito do jogo <strong className="text-slate-200">Legado</strong>. Não possui validade jurídica nem vínculo com qualquer instituição real.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] font-mono tracking-wider text-slate-500">PRONA — LEGADO RP © 2026</p>
          <p className="text-[11px] font-mono tracking-wider text-slate-500">BRASÍLIA — DISTRITO FEDERAL</p>
        </div>
      </div>
    </footer>
  );
}
