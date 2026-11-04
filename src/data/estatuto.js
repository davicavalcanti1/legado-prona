// Conteúdo integral do Estatuto Geral do PRONA (LegadoRP) — fiel ao documento original
export const ORGAOS = [
  { nome: 'Convenção Nacional', cor: '#062c6e', w: '94%', info: 'Instância máxima de deliberação partidária. Delibera sobre diretrizes gerais e programa, elege ou homologa os órgãos nacionais, aprecia alterações estatutárias, delibera sobre estratégias eleitorais de âmbito nacional e examina relatórios gerais de atividades e administração (Arts. 19 a 21).' },
  { nome: 'Diretório Nacional', cor: '#0b8450', w: '86%', info: 'Órgão colegiado responsável pela direção política e administrativa nacional entre as Convenções. Executa as deliberações da Convenção, aprova planos nacionais, coordena a implantação dos órgãos estaduais e municipais e aprova regulamentos internos (Arts. 22 a 24).' },
  { nome: 'Comissão Executiva Nacional', cor: '#062c6e', w: '78%', info: 'Exerce a administração cotidiana do partido e executa as decisões do Diretório Nacional. Composta, no mínimo, por Presidente, Vice-Presidente, Secretário-Geral e Tesoureiro (Arts. 25 a 29).' },
  { nome: 'Conselho Fiscal e Conselho de Ética', cor: '#0b8450', w: '70%', info: 'O Conselho Fiscal Nacional examina a movimentação financeira e patrimonial, emitindo pareceres periódicos sobre as contas. O Conselho de Ética e Disciplina aprecia representações internas, assegurados contraditório, ampla defesa, imparcialidade e decisão fundamentada (Arts. 30 e 31).' },
  { nome: 'Diretórios Estaduais', cor: '#062c6e', w: '62%', info: 'Coordenam a atuação partidária em suas unidades da Federação, organizam os órgãos municipais, promovem formação política, acompanham a atuação dos filiados e apresentam relatórios à Direção Nacional (Arts. 32 a 34).' },
  { nome: 'Diretórios Municipais', cor: '#0b8450', w: '54%', info: 'Organizam a atuação do partido nos municípios, promovem reuniões e atividades públicas, mantêm atualizados os registros partidários e encaminham propostas às instâncias superiores (Arts. 35 a 37).' },
];

export const PREAMBULO = [
  'O Partido de Reedificação da Ordem Nacional, identificado pela sigla PRONA, estabelece o presente Estatuto como instrumento de organização, orientação, administração e disciplina de suas atividades políticas e institucionais.',
  'O PRONA afirma como referências a soberania nacional, a independência econômica e tecnológica, o desenvolvimento científico, a valorização do trabalho, a preservação ambiental, a educação, a integridade da administração pública e o fortalecimento das instituições republicanas.',
  'O presente Estatuto disciplina a estrutura partidária, os direitos e deveres de seus integrantes, a composição dos órgãos de direção, os procedimentos internos e as normas de funcionamento, observados a Constituição Federal e a legislação aplicável.',
  '**Por um Brasil soberano, desenvolvido e justo.**',
];

