const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/login', (req, res) => {
    const { email, senha } = req.body;
    
    if (email === 'admin@teste.com' && senha === '123456') {
        res.json({ success: true, message: 'Login realizado!' });
    } else {
        res.status(401).json({ error: 'Email ou senha inválidos' });
    }
});

app.listen(3000, () => {
    console.log(' http://localhost:3000');
});