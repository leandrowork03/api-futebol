const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

const BASE_URL = "https://api-futebol-sqjf.onrender.com";

app.use(cors());
app.use(express.static('public'));

const clubes = [
  {
    id: 1,
    name: "Atlético-MG",
    logo: `${BASE_URL}/atletico-mineiro.png`,
    titulos: ["2 Campeonato Brasileiro", "1 Copa do Brasil", "1 Copa Libertadores"],
    historia: "Fundado em 1908, o Atlético Mineiro é um dos clubes mais tradicionais do Brasil. Tem grande torcida em Minas Gerais e foi o primeiro campeão brasileiro em 1971.",
    torcedores: "8 milhões"
  },
  {
    id: 2,
    name: "Bahia",
    logo: `${BASE_URL}/bahia.png`,
    titulos: ["2 Campeonato Brasileiro", "4 Copa do Nordeste"],
    historia: "O Bahia é um dos principais clubes do Nordeste. Fundado em 1931, tem grande torcida e tradição, sendo bicampeão brasileiro.",
    torcedores: "3,5 milhões"
  },
  {
    id: 3,
    name: "Botafogo",
    logo: `${BASE_URL}/botafogo.png`,
    titulos: ["2 Campeonato Brasileiro", "21 Campeonato Carioca"],
    historia: "Botafogo é conhecido por revelar craques históricos como Garrincha. É um dos grandes do Rio e tem forte tradição no futebol brasileiro.",
    torcedores: "4,3 milhões"
  },
  {
    id: 4,
    name: "Corinthians",
    logo: `${BASE_URL}/corinthians.png`,
    titulos: ["7 Campeonato Brasileiro", "3 Copa do Brasil", "2 Mundial de Clubes", "1 Copa Libertadores"],
    historia: "Fundado em 1910, o Corinthians é um dos clubes mais populares do Brasil. Tem enorme torcida e conquistas importantes, como a Libertadores de 2012 e o Mundial de 2000 e 2012.",
    torcedores: "30 milhões"
  },
  {
    id: 5,
    name: "Cruzeiro",
    logo: `${BASE_URL}/cruzeiro.png`,
    titulos: ["4 Campeonato Brasileiro", "6 Copa do Brasil", "2 Copa Libertadores"],
    historia: "Cruzeiro é um dos gigantes de Minas Gerais. Fundado em 1921, teve grandes fases e ídolos como Tostão e Alex.",
    torcedores: "9 milhões"
  },
  {
    id: 6,
    name: "Cuiabá",
    logo: `${BASE_URL}/cuiaba.png`,
    titulos: ["1 Copa Verde", "10 Campeonato Mato-Grossense"],
    historia: "Clube recente, fundado em 2001, o Cuiabá vem se destacando por sua rápida ascensão até a Série A do Brasileirão.",
    torcedores: "0,3 milhão"
  },
  {
    id: 7,
    name: "Atlético-GO",
    logo: `${BASE_URL}/atletico-goianiense.png`,
    titulos: ["17 Campeonato Goiano", "1 Série B"],
    historia: "Fundado em 1937, o Atlético Goianiense é um dos clubes mais tradicionais de Goiás e já disputou várias vezes a Série A.",
    torcedores: "0,8 milhão"
  },
  {
    id: 8,
    name: "Flamengo",
    logo: `${BASE_URL}/flamengo.png`,
    titulos: ["7 Campeonato Brasileiro", "4 Copa do Brasil", "3 Copa Libertadores", "1 Mundial de Clubes"],
    historia: "O clube com a maior torcida do Brasil. Fundado em 1895, o Flamengo é um dos mais vitoriosos do país.",
    torcedores: "42 milhões"
  },
  {
    id: 9,
    name: "Fluminense",
    logo: `${BASE_URL}/fluminense.png`,
    titulos: ["4 Campeonato Brasileiro", "1 Copa Libertadores"],
    historia: "Tricolor das Laranjeiras, o Fluminense é um dos clubes mais antigos e tradicionais do Brasil, fundado em 1902.",
    torcedores: "4 milhões"
  },
  {
    id: 10,
    name: "Fortaleza",
    logo: `${BASE_URL}/fortaleza.png`,
    titulos: ["45 Campeonato Cearense", "1 Copa do Nordeste"],
    historia: "O Fortaleza vem crescendo nos últimos anos. Fundado em 1918, tem grande torcida no Nordeste.",
    torcedores: "2,4 milhões"
  },
  {
    id: 11,
    name: "Grêmio",
    logo: `${BASE_URL}/gremio.png`,
    titulos: ["2 Copa Libertadores", "2 Campeonato Brasileiro", "5 Copa do Brasil", "1 Mundial de Clubes"],
    historia: "Fundado em 1903, o Grêmio é um dos maiores clubes do Sul e do Brasil, conhecido por sua raça e tradição.",
    torcedores: "9,5 milhões"
  },
  {
    id: 12,
    name: "Internacional",
    logo: `${BASE_URL}/internacional.png`,
    titulos: ["3 Campeonato Brasileiro", "1 Copa do Brasil", "2 Copa Libertadores", "1 Mundial de Clubes"],
    historia: "Rival do Grêmio, o Inter foi fundado em 1909 e também é muito vitorioso, com destaque para a Libertadores de 2006 e 2010.",
    torcedores: "7 milhões"
  },
  {
    id: 13,
    name: "Juventude",
    logo: `${BASE_URL}/juventude.png`,
    titulos: ["1 Copa do Brasil"],
    historia: "Clube de Caxias do Sul, fundado em 1913, é conhecido por sua força local e campanhas consistentes.",
    torcedores: "0,3 milhão"
  },
  {
    id: 14,
    name: "Bragantino",
    logo: `${BASE_URL}/bragantino.png`,
    titulos: ["1 Série B", "1 Campeonato Paulista"],
    historia: "O Red Bull Bragantino é um projeto moderno, fundado em parceria com a Red Bull. Cresceu rapidamente após 2019.",
    torcedores: "0,5 milhão"
  },
  {
    id: 15,
    name: "Palmeiras",
    logo: `${BASE_URL}/palmeiras.png`,
    titulos: ["11 Campeonato Brasileiro", "4 Copa do Brasil", "2 Copa Libertadores", "1 Copa Rio Internacional"],
    historia: "Fundado em 1914, o Palmeiras é um dos clubes mais vitoriosos do Brasil, com destaque recente nas Libertadores.",
    torcedores: "18 milhões"
  },
  {
    id: 16,
    name: "Athletico-PR",
    logo: `${BASE_URL}/athletico-paranaense.png`,
    titulos: ["1 Campeonato Brasileiro", "2 Copa do Brasil", "1 Copa Sul-Americana"],
    historia: "O Furacão é um dos principais clubes do Sul, com boa estrutura e campanhas de destaque nos últimos anos.",
    torcedores: "3,5 milhões"
  },
  {
    id: 17,
    name: "Santos",
    logo: `${BASE_URL}/santos.png`,
    titulos: ["8 Campeonato Brasileiro", "1 Copa do Brasil", "3 Copa Libertadores", "2 Mundial de Clubes"],
    historia: "Conhecido por Pelé e por sua base forte, o Santos é um gigante com tradição em formar talentos.",
    torcedores: "5,2 milhões"
  },
  {
    id: 18,
    name: "São Paulo",
    logo: `${BASE_URL}/sao-paulo.png`,
    titulos: ["6 Campeonato Brasileiro", "1 Copa do Brasil", "3 Copa Libertadores", "3 Mundial de Clubes"],
    historia: "O Tricolor Paulista é um dos clubes mais vitoriosos do país, com história marcante nos anos 90 e 2000.",
    torcedores: "18 milhões"
  },
  {
    id: 19,
    name: "Vasco da Gama",
    logo: `${BASE_URL}/vasco.png`,
    titulos: ["4 Campeonato Brasileiro", "1 Copa do Brasil", "1 Copa Libertadores"],
    historia: "Fundado em 1898, o Vasco tem uma história ligada à inclusão e à luta contra o racismo. Tem grandes conquistas nacionais e internacionais.",
    torcedores: "9 milhões"
  },
  {
    id: 20,
    name: "Coritiba",
    logo: `${BASE_URL}/coritiba.png`,
    titulos: ["1 Campeonato Brasileiro", "38 Campeonato Paranaense"],
    historia: "Fundado em 1909, o Coritiba é tradicional no Paraná e já disputou diversas vezes a elite do futebol nacional.",
    torcedores: "2,5 milhões"
  }
];


app.get('/', (req, res) => {
  res.send('API de Futebol está no ar!');
});

// Rota de clubes
app.get('/clubs', (req, res) => {
  res.json(clubes);
});


app.get('/matches/upcoming', (req, res) => {
  res.json([]); 
});


app.get('/clubs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const clube = clubes.find(c => c.id === id);

  if (!clube) {
    return res.status(404).json({ error: 'Clube não encontrado' });
  }

  res.json(clube);
});

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
