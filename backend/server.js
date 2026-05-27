const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

// Servir o arquivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota de login
app.post('/login', (req, res) => {
    const { email, senha } = req.body;
    
    if (!email || !senha) {
        return res.status(400).json({ error: 'Email e senha são obrigatórios' });
    }
    
    if (email === 'admin@teste.com' && senha === '123456') {
        return res.json({ 
            success: true, 
            message: 'Login realizado com sucesso!' 
        });
    } else {
        return res.status(401).json({ error: 'Email ou senha inválidos' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Servidor rodando em http://localhost:' + PORT);
});