export const TITULOS = [
  {
    id: 't1', label: 'TÍTULO I', sub: 'Da denominação, identidade e princípios fundamentais', cor: 'b',
    capitulos: [
      { label: 'CAPÍTULO I', sub: 'Da identificação', artigos: [
        { n: 'Art. 1º', texto: ['O Partido de Reedificação da Ordem Nacional, doravante denominado PRONA, constitui organização partidária de caráter nacional, regida por seu programa, por este Estatuto e pela legislação brasileira.'] },
        { n: 'Art. 2º', texto: ['A sigla oficial do partido é PRONA, e sua denominação por extenso é Partido de Reedificação da Ordem Nacional.'] },
        { n: 'Art. 3º', texto: ['A sede nacional será estabelecida no território brasileiro, em endereço definido e registrado pela instância nacional competente.'] },
        { n: 'Art. 4º', texto: ['A identidade visual, o símbolo, a bandeira, as cores e os demais elementos institucionais serão aprovados pela Direção Nacional e descritos em regulamento próprio.'] },
        { n: 'Art. 5º', texto: ['O partido terá duração por prazo indeterminado e atuação em todo o território nacional, observadas as exigências legais para seu funcionamento.'] },
      ]},
      { label: 'CAPÍTULO II', sub: 'Dos princípios fundamentais', artigos: [
        { n: 'Art. 6º', texto: ['Constituem princípios fundamentais do PRONA:'], lista: ['A defesa da soberania nacional e da autonomia decisória do Brasil;', 'A independência econômica, científica, tecnológica e energética;', 'O fortalecimento da indústria nacional, da infraestrutura e da capacidade produtiva;', 'A valorização do trabalho, do empreendedorismo e da qualificação profissional;', 'A promoção da educação, da ciência, da pesquisa e da inovação;', 'A proteção do meio ambiente e o uso responsável dos recursos naturais;', 'A defesa da Constituição, do Estado de Direito e das instituições republicanas;', 'A transparência, a responsabilidade administrativa e o combate à corrupção;', 'A redução das desigualdades regionais e a promoção do desenvolvimento nacional.'] },
        { n: 'Art. 7º', texto: ['A atuação partidária deverá respeitar o pluralismo político, a dignidade da pessoa humana, a liberdade de consciência e os direitos e garantias fundamentais.'] },
        { n: 'Art. 8º', texto: ['Nenhuma orientação interna poderá contrariar a Constituição Federal, a legislação vigente ou os direitos fundamentais.'] },
      ]},
    ],
  },
  {
    id: 't2', label: 'TÍTULO II', sub: 'Dos objetivos políticos e institucionais', cor: 'y',
    capitulos: [
      { label: 'CAPÍTULO I', sub: 'Dos objetivos nacionais', artigos: [
        { n: 'Art. 9º', texto: ['São objetivos do PRONA:'], lista: ['Contribuir para o desenvolvimento econômico e social do Brasil;', 'Estimular a produção nacional, a inovação e a geração de empregos;', 'Defender políticas públicas de educação, saúde, ciência e tecnologia;', 'Promover a integração econômica e social das regiões brasileiras;', 'Fortalecer a infraestrutura, a logística e a segurança energética;', 'Valorizar a agricultura, a indústria, o comércio e os serviços;', 'Proteger os biomas brasileiros e incentivar o desenvolvimento sustentável;', 'Estimular a participação cidadã e a formação de lideranças públicas.'] },
        { n: 'Art. 10º', texto: ['O partido poderá apresentar programas, propostas legislativas, estudos e iniciativas públicas compatíveis com seus princípios e com a legislação.'] },
      ]},
      { label: 'CAPÍTULO II', sub: 'Da atuação institucional', artigos: [
        { n: 'Art. 11º', texto: ['O PRONA poderá atuar por meio de seus órgãos partidários, representantes eleitos, núcleos temáticos, atividades de formação, debates públicos e participação nos processos democráticos.'] },
        { n: 'Art. 12º', texto: ['As alianças, federações, coligações quando legalmente admitidas e demais formas de cooperação dependerão de deliberação do órgão competente, observadas as normas legais e estatutárias.'] },
      ]},
    ],
  },
  {
    id: 't3', label: 'TÍTULO III', sub: 'Da organização partidária', cor: 'g',
    capitulos: [
      { label: 'CAPÍTULO I', sub: 'Da estrutura', artigos: [
        { n: 'Art. 13º', texto: ['A organização partidária compreende, conforme sua implantação e as exigências legais, os seguintes órgãos:'], lista: ['Convenção Nacional;', 'Diretório Nacional;', 'Comissão Executiva Nacional;', 'Conselho Fiscal Nacional;', 'Conselho de Ética e Disciplina;', 'Diretórios Estaduais;', 'Diretórios Municipais;', 'Comissões Provisórias;', 'Secretarias e núcleos temáticos;', 'Organização Nacional da Juventude, quando instituída.'] },
        { n: 'Art. 14º', texto: ['Os órgãos partidários atuarão de forma coordenada, respeitando suas competências, a autonomia das instâncias e as deliberações regularmente aprovadas.'] },
        { n: 'Art. 15º', texto: ['A composição, o funcionamento, os mandatos e os procedimentos de cada órgão serão detalhados neste Estatuto e em regimentos internos.'] },
      ]},
      { label: 'CAPÍTULO II', sub: 'Da democracia interna', artigos: [
        { n: 'Art. 16º', texto: ['As decisões partidárias serão tomadas por procedimentos transparentes, com convocação prévia, pauta definida, registro das deliberações e respeito ao direito de manifestação.'] },
        { n: 'Art. 17º', texto: ['As divergências internas poderão ser apresentadas nos espaços partidários próprios, vedadas práticas de intimidação, discriminação ou retaliação.'] },
        { n: 'Art. 18º', texto: ['As reuniões poderão ocorrer presencialmente ou por meios eletrônicos que permitam identificação dos participantes, registro dos votos e preservação da integridade das decisões.'] },
      ]},
    ],
  },
  {
    id: 't4', label: 'TÍTULO IV', sub: 'Da convenção e dos órgãos nacionais', cor: 'b',
    capitulos: [
      { label: 'CAPÍTULO I', sub: 'Da convenção nacional', artigos: [
        { n: 'Art. 19º', texto: ['A Convenção Nacional é a instância máxima de deliberação partidária, nos limites da legislação e deste Estatuto.'] },
        { n: 'Art. 20º', texto: ['Compete à Convenção Nacional:'], lista: ['Deliberar sobre diretrizes gerais e programa partidário;', 'Eleger ou homologar, conforme o processo interno, os órgãos nacionais;', 'Apreciar propostas de alteração estatutária;', 'Deliberar sobre estratégias eleitorais de âmbito nacional;', 'Examinar relatórios gerais de atividades e administração.'] },
        { n: 'Art. 21º', texto: ['A convocação da Convenção deverá indicar data, horário, local ou plataforma, pauta e regras de participação, respeitados os prazos legais e estatutários.'] },
      ]},
      { label: 'CAPÍTULO II', sub: 'Do diretório nacional', artigos: [
        { n: 'Art. 22º', texto: ['O Diretório Nacional é o órgão colegiado responsável pela direção política e administrativa nacional entre as Convenções.'] },
        { n: 'Art. 23º', texto: ['Compete ao Diretório Nacional:'], lista: ['Executar as deliberações da Convenção Nacional;', 'Aprovar planos nacionais de atuação e organização;', 'Coordenar a implantação dos órgãos estaduais e municipais;', 'Apreciar relatórios financeiros e administrativos;', 'Convocar reuniões e convenções nos termos deste Estatuto;', 'Aprovar regulamentos internos e designar comissões.'] },
        { n: 'Art. 24º', texto: ['O Diretório Nacional reunir-se-á ordinariamente conforme calendário aprovado e extraordinariamente quando convocado na forma regimental.'] },
      ]},
      { label: 'CAPÍTULO III', sub: 'Da comissão executiva nacional', artigos: [
        { n: 'Art. 25º', texto: ['A Comissão Executiva Nacional exercerá a administração cotidiana do partido e executará as decisões do Diretório Nacional.'] },
        { n: 'Art. 26º', texto: ['A Comissão Executiva Nacional será composta, no mínimo, por Presidente, Vice-Presidente, Secretário-Geral e Tesoureiro, podendo o regimento prever outras funções.'] },
        { n: 'Art. 27º', texto: ['Compete à Presidência Nacional representar institucionalmente o partido, convocar e presidir reuniões, supervisionar a execução das deliberações e exercer as atribuições previstas neste Estatuto.'] },
        { n: 'Art. 28º', texto: ['Compete à Secretaria-Geral organizar atas, arquivos, cadastros, comunicações oficiais e a documentação dos órgãos nacionais.'] },
        { n: 'Art. 29º', texto: ['Compete à Tesouraria acompanhar receitas e despesas, manter registros contábeis e apresentar demonstrativos aos órgãos competentes.'] },
      ]},
      { label: 'CAPÍTULO IV', sub: 'Dos órgãos de controle', artigos: [
        { n: 'Art. 30º', texto: ['O Conselho Fiscal Nacional examinará a movimentação financeira e patrimonial, emitindo pareceres periódicos sobre as contas.'] },
        { n: 'Art. 31º', texto: ['O Conselho de Ética e Disciplina apreciará representações internas, assegurados contraditório, ampla defesa, imparcialidade e decisão fundamentada.'] },
      ]},
    ],
  },
  {
    id: 't5', label: 'TÍTULO V', sub: 'Dos diretórios estaduais e municipais', cor: 'y',
    capitulos: [
      { label: 'CAPÍTULO I', sub: 'Dos diretórios estaduais', artigos: [
        { n: 'Art. 32º', texto: ['Os Diretórios Estaduais coordenarão a atuação partidária em suas respectivas unidades da Federação, em consonância com as diretrizes nacionais.'] },
        { n: 'Art. 33º', texto: ['Compete aos Diretórios Estaduais organizar os órgãos municipais, promover formação política, acompanhar a atuação dos filiados e apresentar relatórios à Direção Nacional.'] },
        { n: 'Art. 34º', texto: ['Os Diretórios Estaduais poderão constituir secretarias temáticas e comissões de trabalho, observadas as normas nacionais.'] },
      ]},
      { label: 'CAPÍTULO II', sub: 'Dos diretórios municipais', artigos: [
        { n: 'Art. 35º', texto: ['Os Diretórios Municipais organizarão a atuação do partido nos municípios, promoverão reuniões e atividades públicas e manterão atualizados os registros partidários.'] },
        { n: 'Art. 36º', texto: ['Compete aos Diretórios Municipais encaminhar propostas às instâncias superiores, acompanhar a realidade local e cumprir as deliberações regularmente aprovadas.'] },
        { n: 'Art. 37º', texto: ['Onde não houver diretório constituído, poderá ser instalada comissão provisória, nos termos da legislação e das normas partidárias.'] },
      ]},
    ],
  },
  {
    id: 't6', label: 'TÍTULO VI', sub: 'Da filiação, dos direitos e dos deveres', cor: 'g',
    capitulos: [
      { label: 'CAPÍTULO I', sub: 'Da filiação partidária', artigos: [
        { n: 'Art. 38º', texto: ['A filiação será individual e voluntária, condicionada ao atendimento dos requisitos previstos na legislação eleitoral e partidária.'] },
        { n: 'Art. 39º', texto: ['O pedido de filiação será apresentado ao órgão competente, em formulário próprio, com observância dos procedimentos legais de registro e comunicação.'] },
        { n: 'Art. 40º', texto: ['A filiação implica conhecimento e aceitação do programa e deste Estatuto, sem prejuízo do direito de crítica e debate interno.'] },
      ]},
      { label: 'CAPÍTULO II', sub: 'Dos direitos dos filiados', artigos: [
        { n: 'Art. 41º', texto: ['São direitos dos filiados, observadas as regras legais e estatutárias:'], lista: ['Participar das atividades e reuniões partidárias;', 'Apresentar propostas, sugestões e manifestações aos órgãos competentes;', 'Votar e ser votado nos processos internos, quando preenchidos os requisitos;', 'Acessar informações institucionais e prestar contas dos órgãos, ressalvados dados protegidos;', 'Exercer o direito de defesa em procedimentos disciplinares;', 'Participar de debates e atividades de formação política.'] },
      ]},
      { label: 'CAPÍTULO III', sub: 'Dos deveres dos filiados', artigos: [
        { n: 'Art. 42º', texto: ['São deveres dos filiados:'], lista: ['Respeitar a Constituição, a legislação, o programa e este Estatuto;', 'Zelar pelo patrimônio, pela imagem institucional e pela integridade do partido;', 'Respeitar os demais filiados e a pluralidade de opiniões;', 'Cumprir as deliberações regularmente aprovadas;', 'Manter atualizados os dados necessários à comunicação partidária;', 'Observar as regras de transparência e prestação de contas quando exercer função partidária.'] },
        { n: 'Art. 43º', texto: ['A contribuição financeira dos filiados, quando instituída, observará critérios transparentes, proporcionais e compatíveis com a legislação.'] },
      ]},
    ],
  },
  {
    id: 't7', label: 'TÍTULO VII', sub: 'Da ética, disciplina e responsabilidade partidária', cor: 'b',
    capitulos: [
      { label: 'CAPÍTULO I', sub: 'Dos princípios éticos', artigos: [
        { n: 'Art. 44º', texto: ['A conduta dos órgãos e filiados deverá observar legalidade, honestidade, impessoalidade, transparência, respeito, responsabilidade e compromisso com o interesse público.'] },
        { n: 'Art. 45º', texto: ['É vedado utilizar o nome, os recursos ou a estrutura do partido para finalidade ilícita, benefício pessoal indevido ou prática contrária à legislação.'] },
      ]},
      { label: 'CAPÍTULO II', sub: 'Das infrações e penalidades', artigos: [
        { n: 'Art. 46º', texto: ['Constituem infrações estatutárias o descumprimento injustificado deste Estatuto, a utilização irregular de recursos, a falsificação de documentos partidários e a prática de conduta incompatível com os deveres de filiação.'] },
        { n: 'Art. 47º', texto: ['Conforme a gravidade e as circunstâncias, poderão ser aplicadas advertência, suspensão de função partidária ou desligamento, sempre mediante procedimento regular.'] },
        { n: 'Art. 48º', texto: ['Nenhuma penalidade será aplicada sem comunicação dos fatos, oportunidade de defesa, análise imparcial e decisão fundamentada.'] },
        { n: 'Art. 49º', texto: ['Caberá recurso ao órgão partidário hierarquicamente superior, no prazo e na forma definidos em regulamento, respeitada a legislação.'] },
      ]},
      { label: 'CAPÍTULO III', sub: 'Da responsabilidade dos órgãos', artigos: [
        { n: 'Art. 50º', texto: ['Os órgãos partidários deverão manter atas, registros de decisões, documentos financeiros e relatórios de atividades, permitindo fiscalização pelos órgãos competentes.'] },
      ]},
    ],
  },
  {
    id: 't8', label: 'TÍTULO VIII', sub: 'Das eleições, candidaturas e representação política', cor: 'y',
    capitulos: [
      { label: 'CAPÍTULO I', sub: 'Da escolha de candidaturas', artigos: [
        { n: 'Art. 51º', texto: ['A escolha de candidaturas observará a legislação eleitoral, as normas nacionais e os procedimentos democráticos aprovados pelo órgão competente.'] },
        { n: 'Art. 52º', texto: ['Os processos internos deverão assegurar publicidade das regras, igualdade de condições entre postulantes e registro formal das deliberações.'] },
        { n: 'Art. 53º', texto: ['A apresentação de candidatura dependerá do cumprimento dos requisitos legais de elegibilidade e das decisões partidárias válidas.'] },
      ]},
      { label: 'CAPÍTULO II', sub: 'Da atuação dos representantes eleitos', artigos: [
        { n: 'Art. 54º', texto: ['Os representantes eleitos pelo partido deverão observar o programa partidário, a legislação e as deliberações legítimas das instâncias competentes.'] },
        { n: 'Art. 55º', texto: ['As bancadas poderão elaborar normas próprias de funcionamento, desde que compatíveis com este Estatuto e com a legislação.'] },
        { n: 'Art. 56º', texto: ['A atuação parlamentar deverá ser comunicada periodicamente aos órgãos partidários e à sociedade, respeitadas as obrigações legais.'] },
      ]},
    ],
  },
  {
    id: 't9', label: 'TÍTULO IX', sub: 'Das finanças e do patrimônio', cor: 'g',
    capitulos: [
      { label: 'CAPÍTULO I', sub: 'Da administração financeira', artigos: [
        { n: 'Art. 57º', texto: ['As finanças partidárias serão administradas com transparência, responsabilidade e observância integral das normas legais e contábeis.'] },
        { n: 'Art. 58º', texto: ['Constituem receitas partidárias aquelas permitidas pela legislação, incluindo recursos do Fundo Partidário e outras fontes legalmente admitidas.'] },
        { n: 'Art. 59º', texto: ['É vedado receber ou movimentar recursos em desacordo com a legislação, bem como ocultar a origem ou a destinação de valores.'] },
        { n: 'Art. 60º', texto: ['Toda movimentação financeira deverá ser documentada, contabilizada e realizada por meios admitidos pela legislação.'] },
      ]},
      { label: 'CAPÍTULO II', sub: 'Da prestação de contas', artigos: [
        { n: 'Art. 61º', texto: ['A Tesouraria elaborará demonstrativos periódicos e prestará informações aos órgãos de fiscalização interna.'] },
        { n: 'Art. 62º', texto: ['As prestações de contas eleitorais e partidárias serão elaboradas e apresentadas nos prazos, sistemas e formatos exigidos pela Justiça Eleitoral.'] },
      ]},
      { label: 'CAPÍTULO III', sub: 'Do patrimônio', artigos: [
        { n: 'Art. 63º', texto: ['O patrimônio partidário será utilizado exclusivamente para finalidades institucionais e políticas lícitas.'] },
        { n: 'Art. 64º', texto: ['A alienação ou aquisição de bens relevantes dependerá de autorização do órgão competente, com registro documental.'] },
      ]},
    ],
  },
  {
    id: 't10', label: 'TÍTULO X', sub: 'Da comunicação, juventude e formação política', cor: 'b',
    capitulos: [
      { label: 'CAPÍTULO I', sub: 'Da comunicação institucional', artigos: [
        { n: 'Art. 65º', texto: ['A comunicação oficial do PRONA deverá identificar claramente suas fontes institucionais, preservar a veracidade das informações e respeitar a legislação.'] },
        { n: 'Art. 66º', texto: ['Os canais oficiais serão administrados por pessoas ou equipes designadas, com regras de acesso, segurança e responsabilidade editorial.'] },
      ]},
      { label: 'CAPÍTULO II', sub: 'Da juventude', artigos: [
        { n: 'Art. 67º', texto: ['Poderá ser instituída organização de juventude, destinada à formação cidadã, ao debate público e à participação juvenil, observadas as normas legais.'] },
        { n: 'Art. 68º', texto: ['A organização de juventude terá regulamento próprio, subordinado ao programa e a este Estatuto, com mecanismos de participação e transparência.'] },
      ]},
      { label: 'CAPÍTULO III', sub: 'Da formação política', artigos: [
        { n: 'Art. 69º', texto: ['O partido poderá promover cursos, seminários, publicações, grupos de estudo e atividades de formação sobre instituições, políticas públicas, economia, história e cidadania.'] },
        { n: 'Art. 70º', texto: ['As atividades de formação deverão estimular o pensamento crítico, o debate fundamentado e o respeito ao pluralismo democrático.'] },
      ]},
    ],
  },
  {
    id: 't11', label: 'TÍTULO XI', sub: 'Das alterações estatutárias e disposições gerais', cor: 'y',
    capitulos: [
      { label: 'CAPÍTULO I', sub: 'Das alterações', artigos: [
        { n: 'Art. 71º', texto: ['Este Estatuto poderá ser alterado por deliberação da Convenção Nacional, convocada com pauta específica e observância dos quóruns legais e estatutários.'] },
        { n: 'Art. 72º', texto: ['As propostas de alteração deverão ser apresentadas por escrito, acompanhadas de justificativa e disponibilizadas aos participantes com antecedência razoável.'] },
      ]},
      { label: 'CAPÍTULO II', sub: 'Das disposições gerais', artigos: [
        { n: 'Art. 73º', texto: ['Os casos omissos serão resolvidos pelo órgão nacional competente, respeitados a legislação, o programa partidário e os princípios deste Estatuto.'] },
        { n: 'Art. 74º', texto: ['Os regimentos internos poderão complementar este Estatuto, sem contrariá-lo.'] },
        { n: 'Art. 75º', texto: ['Os prazos previstos neste Estatuto serão contados conforme a legislação aplicável e as regras aprovadas pela instância competente.'] },
        { n: 'Art. 76º', texto: ['A dissolução, incorporação, fusão ou outras alterações estruturais do partido dependerão das deliberações e formalidades exigidas pela legislação.'] },
      ]},
    ],
  },
];

