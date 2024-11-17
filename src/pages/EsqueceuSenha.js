import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o useNavigate
import axios from 'axios';
import backgroundImage from '../assets/senha.png';

const EsqueceuSenha = () => {
  const [formData, setFormData] = useState({
    email: '',
    novaSenha: '',
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
    const { email, novaSenha, confirmarSenha } = formData;

    // Validação
    if (!email || !novaSenha || !confirmarSenha) {
      setError('Todos os campos são obrigatórios.');
      return;
    }

    if (novaSenha !== confirmarSenha) {
      setError('As senhas não coincidem.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/auth/reset-password', {
        email,
        novaSenha,
      });
      setSuccess(response.data.message);
      setError('');
      setFormData({ email: '', novaSenha: '', confirmarSenha: '' });

      // Redireciona para a página de login após sucesso
      setTimeout(() => navigate('/login'), 2000); // Aguarda 2 segundos antes de redirecionar
    } catch (err) {
      if (err.response && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError('Erro ao redefinir senha. Tente novamente.');
      }
    }
  };

  return (
    <div style={{ ...styles.pageContainer, backgroundImage: `url(${backgroundImage})` }}>
      <div style={styles.loginContainer}>
        <h1 style={styles.heading}>Esqueceu a senha?</h1>
        {error && <p style={styles.error}>{error}</p>}
        {success && <p style={styles.success}>{success}</p>}
        <form style={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="email" style={styles.label}>E-MAIL</label>
          <input
            type="email"
            id="email"
            placeholder="exemplo@dominio.com"
            style={styles.input}
            value={formData.email}
            onChange={handleInputChange}
          />

          <label htmlFor="novaSenha" style={styles.label}>NOVA SENHA</label>
          <input
            type="password"
            id="novaSenha"
            placeholder="●●●●●●●●"
            style={styles.input}
            value={formData.novaSenha}
            onChange={handleInputChange}
          />

          <label htmlFor="confirmarSenha" style={styles.label}>DIGITE NOVAMENTE</label>
          <input
            type="password"
            id="confirmarSenha"
            placeholder="●●●●●●●●"
            style={styles.input}
            value={formData.confirmarSenha}
            onChange={handleInputChange}
          />

          <button type="submit" style={styles.button}>ENVIAR</button>
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

export default EsqueceuSenha;
