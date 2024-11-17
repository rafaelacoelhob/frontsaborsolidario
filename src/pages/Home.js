import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import carrosel1 from '../assets/carrosel1.jpeg';
import carrosel2 from '../assets/carrosel2.jpeg';
import carrosel3 from '../assets/carrosel3.jpeg';
import caixaImage from '../assets/caixa.png';
import madeiraImage from '../assets/madeira.png';
import sacolaImage from '../assets/sacola.png';
import rankingImage from '../assets/ranking.jpeg';

function Carousel() {
  const images = [
    { 
      src: carrosel1, 
      text: "A conexão entre quem PODE DOAR e quem PRECISA", 
      textStyle: styles.textOverlayLeft 
    },
    { 
      src: carrosel2, 
      text: "Contribua para um futuro SEM FOME", 
      textStyle: styles.textOverlayRight 
    },
    { 
      src: carrosel3, 
      text: "Cada doação conta para um MUNDO MELHOR", 
      textStyle: styles.textOverlayLeft 
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); 
    return () => clearInterval(interval); 
  }, [nextSlide]);

  return (
    <div style={styles.carouselContainer}>
      <button onClick={prevSlide} style={styles.navButtonLeft}>‹</button>

      <div style={styles.carouselImageContainer}>
        <img
          src={images[currentImageIndex].src}
          alt="Carrossel"
          style={styles.carouselImage}
        />
        <div style={images[currentImageIndex].textStyle}>
          {images[currentImageIndex].text}
        </div>
      </div>

      <button onClick={nextSlide} style={styles.navButtonRight}>›</button>
    </div>
  );
}

