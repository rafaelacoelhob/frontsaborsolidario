import React, { useState } from 'react';
import axios from 'axios';

function AdicionarOng({ onNewOng }) {
  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    estado: '',
    horario: '',
    cnpj: '',
    email: '',
    telefone: '',
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState(''); // Novo estado para mensagens de sucesso
  const [loading, setLoading] = useState(false);

  const estados = [
    'Acre (AC)', 'Alagoas (AL)', 'Amapá (AP)', 'Amazonas (AM)', 'Bahia (BA)',
    'Ceará (CE)', 'Distrito Federal (DF)', 'Espírito Santo (ES)', 'Goiás (GO)',
    'Maranhão (MA)', 'Mato Grosso (MT)', 'Mato Grosso do Sul (MS)', 'Minas Gerais (MG)',
    'Pará (PA)', 'Paraíba (PB)', 'Paraná (PR)', 'Pernambuco (PE)', 'Piauí (PI)',
    'Rio de Janeiro (RJ)', 'Rio Grande do Norte (RN)', 'Rio Grande do Sul (RS)',
    'Rondônia (RO)', 'Roraima (RR)', 'Santa Catarina (SC)', 'São Paulo (SP)',
    'Sergipe (SE)', 'Tocantins (TO)',
  ];

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nome.trim()) newErrors.nome = 'O nome é obrigatório.';
    if (!formData.endereco.trim()) newErrors.endereco = 'O endereço é obrigatório.';
    if (!formData.estado) newErrors.estado = 'Selecione um estado.';
    if (!/^\d{2}:\d{2}\s-\s\d{2}:\d{2}$/.test(formData.horario)) newErrors.horario = 'Horário inválido. Use o formato HH:MM - HH:MM.';
    const cnpj = formData.cnpj.replace(/[^\d]/g, '');
    if (!cnpj) newErrors.cnpj = 'O CNPJ é obrigatório.';
    else if (cnpj.length !== 14) newErrors.cnpj = 'CNPJ inválido. Deve conter 14 dígitos.';
    if (!formData.email.trim()) newErrors.email = 'O e-mail é obrigatório.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'E-mail inválido.';
    const telefone = formData.telefone.replace(/[^\d]/g, '');
    if (!telefone) newErrors.telefone = 'O telefone é obrigatório.';
    else if (telefone.length < 10 || telefone.length > 11) newErrors.telefone = 'Telefone inválido. Deve ter 10 ou 11 dígitos.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
        const response = await axios.post('http://localhost:3000/api/ongs', formData);
        if (onNewOng) onNewOng(response.data); // Atualiza a lista de ONGs
        setMessage('Cadastro realizado com sucesso!'); // Exibe a mensagem de sucesso
        setFormData({
          nome: '',
          endereco: '',
          estado: '',
          horario: '',
          cnpj: '',
          email: '',
          telefone: '',
        });
        setErrors({});
      } catch (error) {
        const errorMessage = error.response?.data?.error || 'Erro ao cadastrar a ONG.';
        setErrors({ global: errorMessage });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div style={styles.adicionarOng}>
      <h1 style={styles.title}>Cadastre sua ONG e faça parte da rede solidária!</h1>
      <div style={styles.formContainer}>
        {message && <div style={styles.successMessage}>{message}</div>} {/* Mensagem de sucesso */}
        {errors.global && <div style={styles.errorMessage}>{errors.global}</div>} {/* Mensagem de erro */}
        <form onSubmit={handleSubmit}>
          <div style={styles.inputRow}>
            <div>
              <label style={styles.label}>Nome:</label>
              <input
                type="text"
                id="nome"
                value={formData.nome}
                onChange={handleInputChange}
                style={styles.input}
              />
              {errors.nome && <div style={styles.errorMessage}>{errors.nome}</div>}
            </div>
            <div>
              <label style={styles.label}>Endereço:</label>
              <input
                type="text"
                id="endereco"
                value={formData.endereco}
                onChange={handleInputChange}
                style={styles.input}
              />
              {errors.endereco && <div style={styles.errorMessage}>{errors.endereco}</div>}
            </div>
          </div>
          <div style={styles.inputRow}>
            <div>
              <label style={styles.label}>Estado:</label>
              <select
                id="estado"
                value={formData.estado}
                onChange={handleInputChange}
                style={styles.input}
              >
                <option value="">Selecione o Estado</option>
                {estados.map((estado) => (
                  <option key={estado} value={estado}>{estado}</option>
                ))}
              </select>
              {errors.estado && <div style={styles.errorMessage}>{errors.estado}</div>}
            </div>
            <div>
              <label style={styles.label}>Horário de Funcionamento:</label>
              <input
                type="text"
                id="horario"
                placeholder="09:00 - 18:00"
                value={formData.horario}
                onChange={handleInputChange}
                style={styles.input}
              />
              {errors.horario && <div style={styles.errorMessage}>{errors.horario}</div>}
            </div>
          </div>
          <label style={styles.label}>CNPJ:</label>
          <input
            type="text"
            id="cnpj"
            value={formData.cnpj}
            onChange={handleInputChange}
            style={styles.input}
          />
          {errors.cnpj && <div style={styles.errorMessage}>{errors.cnpj}</div>}
          <label style={styles.label}>E-mail:</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            style={styles.input}
          />
          {errors.email && <div style={styles.errorMessage}>{errors.email}</div>}
          <label style={styles.label}>Telefone:</label>
          <input
            type="text"
            id="telefone"
            value={formData.telefone}
            onChange={handleInputChange}
            style={styles.input}
          />
          {errors.telefone && <div style={styles.errorMessage}>{errors.telefone}</div>}
          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? 'Cadastrando...' : 'Adicionar'}
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  adicionarOng: {
    fontFamily: 'Inter, sans-serif',
    backgroundColor: '#FCFFE0',
    padding: '20px',
    margin: '0',
  },
  title: {
    textAlign: 'center',
    fontSize: '24px',
    color: '#4CAF50',
    marginBottom: '30px',
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    margin: '0 auto',
  },
  inputRow: {
    display: 'flex',
    gap: '20px',
    marginBottom: '20px',
  },
  label: {
    fontSize: '14px',
    color: '#075C0A',
    marginBottom: '6px',
    display: 'block',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
    marginBottom: '6px',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '12px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '20px',
  },
  successMessage: {
    color: '#4CAF50',
    fontSize: '14px',
    marginBottom: '10px',
    textAlign: 'center',
  },
  errorMessage: {
    color: '#e74c3c',
    fontSize: '14px',
    marginBottom: '10px',
    textAlign: 'center',
  },
};

export default AdicionarOng;
