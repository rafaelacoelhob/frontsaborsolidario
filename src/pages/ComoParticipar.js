import React from 'react';
import { Link } from 'react-router-dom'; 
import endereco from '../assets/endereco.png';
import telefone from '../assets/telefone.png';
import mensagem from '../assets/mail.png';
import voluntario from '../assets/deee.png';

const ComoParticipar = () => {
  return (
    <div style={styles.participarContainer}>
      <h1 style={styles.titulo}>COMO PARTICIPAR ?</h1>
      <p style={styles.descricao}>
        Contribuir para a mudança social é fácil! Aqui estão algumas maneiras de se envolver com o Sabor Solidário e apoiar as ONGs cadastradas.
      </p>

      <div style={styles.cardsContainer}>
        <div style={styles.card}>
          <img src={endereco} alt="Ícone Endereço" style={styles.cardIcon} />
          <h3 style={styles.cardTitle}>ENDEREÇO</h3>
          <p style={styles.cardText}>Descubra a ONG mais próxima de você e veja os horários de funcionamento para fazer sua doação de alimentos.</p>
        </div>

        <div style={styles.card}>
          <img src={telefone} alt="Ícone Telefone" style={styles.cardIcon} />
          <h3 style={styles.cardTitle}>NÚMERO DE TELEFONE</h3>
          <p style={styles.cardText}>Se você deseja saber mais sobre como ajudar ou tem alguma dúvida, entre em contato diretamente com as ONGs!</p>
        </div>

        <div style={styles.card}>
          <img src={mensagem} alt="Ícone E-mail" style={styles.cardIcon} />
          <h3 style={styles.cardTitle}>E-MAIL</h3>
          <p style={styles.cardText}>Se você prefere se comunicar por e-mail, pode entrar em contato diretamente com as ONGs.</p>
        </div>
      </div>

      <div style={styles.buttonContainer}>
  <Link to="/lista-de-ongs" style={styles.button}>VEJA A LISTA DE ONGS!</Link>
</div>

      <img src={voluntario} alt="Imagem Voluntários" style={styles.voluntarioImage} />

      <h2 style={styles.footerText}>A DOAÇÃO DE UM ALIMENTO IMPORTA E SALVA VIDAS!</h2>
    </div>
  );
};

const styles = {
  participarContainer: {
    fontFamily: "'Inter', sans-serif",
    textAlign: 'center',
    backgroundColor: '#fcffe0',
    padding: '20px',
  },
  titulo: {
    fontSize: '2.3rem',
    color: '#4caf50',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
    marginBottom: '10px',
  },
  descricao: {
    fontSize: '1.2rem',
    color: '#075C0A',
    marginBottom: '20px',
    padding: '0 20px',
  },
  cardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '20px',
  },
  card: {
    backgroundColor: '#4caf50',
    color: '#fcffe0',
    padding: '20px',
    borderRadius: '8px',
    width: '200px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  },
  cardHover: {
    transform: 'scale(1.05)',
  },
  cardIcon: {
    width: '80px',
    height: '80px',
    marginBottom: '10px',
  },
  cardTitle: {
    fontSize: '1.2rem',
    margin: '10px 0',
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.2)',
  },
  cardDescription: {
    fontSize: '0.9rem',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0',
  },
  button: {
    backgroundColor: '#ff9800',
    color: '#fcffe0',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    margin: '20px 0',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    textDecoration: 'none', // Remove o sublinhado
  },
  buttonHover: {
    backgroundColor: '#e68900',
  },
  buttonActive: {
    transform: 'scale(1.1)',
    transition: 'transform 0.1s ease',
  },
  voluntarioImage: {
    width: '60%',
    maxWidth: '500px',
    margin: '20px 0',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  },
  footerText: {
    fontSize: '1.3rem',
    color: '#075C0A',
    marginTop: '20px',
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)',
  },
  // Responsividade
  responsiveTitulo: {
    fontSize: '2rem',
  },
  responsiveDescricao: {
    fontSize: '1rem',
  },
  responsiveCard: {
    width: '100%',
    maxWidth: '300px',
  },
  responsiveButton: {
    width: '100%',
    maxWidth: '200px',
  },
  responsiveVoluntarioImage: {
    width: '80%',
  },
};

export default ComoParticipar;
