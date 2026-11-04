import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert } from 'lucide-react';
import { COMUNICADO } from '../data/estatuto';

function renderBold(text) {
  return text.split('**').map((part, i) =>
    i % 2 === 1 ? <strong key={i} className="text-[#031538] font-bold">{part}</strong> : part
  );
}

export default function ComunicadoModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          data-testid="comunicado-modal-overlay"
          className="no-print fixed inset-0 z-[200] flex items-center justify-center p-4 bg-[#031538]/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <motion.div
            data-testid="comunicado-modal-container"
            className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto bg-[#FBFAF7] rounded-lg shadow-2xl"
            initial={{ opacity: 0, y: 48, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 210, damping: 24 }}
          >
            <div className="flag-strip sticky top-0 z-10" />
            <div className="p-6 sm:p-10">
              <div className="flex items-start justify-between gap-6 mb-2">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#0B8450] mb-3">República do Legado — Documento Público</p>
                  <h2 data-testid="comunicado-modal-title" className="font-display font-black text-2xl sm:text-3xl text-[#031538] leading-tight">
                    {COMUNICADO.titulo}
                  </h2>
                  <p className="font-display italic text-[#062C6E] text-base sm:text-lg mt-1">{COMUNICADO.subtitulo}</p>
                </div>
                <div className="shrink-0 w-12 h-12 rounded-full bg-[#062C6E] text-[#F1C40F] flex items-center justify-center">
                  <ShieldAlert size={22} />
                </div>
              </div>
              <div className="w-16 h-[3px] bg-[#F1C40F] my-6" />
              <div className="space-y-4">
                {COMUNICADO.paragrafos.map((p, i) => (
                  <p key={i} className="text-sm sm:text-[15px] leading-relaxed text-slate-600">{renderBold(p)}</p>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <img src="/prona-logo.webp" alt="PRONA" className="h-10 w-auto opacity-90" />
                <button
                  data-testid="comunicado-modal-confirm-button"
                  onClick={onClose}
                  className="group relative overflow-hidden bg-[#0B8450] text-white font-mono text-xs font-bold tracking-[0.2em] uppercase px-8 py-4 rounded-sm transition-transform duration-300 hover:scale-[1.03] active:scale-95"
                >
                  <span className="relative z-10">Estou ciente</span>
                  <span className="absolute inset-0 bg-[#031538] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </button>
              </div>
            </div>
            <div className="flag-strip sticky bottom-0" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
