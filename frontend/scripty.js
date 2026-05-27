document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const mensagem = document.getElementById('mensagem');
    
    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, senha })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            mensagem.style.color = '#27ae60';
            mensagem.textContent = ' Login realizado com sucesso!';
        } else {
            mensagem.style.color = '#e74c3c';
            mensagem.textContent = data.error || '❌ Erro ao fazer login';
        }
    } catch (error) {
        mensagem.style.color = '#e74c3c';
        mensagem.textContent = 'Erro de conexão com o servidor';
    }
});