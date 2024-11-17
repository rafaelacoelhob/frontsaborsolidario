import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o useNavigate
import axios from 'axios';
import backgroundImage from '../assets/Sign.png';

const CriarConta = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate(); // Inicializa o useNavigate

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { nome, email, senha, confirmarSenha } = formData;

    // Validação de campos
    if (!nome || !email || !senha || !confirmarSenha) {
      setError('Todos os campos são obrigatórios.');
      return;
    }

    if (senha !== confirmarSenha) {
      setError('As senhas não coincidem.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/auth/register', {
        nome,
        email,
        senha,
      });
      setSuccess(response.data.message);
      setError('');
      setFormData({
        nome: '',
        email: '',
        senha: '',
        confirmarSenha: '',
      });

      // Redireciona para a página de login após o sucesso
      setTimeout(() => navigate('/login'), 2000); // Aguarda 2 segundos antes de redirecionar
    } catch (error) {
      if (error.response && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError('Erro ao criar conta. Tente novamente.');
      }
    }
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.loginContainer}>
        <h1 style={styles.heading}>Criar conta</h1>
        {error && <p style={styles.error}>{error}</p>}
        {success && <p style={styles.success}>{success}</p>}
        <form style={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="nome" style={styles.label}>NOME</label>
          <input
            type="text"
            id="nome"
            placeholder="@exemploNome"
            style={styles.input}
            value={formData.nome}
            onChange={handleInputChange}
          />

          <label htmlFor="email" style={styles.label}>E-MAIL</label>
          <input
            type="email"
            id="email"
            placeholder="pessoa@gmail.com"
            style={styles.input}
            value={formData.email}
            onChange={handleInputChange}
          />

          <label htmlFor="senha" style={styles.label}>SENHA</label>
          <input
            type="password"
            id="senha"
            placeholder="●●●●●●●●"
            style={styles.input}
            value={formData.senha}
            onChange={handleInputChange}
          />

          <label htmlFor="confirmarSenha" style={styles.label}>DIGITE NOVAMENTE A SENHA</label>
          <input
            type="password"
            id="confirmarSenha"
            placeholder="●●●●●●●●"
            style={styles.input}
            value={formData.confirmarSenha}
            onChange={handleInputChange}
          />

          <button type="submit" style={styles.button}>CRIAR</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  loginContainer: {
    textAlign: 'center',
    color: '#fff',
    marginRight: '-35%',
    maxWidth: '400px',
    fontFamily: 'Inter, sans-serif',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    marginTop: '10px',
    fontWeight: 'bold',
  },
  input: {
    width: '270px',
    height: '40px',
    marginTop: '5px',
    padding: '10px',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: '#fff',
    outline: 'none',
  },
  button: {
    width: '270px',
    height: '45px',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#39a25a',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
  },
  error: {
    color: '#ff4d4d',
    fontSize: '0.9rem',
    marginBottom: '10px',
  },
  success: {
    color: '#4CAF50',
    fontSize: '0.9rem',
    marginBottom: '10px',
  },
};

export default CriarConta;
