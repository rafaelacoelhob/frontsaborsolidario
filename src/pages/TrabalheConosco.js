import React from 'react';
import mensagem from '../assets/mensagem.png';
import link from '../assets/link.png';
import laptop from '../assets/laptop.png';

const TrabalheConosco = () => {
  return (
    <div style={styles.container}>
      {/* Seção Trabalhe Conosco */}
      <div style={styles.section}>
        <div style={styles.workContent}>
          <h2 style={styles.heading}>TRABALHE CONOSCO</h2>
          <img src={laptop} alt="Pessoa trabalhando" style={styles.workImage} />
          <p style={styles.boldText}>
            Faça parte da equipe do Sabor Solidário e ajude a construir um futuro mais solidário!
          </p>
        </div>
      </div>

      {/* Seção Contato (E-mail e LinkedIn) */}
      <div style={styles.contactSection}>
        <div style={{ ...styles.card, ...styles.cardHover }}>
          <img src={mensagem} alt="Ícone de E-mail" style={styles.icon} />
          <h3 style={styles.cardHeading}>E-MAIL</h3>
          <a href="mailto:SaborSolidario@gmail.com" style={styles.emailLink}>
            SaborSolidario@gmail.com
          </a>
          <p style={styles.cardText}>
            Se você compartilha desse propósito e quer contribuir com suas habilidades, envie seu currículo e uma breve carta de apresentação.
          </p>
        </div>

        <div style={{ ...styles.card, ...styles.cardHover }}>
          <img src={link} alt="Ícone do LinkedIn" style={styles.icon} />
          <h3 style={styles.cardHeading}>CONECTE-SE COM LINKEDIN</h3>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.linkedInLink}>
            Visualize as vagas abertas
          </a>
          <p style={styles.cardText}>
            Aqui você pode visualizar as vagas abertas de acordo com seu perfil do LinkedIn.
          </p>
        </div>
      </div>

      {/* Texto chamativo abaixo dos cards */}
      <div style={styles.chamativo}>
        Venha fazer a diferença com a gente. Junte-se ao Sabor Solidário e ajude a transformar vidas!
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#FCFFE0',
    fontFamily: 'Arial, sans-serif',
    color: '#28A745',
    padding: '20px',
  },
  section: {
    textAlign: 'center',
    margin: '20px 0',
    padding: '20px',
  },
  workContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
  },
  heading: {
    color: '#28A745',
    fontSize: '32px',
    fontWeight: 'bold',
    textShadow: '4px 4px 6px rgba(0, 0, 0, 0.2)',
    fontFamily: 'Inter, sans-serif',
  },
  workImage: {
    width: '400px',
    height: 'auto',
    borderRadius: '8px',
  },
  boldText: {
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#28A745',
    marginTop: '40px',
  },
  contactSection: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: '#FFA500',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    width: '300px',
    color: '#FCFFE0',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.3)',
  },
  cardHover: {
    ':hover': {
      transform: 'scale(1.05)',
      boxShadow: '6px 6px 15px rgba(0, 0, 0, 0.4)',
    },
  },
  cardHeading: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '20px',
    fontWeight: '900',
    marginBottom: '10px',
  },
  icon: {
    width: '100px',
    height: '100px',
    marginBottom: '5px',
  },
  emailLink: {
    color: '#FCFFE0',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '10px',
    display: 'block',
  },
  linkedInLink: {
    color: '#FCFFE0',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '10px',
    display: 'block',
  },
  cardText: {
    fontSize: '16px',
    color: '#FCFFE0',
    marginTop: '15px',
  },
  chamativo: {
    textAlign: 'center',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#28A745',
    marginTop: '40px',
  },
};

export default TrabalheConosco;
