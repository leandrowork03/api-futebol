const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001; // pode escolher outra porta se quiser

app.use(cors());
app.use(express.static('public'));

const clubes = [
  {
    id: 1,
    name: "Atlético-MG",
    logo: "http://localhost:3001/atletico-mineiro.png",
    titulos: ["2 Campeonato Brasileiro", "1 Copa do Brasil", "1 Copa Libertadores"],
    historia: "Fundado em 1908, o Atlético Mineiro é um dos clubes mais tradicionais do Brasil. Tem grande torcida em Minas Gerais e foi o primeiro campeão brasileiro em 1971.",
    torcedores: "8 milhões"
  },
  {
    id: 2,
    name: "Bahia",
    logo: "http://localhost:3001/bahia.png",
    titulos: ["2 Campeonato Brasileiro", "4 Copa do Nordeste"],
    historia: "O Bahia é um dos principais clubes do Nordeste. Fundado em 1931, tem grande torcida e tradição, sendo bicampeão brasileiro.",
    torcedores: "3,5 milhões"
  },
  {
    id: 3,
    name: "Botafogo",
    logo: "http://localhost:3001/botafogo.png",
    titulos: ["2 Campeonato Brasileiro", "21 Campeonato Carioca"],
    historia: "Botafogo é conhecido por revelar craques históricos como Garrincha. É um dos grandes do Rio e tem forte tradição no futebol brasileiro.",
    torcedores: "4,3 milhões"
  },
  {
    id: 4,
    name: "Corinthians",
    logo: "http://localhost:3001/corinthians.png",
    titulos: ["7 Campeonato Brasileiro", "3 Copa do Brasil", "2 Mundial de Clubes", "1 Copa Libertadores"],
    historia: "Fundado em 1910, o Corinthians é um dos clubes mais populares do Brasil. Tem enorme torcida e conquistas importantes, como a Libertadores de 2012 e o Mundial de 2000 e 2012.",
    torcedores: "30 milhões"
  },
  {
    id: 5,
    name: "Cruzeiro",
    logo: "http://localhost:3001/cruzeiro.png",
    titulos: ["4 Campeonato Brasileiro", "6 Copa do Brasil", "2 Copa Libertadores"],
    historia: "Cruzeiro é um dos gigantes de Minas Gerais. Fundado em 1921, teve grandes fases e ídolos como Tostão e Alex.",
    torcedores: "9 milhões"
  },
  {
    id: 6,
    name: "Cuiabá",
    logo: "http://localhost:3001/cuiaba.png",
    titulos: ["1 Copa Verde", "10 Campeonato Mato-Grossense"],
    historia: "Clube recente, fundado em 2001, o Cuiabá vem se destacando por sua rápida ascensão até a Série A do Brasileirão.",
    torcedores: "0,3 milhão"
  },
  {
    id: 7,
    name: "Atlético-GO",
    logo: "http://localhost:3001/atletico-goianiense.png",
    titulos: ["17 Campeonato Goiano", "1 Série B"],
    historia: "Fundado em 1937, o Atlético Goianiense é um dos clubes mais tradicionais de Goiás e já disputou várias vezes a Série A.",
    torcedores: "0,8 milhão"
  },
  {
    id: 8,
    name: "Flamengo",
    logo: "http://localhost:3001/flamengo.png",
    titulos: ["7 Campeonato Brasileiro", "4 Copa do Brasil", "3 Copa Libertadores", "1 Mundial de Clubes"],
    historia: "O clube com a maior torcida do Brasil. Fundado em 1895, o Flamengo é um dos mais vitoriosos do país.",
    torcedores: "42 milhões"
  },
  {
    id: 9,
    name: "Fluminense",
    logo: "http://localhost:3001/fluminense.png",
    titulos: ["4 Campeonato Brasileiro", "1 Copa Libertadores"],
    historia: "Tricolor das Laranjeiras, o Fluminense é um dos clubes mais antigos e tradicionais do Brasil, fundado em 1902.",
    torcedores: "4 milhões"
  },
  {
    id: 10,
    name: "Fortaleza",
    logo: "http://localhost:3001/fortaleza.png",
    titulos: ["45 Campeonato Cearense", "1 Copa do Nordeste"],
    historia: "O Fortaleza vem crescendo nos últimos anos. Fundado em 1918, tem grande torcida no Nordeste.",
    torcedores: "2,4 milhões"
  },
  {
    id: 11,
    name: "Grêmio",
    logo: "http://localhost:3001/gremio.png",
    titulos: ["2 Copa Libertadores", "2 Campeonato Brasileiro", "5 Copa do Brasil", "1 Mundial de Clubes"],
    historia: "Fundado em 1903, o Grêmio é um dos maiores clubes do Sul e do Brasil, conhecido por sua raça e tradição.",
    torcedores: "9,5 milhões"
  },
  {
    id: 12,
    name: "Internacional",
    logo: "http://localhost:3001/internacional.png",
    titulos: ["3 Campeonato Brasileiro", "1 Copa do Brasil", "2 Copa Libertadores", "1 Mundial de Clubes"],
    historia: "Rival do Grêmio, o Inter foi fundado em 1909 e também é muito vitorioso, com destaque para a Libertadores de 2006 e 2010.",
    torcedores: "7 milhões"
  },
  {
    id: 13,
    name: "Juventude",
    logo: "http://localhost:3001/juventude.png",
    titulos: ["1 Copa do Brasil"],
    historia: "Clube de Caxias do Sul, fundado em 1913, é conhecido por sua força local e campanhas consistentes.",
    torcedores: "0,3 milhão"
  },
  {
    id: 14,
    name: "Bragantino",
    logo: "http://localhost:3001/bragantino.png",
    titulos: ["1 Série B", "1 Campeonato Paulista"],
    historia: "O Red Bull Bragantino é um projeto moderno, fundado em parceria com a Red Bull. Cresceu rapidamente após 2019.",
    torcedores: "0,5 milhão"
  },
  {
    id: 15,
    name: "Palmeiras",
    logo: "http://localhost:3001/palmeiras.png",
    titulos: ["11 Campeonato Brasileiro", "4 Copa do Brasil", "2 Copa Libertadores", "1 Copa Rio Internacional"],
    historia: "Fundado em 1914, o Palmeiras é um dos clubes mais vitoriosos do Brasil, com destaque recente nas Libertadores.",
    torcedores: "18 milhões"
  },
  {
    id: 16,
    name: "Athletico-PR",
    logo: "http://localhost:3001/athletico-paranaense.png",
    titulos: ["1 Campeonato Brasileiro", "2 Copa do Brasil", "1 Copa Sul-Americana"],
    historia: "O Furacão é um dos principais clubes do Sul, com boa estrutura e campanhas de destaque nos últimos anos.",
    torcedores: "3,5 milhões"
  },
  {
    id: 17,
    name: "Santos",
    logo: "http://localhost:3001/santos.png",
    titulos: ["8 Campeonato Brasileiro", "1 Copa do Brasil", "3 Copa Libertadores", "2 Mundial de Clubes"],
    historia: "Conhecido por Pelé e por sua base forte, o Santos é um gigante com tradição em formar talentos.",
    torcedores: "5,2 milhões"
  },
  {
    id: 18,
    name: "São Paulo",
    logo: "http://localhost:3001/sao-paulo.png",
    titulos: ["6 Campeonato Brasileiro", "1 Copa do Brasil", "3 Copa Libertadores", "3 Mundial de Clubes"],
    historia: "O Tricolor Paulista é um dos clubes mais vitoriosos do país, com história marcante nos anos 90 e 2000.",
    torcedores: "18 milhões"
  },
  {
    id: 19,
    name: "Vasco da Gama",
    logo: "http://localhost:3001/vasco.png",
    titulos: ["4 Campeonato Brasileiro", "1 Copa do Brasil", "1 Copa Libertadores"],
    historia: "Fundado em 1898, o Vasco tem uma história ligada à inclusão e à luta contra o racismo. Tem grandes conquistas nacionais e internacionais.",
    torcedores: "9 milhões"
  },
  {
    id: 20,
    name: "Coritiba",
    logo: "http://localhost:3001/coritiba.png",
    titulos: ["1 Campeonato Brasileiro", "38 Campeonato Paranaense"],
    historia: "Fundado em 1909, o Coritiba é tradicional no Paraná e já disputou diversas vezes a elite do futebol nacional.",
    torcedores: "2,5 milhões"
  }
];




app.get('/', (req, res) => {
  res.send('API de Futebol está no ar!');
});

app.get('/clubs', (req, res) => {
  res.json(clubes);
});

app.get('/matches/upcoming', (req, res) => {
  res.json(jogos);
});

app.get('/clubs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const clube = clubes.find(c => c.id === id);

  if (!clube) {
    return res.status(404).json({ error: 'Clube não encontrado' });
  }

  res.json(clube);
});
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
