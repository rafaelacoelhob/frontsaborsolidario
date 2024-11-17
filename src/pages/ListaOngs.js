import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListaOngs = ({ novaOng }) => {
  const [ongs, setOngs] = useState([]);
  const [filtroEstado, setFiltroEstado] = useState('');
  const [error, setError] = useState('');

  // Função para carregar ONGs do backend
  const fetchOngs = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/ongs');
      setOngs(response.data.ongs || []); // Certifique-se de acessar corretamente os dados do backend
      setError('');
    } catch (err) {
      console.error('Erro ao carregar ONGs:', err);
      setError('Erro ao carregar ONGs.');
    }
  };

  // Carregar ONGs ao montar o componente
  useEffect(() => {
    fetchOngs();
  }, []);

  // Atualizar lista de ONGs caso uma nova ONG seja cadastrada
  useEffect(() => {
    if (novaOng) {
      setOngs((prevOngs) => [...prevOngs, novaOng]);
    }
  }, [novaOng]);

  // Filtrar as ONGs com base no estado selecionado
  const ongsFiltradas = filtroEstado
    ? ongs.filter((ong) => ong.estado === filtroEstado)
    : ongs;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Veja nossa lista de ONGs cadastradas e encontre a mais próxima de você para fazer sua doação
      </h1>

      <div style={styles.filterContainer}>
        <button
          style={styles.filterButton}
          onClick={() => setFiltroEstado('')} // Limpa o filtro
        >
          Remover Filtro
        </button>
        <select
          style={styles.dropdown}
          value={filtroEstado}
          onChange={(e) => {
            setFiltroEstado(e.target.value);
          }}
        >
          <option value="">Todos os Estados</option>
          <option value="Acre (AC)">Acre (AC)</option>
          <option value="Alagoas (AL)">Alagoas (AL)</option>
          <option value="Amapá (AP)">Amapá (AP)</option>
          <option value="Amazonas (AM)">Amazonas (AM)</option>
          <option value="Bahia (BA)">Bahia (BA)</option>
          <option value="Ceará (CE)">Ceará (CE)</option>
          <option value="Distrito Federal (DF)">Distrito Federal (DF)</option>
          <option value="Espírito Santo (ES)">Espírito Santo (ES)</option>
          <option value="Goiás (GO)">Goiás (GO)</option>
          <option value="Maranhão (MA)">Maranhão (MA)</option>
          <option value="Mato Grosso (MT)">Mato Grosso (MT)</option>
          <option value="Mato Grosso do Sul (MS)">Mato Grosso do Sul (MS)</option>
          <option value="Minas Gerais (MG)">Minas Gerais (MG)</option>
          <option value="Pará (PA)">Pará (PA)</option>
          <option value="Paraíba (PB)">Paraíba (PB)</option>
          <option value="Paraná (PR)">Paraná (PR)</option>
          <option value="Pernambuco (PE)">Pernambuco (PE)</option>
          <option value="Piauí (PI)">Piauí (PI)</option>
          <option value="Rio de Janeiro (RJ)">Rio de Janeiro (RJ)</option>
          <option value="Rio Grande do Norte (RN)">Rio Grande do Norte (RN)</option>
          <option value="Rio Grande do Sul (RS)">Rio Grande do Sul (RS)</option>
          <option value="Rondônia (RO)">Rondônia (RO)</option>
          <option value="Roraima (RR)">Roraima (RR)</option>
          <option value="Santa Catarina (SC)">Santa Catarina (SC)</option>
          <option value="São Paulo (SP)">São Paulo (SP)</option>
          <option value="Sergipe (SE)">Sergipe (SE)</option>
          <option value="Tocantins (TO)">Tocantins (TO)</option>
        </select>
      </div>

      <div style={styles.ongsContainer}>
        {ongsFiltradas.length > 0 ? (
          ongsFiltradas.map((ong, index) => (
            <div key={index} style={styles.ongCard}>
              <p><strong>Nome:</strong> {ong.nome}</p>
              <p><strong>Endereço:</strong> {ong.endereco}</p>
              <p><strong>Estado:</strong> {ong.estado}</p>
              <p><strong>Horário de Funcionamento:</strong> {ong.horario}</p>
              <p><strong>CNPJ:</strong> {ong.cnpj}</p>
              <p><strong>E-mail:</strong> {ong.email}</p>
              <p><strong>Telefone:</strong> {ong.telefone}</p>
            </div>
          ))
        ) : (
          <p>{error || 'Nenhuma ONG encontrada.'}</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Inter, sans-serif',
    backgroundColor: '#fcffe0',
    padding: '20px',
  },
  title: {
    fontSize: '1.8rem',
    color: '#4caf50',
    textAlign: 'center',
    marginBottom: '20px',
  },
  filterContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px',
  },
  filterButton: {
    backgroundColor: '#ff9800',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
  },
  dropdown: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
  },
  ongsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    alignItems: 'center',
  },
  ongCard: {
    backgroundColor: '#ffffff',
    border: '1px solid #4caf50',
    borderRadius: '8px',
    padding: '15px',
    width: '90%',
    maxWidth: '600px',
    textAlign: 'left',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};

export default ListaOngs;
