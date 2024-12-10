const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json()); // Para processar JSON
app.use(cors()); // Permitir CORS

// Rotas
app.get('/', (req, res) => {
    res.json({ message: 'Bem-vindo à minha API!' });
});

// Exemplo de rota para obter dados
app.get('/dados', (req, res) => {
    const dados = [
        { 
            id: 1, 
            question: "Qual era o nome da coruja pertencente a família Weasley?",
            options: ["Adwiges", "Edwiges", "Dobby", "Errol"],
            answer: "Errol" 
        },
        { 
            id: 2, 
            question: "A Casa dos Gritos, que foi mostrada no terceiro filme, era localizada aonde?",
            options: ["Em Hogwarts", "No Beco Diagonal", "Em Hogsmeade", "Na Inglaterra"],
            answer: "Nearly Headless Nick" 
        },
        { 
            id: 3, 
            question: "A Casa dos Gritos, que foi mostrada no terceiro filme, era localizada aonde?",
            options: ["Em Hogwarts", "No Beco Diagonal", "Em Hogsmeade", "Na Inglaterra"],
            answer: "Nearly Headless Nick" 
        },
        { 
            id: 4, 
            question: "Qual é o nome do filho de Hermione e Rony Weasley?",
            options: ["Severo Granger", "Fred Granger", "Hugo Weasley", "Fred Weasley"],
            answer: "Hugo Weasley" 
        },
        { 
            id: 5, 
            question: "Como era chamada a pessoa que podia falar e ouvir as cobras?",
            options: ["Ofidioglota", "Cobranês", "Fidioglota", "Afidioglota"],
            answer: "Ofidioglota" 
        },
        { 
            id: 6, 
            question: "Quem foi o verdadeiro amor de Líli Potter?",
            options: ["Tiago Potter", "Severo Snape", "Não da para saber..", "Remo Lupin"],
            answer: "Não da para saber.." 
        },
        { 
            id: 7, 
            question: "Qual é a principal função de uma planta mágica emética?",
            options: ["Provocar a transpiração", "Acalmar os nervos", "Provocar vômito", "Acelerar a evacuação"],
            answer: "Provocar vômito" 
        },
        { 
            id: 8, 
            question: "Qual criatura mágica tem como a língua oficial de sua espécie o grugulês?",
            options: ["Elfo", "Duende", "Sereiano", "Trasgo"],
            answer: "Duende" 
        },
        { 
            id: 9, 
            question: "Qual é a principal característica do arbusto tremulante além de seu galhos se moverem?",
            options: ["Sobreviver em locais de solo arenoso", "Preferir locais altos e frios", "Conversar com humanos", "Lançar espinhos venenosos"],
            answer: "Lançar espinhos venenosos" 
        },
        { 
            id: 10, 
            question: "Qual dos seguintes feitiços não é proibido pelo Ministério da Magia?",
            options: ["Portus", "Impervius", "Crucio", "Avada Kedavra"],
            answer: "Impervius"
        },
        // Adicione mais perguntas aqui
    ];
    res.json(dados);
});


// Exemplo de rota para criar um recurso
app.post('/criar', (req, res) => {
    const novoDado = req.body;
    res.json({ message: 'Dado criado com sucesso!', dado: novoDado });
});

// Servidor rodando
app.listen(PORT, () => {
    console.log(`API rodando em http://localhost:${PORT}`);
});