export const DISPOSICOES_FINAIS = {
  id: 't12', label: 'DISPOSIÇÕES', sub: 'Finais', cor: 'g',
  artigos: [
    { n: 'Art. 77º', texto: ['O presente Estatuto entrará em vigor após sua aprovação pela instância competente, sem prejuízo dos procedimentos de registro e comunicação exigidos pela legislação.'] },
    { n: 'Art. 78º', texto: ['Ficam revogadas as disposições internas que contrariem este Estatuto, respeitados os atos válidos praticados anteriormente.'] },
    { n: 'Art. 79º', texto: ['A interpretação deste Estatuto deverá preservar a unidade partidária, a democracia interna, a transparência e a conformidade legal.'] },
    { n: 'Art. 80º', texto: ['A Direção Nacional providenciará a divulgação do texto aprovado e manterá versão atualizada acessível aos filiados.'] },
  ],
};

export const NOTA_FINAL = 'Este documento constitui uma minuta institucional de Estatuto Geral do Partido de Reedificação da Ordem Nacional – PRONA. Sua estrutura foi organizada com base no formato tradicional de estatutos partidários, tomando como referência a divisão temática do documento consultado, sem reproduzir sua redação. A minuta deverá ser revisada e adequada ao programa partidário definitivo, às decisões de seus órgãos competentes e à legislação eleitoral e partidária brasileira vigente antes de qualquer aprovação, protocolo ou utilização oficial.';

