import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import celular from '../assets/celular.png';
import email from '../assets/teste.png';
import localizacao from '../assets/localizacao.png';

function Footer() {
  return (
    <footer style={style.footer}>
      <div style={style.footerContent}>
        <div style={style.footerSection}>
          <div style={style.footerItem}>
            <Link to="/sobre-nos" style={style.footerItemLink}>Sobre Nós</Link>
          </div>
          <div style={style.footerItem}>
            <Link to="/termos-de-uso" style={style.footerItemLink}>Termos de Uso</Link> {/* Link para Termos de Uso */}
          </div>
          <div style={style.footerItem}>
            <Link to="/trabalhe-conosco" style={style.footerItemLink}>Trabalhe conosco</Link>
          </div>
        </div>
        <div style={style.footerSection}>
          <div style={style.footerItem}>
            <img src={localizacao} alt="Localização" style={style.customIcon} />
            <span>Rua Antonio Céspede, 514</span>
          </div>
          <div style={style.footerItem}>
            <img src={email} alt="E-mail" style={style.customIcon} />
            <span>SaborSolidario@gmail.com</span>
          </div>
          <div style={style.footerItem}>
            <img src={celular} alt="Telefone" style={style.customIcon} />
            <span>(11) 00000-0000</span>
          </div>
        </div>
        <div style={style.footerLogo}>
          <div style={style.logoCircle}>
            <img src={logo} alt="Sabor Solidário Logo" style={style.logoImage} />
          </div>
        </div>
      </div>
      <div style={style.footerBottom}>
        <p>© Copyright 2024 | Sabor Solidário | Todos os direitos reservados</p>
      </div>
    </footer>
  );
}

const style = {
  footer: {
    backgroundColor: '#2f7a3a',
    color: '#000000',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '1000px',
  },
  footerSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  footerItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    color: '#000000',
    marginTop: '24px',
  },
  footerItemLink: {
    color: '#000000',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    fontSize: '1em',
  },
  customIcon: {
    width: '16px',
    height: '16px',
    transition: 'transform 0.3s ease',
  },
  footerLogo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoCircle: {
    backgroundColor: '#ffffff',
    borderRadius: '50%',
    padding: '10px',
    width: '100px',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: '150%',
    height: 'auto',
    borderRadius: '50%',
  },
  footerBottom: {
    marginTop: '30px',
    textAlign: 'center',
    fontSize: '0.9em',
    color: '#000000',
  },
  responsiveFooterContent: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  responsiveFooterSection: {
    alignItems: 'center',
  },
  responsiveFooterItem: {
    marginTop: '12px',
    gap: '20px',
  },
  responsiveFooterLogo: {
    marginBottom: '20px',
  },
};

export default Footer;
