import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import casa from '../assets/casa.png';
import juntarIcon from '../assets/juntar.png';
import emailIcon from '../assets/oi.png';
import sobre from '../assets/sobre.png';

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div style={styles.headerContainer}>
      <header style={styles.header}>
        <div style={styles.logoContainer}>
          <img src={logo} alt="Logo" style={styles.logo} />
        </div>
        <nav style={styles.nav}>
          <Link to="/" style={styles.navLink}>
            <img src={casa} alt="Home Icon" style={styles.icon} /> HOME
          </Link>
          <Link to="/sobre-nos" style={styles.navLink}>
            <img src={sobre} alt="Sobre Icon" style={styles.icon} /> SOBRE NÓS
          </Link>

          <div style={styles.navLink} onClick={toggleDropdown}>
            <img src={juntarIcon} alt="Junte-se Icon" style={styles.icon} /> JUNTE-SE À NÓS
            {showDropdown && (
              <div style={styles.dropdown}>
                <Link to="/como-participar" style={styles.dropdownLink}>COMO PARTICIPAR</Link>
                <Link to="/trabalhe-conosco" style={styles.dropdownLink}>TRABALHE CONOSCO</Link>
              </div>
            )}
          </div>
          <Link to="/contato" style={styles.navLink}>
            <img src={emailIcon} alt="Contato Icon" style={styles.icon} /> CONTATO
          </Link>

          <Link to="/login" style={styles.registerBtn}>CADASTRE SUA ONG</Link> 
        </nav>
      </header>
    </div>
  );
}

const styles = {
  headerContainer: {
    position: 'relative',
    width: '100%',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: '#357A38',
    color: 'white',
    zIndex: 3, // Garantir que o header tenha prioridade sobre o conteúdo abaixo
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '190px',
    height: '190px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
  },
  navLink: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
    position: 'relative',
    cursor: 'pointer',
  },
  icon: {
    width: '100px',
    height: '50px',
    paddingTop: '10px',
    objectFit: 'contain',
  },
  registerBtn: {
    backgroundColor: 'orange',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'transform 0.2s, background-color 0.2s',
    marginLeft: '20px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
    textDecoration: 'none',
  },
  dropdown: {
    position: 'absolute',
    top: '100%',
    left: '0',
    backgroundColor: '#fcffe0',
    minWidth: '160px',
    boxShadow: '0px 8px 16px 0px rgba(0, 0, 0, 0.2)',
    zIndex: 4,
    padding: '10px 0',
    borderRadius: '8px',
    marginTop: '10px',
    textAlign: 'left',
  },
  dropdownLink: {
    color: '#333',
    padding: '10px 20px',
    textDecoration: 'none',
    display: 'block',
    fontSize: '1rem',
    transition: 'background-color 0.3s, color 0.3s',
  },
};

export default Header;