export const COMUNICADO = {
  titulo: 'COMUNICADO OFICIAL',
  subtitulo: 'Aviso sobre a natureza do conteúdo',
  paragrafos: [
    'O presente site foi desenvolvido exclusivamente para fins de organização, documentação e representação institucional no âmbito do jogo **Legado**, constituindo uma iniciativa de caráter estritamente fictício e voltada à experiência de simulação política proporcionada pela plataforma.',
    'Dessa forma, esclarecemos que as disposições, normas, procedimentos, estruturas organizacionais e demais informações aqui apresentadas destinam-se exclusivamente ao contexto do jogo, não possuindo validade jurídica ou aplicação na realidade.',
    'Ressaltamos, ainda, que o conteúdo publicado poderá conter adaptações, simplificações ou divergências em relação à legislação brasileira vigente, à Constituição Federal e aos demais ordenamentos jurídicos oficiais, não devendo ser interpretado como orientação jurídica, documento normativo oficial ou representação integral das instituições reais.',
    'A utilização de denominações, cargos, conceitos e referências semelhantes aos existentes no mundo real tem finalidade exclusivamente ilustrativa e não implica vínculo, reconhecimento ou representação oficial de qualquer instituição pública ou privada.',
    '**Este site, portanto, deve ser compreendido exclusivamente como parte de uma atividade de simulação dentro do jogo Legado.**',
  ],
};
