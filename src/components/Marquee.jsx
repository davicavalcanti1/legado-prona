import { motion } from 'framer-motion';

const ITEMS = [
  'SOBERANIA NACIONAL', 'ORDEM E PROGRESSO', 'TRABALHO', 'EDUCAÇÃO', 'CIÊNCIA E TECNOLOGIA',
  'INDÚSTRIA NACIONAL', 'TRANSPARÊNCIA', 'POR UM BRASIL SOBERANO, DESENVOLVIDO E JUSTO',
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden bg-[#031538] py-4 border-y border-white/10" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center">
            {row.map((item, i) => (
              <span key={`${half}-${i}`} className="flex items-center shrink-0">
                <span className="font-display italic font-semibold text-lg sm:text-xl text-white/90 px-8 whitespace-nowrap">{item}</span>
                <motion.span className="w-2 h-2 rotate-45 bg-[#F1C40F] shrink-0" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