function MainContent() {
  return (
    <main>
      <Carousel />
      <div style={styles.headerSection}>
        <h1 style={styles.title}>Organize suas doações: a agenda</h1>
        <h1 style={styles.title}>que conecta ONGs e beneficiários!</h1>
        <div style={styles.buttonContainer}>
          <Link to="/lista-de-ongs" style={styles.ctaButton}>VEJA A LISTA DE ONGs</Link>
          <Link to="/login" style={styles.ctaButton}>CADASTRE SUA ONG</Link>
        </div>
      </div>
      
      <div style={styles.statsSection}>
        <div style={styles.statsGrid}>
          <div style={styles.statBox}>
            <h2 style={styles.statNumber}>12.58 MILHÕES</h2>
            <p style={styles.statText}>TONELADAS DE ALIMENTOS</p>
            <p style={styles.statText}>SÃO DESPERDIÇADOS POR</p>
            <p style={styles.statText}>ANO NO BRASIL</p>
          </div>
          <div style={styles.statBox}>
            <h2 style={styles.statNumber}>60 KG</h2>
            <p style={styles.statText}>DE COMIDA SÃO</p>
            <p style={styles.statText}>DESPERDIÇADAS</p>
            <p style={styles.statText}>POR CADA BRASILEIRO</p>
            <p style={styles.statText}>POR ANO</p>
          </div>
          <div style={styles.statBox}>
            <h2 style={styles.statNumber}>125.2 MILHÕES</h2>
            <p style={styles.statText}>DE BRASILEIROS ESTÃO EM</p>
            <p style={styles.statText}>SITUAÇÃO DE INSEGURANÇA</p>
            <p style={styles.statText}>ALIMENTAR</p>
          </div>
        </div>
        <p style={styles.footnote}>
          * Dados do relatório FAO de 2021 e Rede Brasileira de Pesquisa em
          Soberania e Segurança Alimentar e Nutricional (Rede PENSSAN)
        </p>
      </div>

      <Ranking />

      <div style={styles.contentSection}>
        <div style={styles.textImageContainer}>
          <div style={styles.textContainer}>
            <h2 style={styles.sectionTitle}>
              No Brasil, 125 milhões de pessoas vivem em situação de insegurança alimentar.
            </h2>
            <p style={styles.sectionText}>
              A ONG Sabor Solidário, atua desde 2024 auxiliando pessoas em
              situação de insegurança alimentar através do combate ao desperdício
              de alimentos. <b>Mas você sabe o que significa insegurança alimentar?</b>
            </p>
            <p style={styles.sectionText}>
              Estado de insegurança alimentar é quando não há a garantia de que teremos o que comer na próxima refeição. Uma situação inaceitável especialmente aqui no Brasil,<b> que bate recordes no agronegócio e desperdiçou 23,6 milhões de toneladas de alimentos em 2019.</b>
            </p>
            <p style={styles.sectionText}>
              Faça sua doação com a ONG Sabor Solidário e colabore com nosso
              trabalho no combate ao desperdício de alimentos.
            </p>
            <p style={styles.sectionHighlight}>
              <b>Hoje, através de entidades sociais parceiras, ajudamos a complementar
              a refeição de pessoas</b> de forma digna e nutritiva, em lugares onde
              muitos são esquecidos.
            </p>
          </div>

          <div style={styles.imageContentContainer}>
            <img
              src={sacolaImage}
              alt="Pessoa segurando uma sacola de alimentos"
              style={styles.image}
            />
          </div>
        </div>
      </div>

      <div style={styles.cardSection}>
        <div style={styles.cardGrid}>
          <div style={styles.card}>
            <img src={caixaImage}
              alt="ONG: Disponibilize seus horários"
              style={styles.cardImage}
            />
            <h3 style={styles.tButton}>ONG: Disponibilize seus horários</h3>
            <div style={styles.cardBody}>
              <p style={styles.cardText}>
                Ajude a organizar as doações! Insira os horários em que sua ONG pode receber doações.
              </p>
            </div>
          </div>

          <div style={styles.card}>
            <img
              src={madeiraImage}
              alt="Beneficiário: Escolha seus horários"
              style={styles.cardImage}
            />
            <h3 style={styles.taButton}>Doador: Escolha uma ONG para doar</h3>
            <p style={styles.cardText}>
              Encontre o horário mais conveniente para retirar suas doações.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

function Ranking() {
  return (
    <section style={styles.ranking}>
      <img src={rankingImage} alt="Ranking de Alimentos Doados" style={styles.image} />
    </section>
  );
}

const styles = {
  carouselContainer: {
    position: 'relative',
    width: '100%',
    height: '89vh',
    overflow: 'hidden',
    textAlign: 'center',
    marginBottom: '10px',
    margin: '0',
  },
  carouselImageContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  textOverlayLeft: {
    position: 'absolute',
    top: '50%', 
    left: '50px',
    transform: 'translateY(-50%)',
    color: 'white',
    padding: '20px 30px',
    fontSize: '4rem',
    fontWeight: 'bold',
    textAlign: 'left',
    maxWidth: '40%',
    lineHeight: '1.2',
  },
  textOverlayRight: {
    position: 'absolute',
    top: '50%',
    right: '50px',
    transform: 'translateY(-50%)',
    color: 'white',
    padding: '20px 30px',
    fontSize: '4rem',
    fontWeight: 'bold',
    textAlign: 'right',
    maxWidth: '40%',
    lineHeight: '1.2',
  },
  navButtonLeft: {
    position: 'absolute',
    top: '50%',
    left: '20px',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    border: 'none',
    fontSize: '3rem',
    color: '#fff',
    cursor: 'pointer',
    zIndex: 1,
  },
  navButtonRight: {
    position: 'absolute',
    top: '50%',
    right: '20px',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    border: 'none',
    fontSize: '3rem',
    color: '#fff',
    cursor: 'pointer',
    zIndex: 1,
  },
  headerSection: {
    backgroundColor: '#ff9900',
    textAlign: 'center',
    padding: '4rem 5rem 5rem 2rem',
    color: '#fcffe0',
    margin: '0',
  },
  title: {
    fontSize: '40px',
    marginBottom: '1.6rem',
    wordSpacing: '1px',
    lineHeight: '0.5',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '1.5rem',
  },
  ctaButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '1rem 2rem',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  statsSection: {
    backgroundColor: '#4CAF50',
    padding: '2rem 2rem 5rem 2rem',
    textAlign: 'center',
    color: '#FCFFE0',
  },
  statsGrid: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    flexWrap: 'wrap',
  },
  statBox: {
    padding: '1rem',
    margin: '2rem',
    borderRadius: '8px',
    flex: '1',
    textAlign: 'center',
    minWidth: '200px',
    maxWidth: '300px',
  },
  statNumber: {
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  statText: {
    fontSize: '1rem',
    margin: '0rem',
  },
  footnote: {
    marginTop: '1.9rem',
    fontSize: '0.9rem',
    color: 'white',
    opacity: 0.8,
    margin: '0rem',
  },
  contentSection: {
    padding: '20px',
    backgroundColor: '#4CAF50',
    marginTop: '-20px',
  },
  textImageContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  textContainer: {
    flex: '1 1 60%',
    marginRight: '0rem',
  },
  sectionTitle: {
    color: '#FCFFE0',
    fontSize: '2rem',
    marginBottom: '10px',
  },
  sectionText: {
    color: '#FCFFE0',
    fontSize: '1.2rem',
    lineHeight: '1.8',
  },
  sectionHighlight: {
    fontWeight: 'bold',
    color: '#FCFFE0',
    marginTop: '1rem',
    fontSize: '1.2rem',
  },
  imageContentContainer: {
    flex: '0 0 35%',
    textAlign: 'justify',
  },
  image: {
    width: '100%',
    borderRadius: '10px',
  },
  cardSection: {
    backgroundColor: '#4CAF50',
    padding: '40px 20px ',
    textAlign: 'center',
  },
  cardGrid: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '20px',
  },
  card: {
    backgroundColor: '#FF9800',
    borderRadius: '10px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
    overflow: 'hidden',
    width: '280px',
    textAlign: 'center',
    transition: 'transform 0.2s ease-in-out',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    justifyContent: 'center',
    alignItems: 'center',    
  },
  cardBody: {
    padding: '30px 20px',  
    width: '100%',
  },
  cardText: {
    fontSize: '1rem',
    color: '#FCFFE0',
    marginTop: '15px'
  },
  tButton: {
    backgroundColor: '#357A38',
    color: 'white',
    padding: '0rem 2rem',
    border: 'none',
    borderRadius: '25px',
    fontSize: '1.1rem',
    marginTop: '2rem',
    textDecoration: 'none', 
  },
  taButton: {
    backgroundColor: '#357A38',
    color: 'white',
    padding: '0rem 2rem',
    border: 'none',
    borderRadius: '25px',
    fontSize: '1.1rem',
    marginTop: '2rem',
  },
  ranking: { 
    padding: '2rem', 
    backgroundColor: '#ff9900', 
    color: 'white', 
    textAlign: 'center',
    maxWidth: '100%',
    margin: '0 auto',
  },
};

export default function Home() {
  return (
    <div>
      <MainContent />
    </div>
  );
}
