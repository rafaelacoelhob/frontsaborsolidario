import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import backgroundImage from '../assets/login.png';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [message, setMessage] = useState(''); // Adicionado para exibir a mensagem de sucesso
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://backendseusite.onrender.com/api/auth/login', {
                email,
                senha,
            });

            setMessage('Login realizado com sucesso!'); // Define a mensagem de sucesso
            setError(''); // Limpa qualquer mensagem de erro
            setTimeout(() => {
                navigate('/adicionar-ou-remover'); // Redireciona após 2 segundos
            }, 2000);
        } catch (error) {
            setMessage(''); // Limpa qualquer mensagem de sucesso
            if (error.response && error.response.status === 401) {
                setError('Email ou senha inválidos.');
            } else {
                setError('Erro ao tentar fazer login. Tente novamente.');
            }
        }
    };

    return (
        <div style={{ ...styles.container, backgroundImage: `url(${backgroundImage})` }}>
            <div style={styles.loginContainer}>
                <h1 style={styles.title}>Login</h1>
                <form style={styles.form} onSubmit={handleLogin}>
                    {error && <p style={styles.error}>{error}</p>}
                    {message && <p style={styles.success}>{message}</p>} {/* Exibe a mensagem de sucesso */}

                    <label htmlFor="email" style={styles.label}>EMAIL</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="pessoa@gmail.com"
                        style={styles.input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="senha" style={styles.label}>SENHA</label>
                    <input
                        type="password"
                        id="senha"
                        placeholder="●●●●●●●●"
                        style={styles.input}
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />

                    <div style={styles.linksContainer}>
                        <a href="/esqueceu-senha" style={styles.forgotPassword}>
                            ESQUECEU A SENHA?
                        </a>

                        <button type="submit" style={styles.loginButton}>ENTRAR</button>   

                        <a href="/criar-conta" style={styles.registerLink}>
                            FAZER CADASTRO
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'flex-end', // Alinha o formulário à direita
        alignItems: 'center',
        height: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        fontFamily: 'Inter, sans-serif',
        paddingRight: '200px',
    },
    loginContainer: {
        width: '320px', // Ajuste para o tamanho ideal
        padding: '20px',
        marginRight: '50px', // Espaço entre o formulário e a borda da tela
        borderRadius: '10px',
        color: '#fff',
    },
    title: {
        fontSize: '2rem',
        marginBottom: '20px',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    label: {
        marginBottom: '5px',
        fontWeight: 'bold',
        fontSize: '0.9rem',
        alignSelf: 'flex-start', 
    },
    input: {
        width: '100%', // Garante que o input ocupe toda a largura disponível
        marginBottom: '15px',
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        fontSize: '1rem',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        color: '#fff',
        outline: 'none',
    },
    loginButton: {
        width: '100%', // O botão ocupará toda a largura do contêiner
        padding: '10px',
        fontSize: '1rem',
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#39a25a',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '15px', // Espaço entre o botão e os elementos acima
        textAlign: 'center', // Centraliza o texto dentro do botão
    },
    linksContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '15px',
    },
    forgotPassword: {
        fontSize: '0.9rem',
        color: '#fff',
        textDecoration: 'none',
        marginBottom: '5px',
    },
    registerLink: {
        padding: '30px',
        fontSize: '0.9rem',
        color: '#fff',
        textDecoration: 'none',
    },
    error: {
        color: '#ff4d4d',
        fontSize: '0.9rem',
        marginBottom: '10px',
    },
    success: {
        color: '#39a25a', // Cor verde para sucesso
        fontSize: '0.9rem',
        marginBottom: '10px',
        textAlign: 'center',
    },
};

export default Login;
