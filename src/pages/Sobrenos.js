import React from 'react';
import entregando from '../assets/entregando.png';
import imagemSolidariedade from '../assets/Solidariedade.png';
import imagemSustentabilidade from '../assets/Sustentabilidade.png';
import imagemDignidade from '../assets/dignidade.png';
import imagemCompromisso from '../assets/Compromisso.png';
import maca from '../assets/maca.png';

function Sobrenos() {
  return (
    <div style={styles.pageContainer}>
      <SobreNos />
      <Valores />
      <NossaAbordagem />
    </div>
  );
}

function SobreNos() {
  return (
    <div style={styles.sectionContainer}>
      <h2 style={styles.sectionTitle}>SOBRE NÓS</h2>
      <div style={styles.sobreNosContent}>
        <div style={styles.sobreNosText}>
          <p>
            No Sabor Solidário, acreditamos que a solidariedade pode transformar vidas.
            Nosso objetivo é conectar ONGs que precisam de doações com beneficiários que buscam apoio.
            Criamos uma plataforma simples e eficiente que permite que as ONGs disponibilizem horários para receber doações,
            enquanto os beneficiários podem escolher o melhor momento para retirar o que precisam.
          </p>
        </div>
        <div style={styles.sobreNosImage}>
          <img src={maca} alt="Sabor Solidário" style={styles.imagemMaca} />
        </div>
      </div>
    </div>
  );
}

function Valores() {
  return (
    <div style={styles.valoresSection}>
      <h2 style={styles.sectionTitle}>NOSSOS VALORES</h2>
      <div style={styles.imagemValores}>
        <img src={entregando} alt="Valores" style={styles.imagem} />
      </div>
      <div style={styles.valoresGrid}>
        <div style={styles.valorItem}>
          <img src={imagemSolidariedade} alt="Solidariedade" style={styles.valorImagem} />
          <h3>Solidariedade</h3>
          <p>Acreditamos no poder da comunidade e na importância de cuidar uns dos outros.</p>
        </div>
        <div style={styles.valorItem}>
          <img src={imagemSustentabilidade} alt="Sustentabilidade" style={styles.valorImagem} />
          <h3>Sustentabilidade</h3>
          <p>Trabalhamos para reduzir o desperdício de alimentos e promover práticas de consumo consciente.</p>
        </div>
        <div style={styles.valorItem}>
          <img src={imagemDignidade} alt="Dignidade" style={styles.valorImagem} />
          <h3>Dignidade</h3>
          <p>Ajudamos a garantir que todas as pessoas tenham acesso a refeições de qualidade, servidas com respeito e dignidade.</p>
        </div>
        <div style={styles.valorItem}>
          <img src={imagemCompromisso} alt="Compromisso" style={styles.valorImagem} />
          <h3>Compromisso</h3>
          <p>Mantemos um engajamento constante com as comunidades, buscando entender suas necessidades e adaptar nossas ações para atendê-las com eficiência.</p>
        </div>
      </div>
    </div>
  );
}

function NossaAbordagem() {
  return (
    <div style={styles.sectionContainer}>
      <h2 style={styles.sectionTitle}>NOSSA ABORDAGEM</h2>
      <p style={styles.textoAbordagem}>
        Atuamos na interseção entre a redução do desperdício de alimentos e o apoio às comunidades vulneráveis. 
        Através de parcerias com entidades sociais, conseguimos transformar alimentos que seriam descartados em 
        refeições dignas para aqueles que mais precisam. Estamos comprometidos em atender lugares onde muitos se 
        sentem esquecidos, trazendo esperança e nutrição para as mesas de tantas famílias.
      </p>
    </div>
  );
}

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#fcffe0',
  },
  sectionContainer: {
    width: '100%',
    maxWidth: '900px',
    marginBottom: '40px',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#fcffe0',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '2.5em',
    color: '#4CAF50',
    marginBottom: '20px',
    fontWeight: 'bold',
    textShadow: '4px 4px 6px rgba(0, 0, 0, 0.2)',
  },
  sobreNosContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
  },
  sobreNosText: {
    fontSize: '1.2rem',
    color: 'green',
    maxWidth: '50%',
    textAlign: 'left',
  },
  sobreNosImage: {
    backgroundColor: '#ff9800',
    padding: '50px',
    borderRadius: '8px',
    maxWidth: '250px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  imagemMaca: {
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
  },
  valoresSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '60px 20px',
    backgroundColor: '#FF9800',
    borderRadius: '50px',
    textAlign: 'center',
    marginBottom: '40px',
    position: 'relative',
  },
  imagemValores: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px',
  },
  imagem: {
    width: '200px', // Ajustado para ser menor
    height: 'auto',
  },
  valoresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '20px',
    width: '80%',
    marginTop: '20px',
  },
  valorItem: {
    backgroundColor: '#4CAF50',
    borderRadius: '8px',
    padding: '20px',
    color: 'white',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  valorImagem: {
    maxWidth: '50px',
    height: 'auto',
    marginBottom: '10px',
  },
  textoAbordagem: {
    fontSize: '1.2em',
    lineHeight: '1.6',
    color: '#4CAF50',
    maxWidth: '700px',
    margin: '0 auto',
  },
};

export default Sobrenos;
