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

## Deploy no Easypanel

1. Easypanel → projeto → **+ Service → App**.
2. **Source:** GitHub → `davicavalcanti1/legado-prona`, branch `main`.
3. **Build:** Dockerfile (o `Dockerfile` da raiz).
4. **Domains:** adicione o domínio e aponte para a porta **80**.
5. Deploy.

O Dockerfile faz o build do React com Node 20 e serve o `build/` com nginx
(`nginx.conf`), já com fallback de SPA, gzip, cache dos assets e `/healthz`.

Testar local:

```bash
docker build -t legado-prona .
docker run -p 8080:80 legado-prona   # http://localhost:8080
```
