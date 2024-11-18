import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AdicionarOuRemover() {
  const [cnpj, setCnpj] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [confirmRemove, setConfirmRemove] = useState(false); // Novo estado para confirmar a remoção

  // Função para validar o CNPJ
  const isValidCNPJ = (cnpj) => {
    const cleanCNPJ = cnpj.replace(/\D/g, ''); // Remove caracteres não numéricos
    return cleanCNPJ.length === 14; // Verifica se possui 14 dígitos
  };

  const consultarOng = async () => {
    if (!isValidCNPJ(cnpj)) {
      setError('CNPJ inválido. Verifique e tente novamente.');
      setMessage('');
      setConfirmRemove(false);
      return;
    }

    try {
      const response = await axios.get(`https://backendsaborsolidario.onrender.com/api/ongs/${cnpj}`);
      setMessage(`ONG encontrada: ${response.data.ong.nome}`);
      setError('');
      setConfirmRemove(false);
    } catch (err) {
      if (err.response && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError('Erro ao consultar ONG. Tente novamente.');
      }
      setMessage('');
      setConfirmRemove(false);
    }
  };

  const removerOng = async () => {
    if (!isValidCNPJ(cnpj)) {
      setError('CNPJ inválido. Verifique e tente novamente.');
      setMessage('');
      setConfirmRemove(false);
      return;
    }

    if (!confirmRemove) {
      setMessage('Tem certeza que deseja remover esta ONG? Clique em "REMOVER" novamente para confirmar.');
      setError('');
      setConfirmRemove(true);
      return;
    }

    try {
      const response = await axios.delete(`http://localhost:3000/api/ongs/${cnpj}`);
      setMessage(response.data.message);
      setError('');
      setCnpj('');
      setConfirmRemove(false);
    } catch (err) {
      console.error('Erro ao tentar remover ONG:', err);
      if (err.response && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError('Erro interno ao remover ONG.');
      }
      setMessage('');
      setConfirmRemove(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Olá! Ficamos muito felizes em saber que sua ONG deseja fazer parte do Sabor Solidário
      </h1>

      {/* Adicionar ONG */}
      <div style={styles.buttons}>
        <p style={styles.subtitle}>Deseja adicionar sua ONG?</p>
        <Link to="/cadastre-sua-ong" style={styles.linkButton}>
          ADICIONE UMA ONG
        </Link>
      </div>

      {/* Remover ONG */}
      <div style={styles.buttons}>
        <p style={styles.subtitle}>Deseja remover sua ONG?</p>
        <label style={styles.label}>Digite seu CNPJ:</label>
        <input
          style={styles.inputField}
          type="text"
          placeholder="Digite o CNPJ (somente números)"
          value={cnpj}
          onChange={(e) => setCnpj(e.target.value)}
        />
        <button onClick={consultarOng} style={styles.linkButton}>
          CONSULTAR CNPJ
        </button>
        <button
          onClick={removerOng}
          style={{ ...styles.linkButton, backgroundColor: '#e74c3c' }}
        >
          REMOVER
        </button>
        {error && <p style={styles.errorMessage}>{error}</p>}
        {message && <p style={styles.successMessage}>{message}</p>}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#FFFBEA',
    minHeight: '100vh',
    justifyContent: 'center',
  },
  title: {
    fontSize: '1.5rem',
    textAlign: 'center',
    marginBottom: '20px',
    color: '#357A38',
    fontWeight: 'bold',
  },
  buttons: {
    margin: '20px 0',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: '1rem',
    marginBottom: '10px',
    color: '#357A38',
    fontWeight: 'bold',
  },
  label: {
    fontSize: '1rem',
    color: '#357A38',
    marginBottom: '5px',
    display: 'block',
  },
  inputField: {
    width: '200px',
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '10px',
    textAlign: 'center',
  },
  linkButton: {
    display: 'inline-block',
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#FFF',
    backgroundColor: '#4CAF50',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
    margin: '5px',
  },
  errorMessage: {
    color: 'red',
    fontSize: '0.9rem',
    marginTop: '10px',
  },
  successMessage: {
    color: 'green',
    fontSize: '0.9rem',
    marginTop: '10px',
  },
};

export default AdicionarOuRemover;
