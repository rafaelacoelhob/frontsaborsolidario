import React, { useState } from 'react';
import axios from 'axios'; // Biblioteca para requisições HTTP

import comecoImage from '../assets/comeco.png';
import enderecoImage from '../assets/endereco.png';
import instaImage from '../assets/insta.png';
import linkImage from '../assets/link.png';
import mensagemImage from '../assets/mensagem.png';
import telefoneImage from '../assets/telefone.png';

function Contato() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [status, setStatus] = useState(''); // Para exibir mensagens de status

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            // Enviar os dados para o backend
          await axios.post('https://backendseusite.onrender.com/api/messages', {
                nome,
                email,
                mensagem,
            });

            // Mostrar sucesso e resetar o formulário
            setStatus('Mensagem enviada com sucesso!');
            setNome('');
            setEmail('');
            setMensagem('');
        } catch (error) {
            console.error('Erro ao enviar mensagem:', error);
            setStatus('Erro ao enviar mensagem. Tente novamente.');
        }
    };

    const handleInstagramClick = () => {
        window.open('https://www.instagram.com/saborsolidariooficial/', '_blank');
    };

    const handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/in/saborsolid%C3%A1rio/', '_blank');
    };

    return (
        <main style={styles.mainContainer}>
            <div style={styles.headerContainer}>
                <img src={comecoImage} alt="Imagem de Contato" style={styles.headerImage} />
            </div>

            <h1 style={styles.title}>CONTATO</h1>
            <p style={styles.description}>
                Obrigado por visitar nosso site! Se você tiver alguma dúvida, sugestão ou quiser falar conosco, estamos aqui para ajudar.
            </p>

            <div style={styles.contactGrid}>
                <div style={styles.contactBox}>
                    <img src={mensagemImage} alt="Ícone de E-mail" style={styles.icon} />
                    <p style={styles.contactType}>E-MAIL</p>
                    <a href="mailto:SaborSolidario@gmail.com" style={styles.emailLink}>
                        SaborSolidario@gmail.com
                    </a>
                </div>
                <div style={styles.contactBox}>
                    <img src={telefoneImage} alt="Ícone de Telefone" style={styles.icon} />
                    <p style={styles.contactType}>NÚMERO DE TELEFONE</p>
                    <p style={styles.contactInfo}>(11) 1234-5678</p>
                </div>
                <div style={styles.contactBox}>
                    <img src={enderecoImage} alt="Ícone de Endereço" style={styles.icon} />
                    <p style={styles.contactType}>ENDEREÇO</p>
                    <p style={styles.contactInfo}>Rua Antonio Céspede, 514, Bairro, Cidade - Estado, CEP 09000-490</p>
                </div>
                <div style={styles.contactBox}>
                    <div style={styles.socialIcons}>
                        <img
                            src={instaImage}
                            alt="Ícone do Instagram"
                            style={styles.icon}
                            onClick={handleInstagramClick}
                        />
                        <img
                            src={linkImage}
                            alt="Ícone do LinkedIn"
                            style={{ ...styles.icon, marginLeft: '10px' }}
                            onClick={handleLinkedInClick}
                        />
                    </div>
                    <p style={styles.contactType}>REDES SOCIAIS</p>
                    <p style={styles.contactInfo}>Siga nossas redes sociais para nos acompanhar</p>
                </div>
            </div>

            <h2 style={styles.subtitle}>ENTRE EM CONTATO CONOSCO</h2>
            <p style={styles.formDescription}>
                Se você tiver alguma dúvida, sugestão ou feedback, fique à vontade para nos enviar uma mensagem.
            </p>

            <form style={styles.form} onSubmit={handleFormSubmit}>
                <label style={styles.label}>
                    NOME
                    <input
                        type="text"
                        style={styles.input}
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </label>
                <label style={styles.label}>
                    E-MAIL
                    <input
                        type="email"
                        style={styles.input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label style={styles.label}>
                    MENSAGEM
                    <textarea
                        style={styles.textarea}
                        value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)}
                        required
                    ></textarea>
                </label>
                <button type="submit" style={styles.button}>
                    ENVIAR
                </button>
            </form>

            {status && <p style={styles.statusMessage}>{status}</p>}
        </main>
    );
}

const styles = {
  mainContainer: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#FFFBEA',
  },
  headerContainer: {
    position: 'relative',
    textAlign: 'center',
    marginBottom: '20px',
  },
  headerImage: {
    width: '100vw',
    height: '100%',
    maxHeight: '200px',
    objectFit: 'cover',
    position: 'relative',
    top: '10px',
    zIndex: 0,
    marginLeft: 'calc(-50vw + 50%)',
  },
  title: {
    fontSize: '1.5rem',
    color: '#4CAF50',
    marginBottom: '10px',
    textShadow: '4px 4px 6px rgba(0, 0, 0, 0.2)',
  },
  description: {
    fontSize: '1rem',
    color: '#075C0A',
    marginBottom: '20px',
    maxWidth: '300px',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: 'bold',
  },
  contactGrid: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    maxWidth: '600px',
    margin: '0 auto',
  },
  contactBox: {
    backgroundColor: '#4CAF50',
    color: '#FFF',
    padding: '20px',
    borderRadius: '10px',
    width: '180px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  contactType: {
    fontSize: '1rem',
    fontWeight: 'bold',
    marginTop: '10px',
    marginBottom: '5px',
  },
  contactInfo: {
    fontSize: '0.9rem',
    marginTop: '5px',
  },
  icon: {
    width: '50px',
    height: '50px',
    cursor: 'pointer',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#4CAF50',
    margin: '30px 0 10px',
  },
  formDescription: {
    fontSize: '1rem',
    color: '#333',
    marginBottom: '20px',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  emailLink: {
    color: '#FFFFFF',
    textDecoration: 'none',
    fontSize: '0.9rem',
    marginTop: '5px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '400px',
    margin: '0 auto',
    backgroundColor: '#FF9800',
    padding: '30px',
    borderRadius: '10px',
  },
  label: {
    fontSize: '1rem',
    color: '#075C0A',
    textAlign: 'left',
    display: 'block',
  },
  input: {
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
    backgroundColor: '#FFFBEA',
  },
  textarea: {
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    resize: 'vertical',
    width: '100%',
    height: '100px',
    backgroundColor: '#FFFBEA',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: '#FFF',
    padding: '0.75rem',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'center',
    marginTop: '20px',
    width: '100px',
    alignSelf: 'center',
  },
};

export default Contato;
