# PRONA — Estatuto Geral (Legado RP)

Site do Estatuto Geral do PRONA, simulação política do jogo Legado.
Código recuperado do preview original no Emergent (`legado-prona`).

## Rodar

```bash
npm install
npm start      # dev em http://localhost:3000
npm run build  # gera build/
```

Stack: React (CRA + craco), Tailwind, React Router, Framer Motion, Lenis, lucide-react.

Rotas: `/` (estatuto), `/eneas`, `/programa`, `/comunicados`.
Conteúdo editável em `src/data/estatuto.js` e `src/data/comunicados.js`.

Como é SPA, o host precisa redirecionar todas as rotas para `index.html`.
