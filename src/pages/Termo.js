import React from 'react';

const Termo = () => {
  return (
    <div style={styles.pageBackground}> {/* Adiciona o fundo amarelo claro para toda a página */}
      <div style={styles.container}>
        <h1 style={styles.title}>TERMOS E CONDIÇÕES GERAIS DO USO DO SITE</h1>

        <h3 style={styles.subTitle}>1. Aceitação dos Termos</h3>
        <p style={styles.paragraph}>
          Ao acessar e utilizar nosso site, você declara que tem a idade mínima de 18 anos ou que possui o consentimento de um responsável legal. 
          Ao utilizar o site, você concorda em respeitar todos os termos e condições aqui descritos.
        </p>

        <h3 style={styles.subTitle}>2. Descrição dos Serviços</h3>
        <p style={styles.paragraph}>
          O site oferece uma plataforma para que beneficiários possam agendar horários para a coleta de alimentos disponibilizados pela ONG. 
          As informações sobre horários e disponibilidade são fornecidas pela ONG e podem ser alteradas sem aviso prévio.
        </p>

        <h3 style={styles.subTitle}>3. Cadastro de Usuário</h3>
        <p style={styles.paragraph}>
          Para agendar um horário, será necessário que você se registre como usuário. Ao se registrar, você concorda em fornecer 
          informações precisas, completas e atualizadas. Você é responsável por manter a confidencialidade de suas informações 
          de login e por todas as atividades que ocorrem sob sua conta.
        </p>

        <h3 style={styles.subTitle}>4. Uso do Site</h3>
        <p style={styles.paragraph}>
          Você concorda em usar o site apenas para fins legais e de acordo com todas as leis aplicáveis. É proibido:
        </p>
        <ul style={styles.list}>
          <li>Utilizar o site para qualquer finalidade fraudulenta ou não autorizada.</li>
          <li>Interferir na segurança ou no operacionamento do site.</li>
          <li>Enviar informações falsas ou enganosas.</li>
        </ul>

        <h3 style={styles.subTitle}>5. Propriedade Intelectual</h3>
        <p style={styles.paragraph}>
          Todo o conteúdo do site, incluindo textos, gráficos, logotipos, imagens e software, é de propriedade do Sabor Solidário 
          ou de seus licenciadores e está protegido por leis de direitos autorais e propriedade intelectual. Você não pode reproduzir, 
          modificar, distribuir ou utilizar qualquer conteúdo sem nossa autorização prévia.
        </p>

        <h3 style={styles.subTitle}>6. Limitação de Responsabilidade</h3>
        <p style={styles.paragraph}>
          O Sabor Solidário não será responsável por qualquer dano direto, indireto, incidental, especial ou consequencial decorrente 
          do uso ou da incapacidade de uso do site. As informações fornecidas no site são apenas informativas, e o Sabor Solidário 
          não garante a precisão, integridade ou atualidade dessas informações.
        </p>

        <h3 style={styles.subTitle}>7. Alterações nos Termos</h3>
        <p style={styles.paragraph}>
          Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão em vigor assim que 
          publicadas no site. Recomendamos que você revise periodicamente esta página para estar ciente de quaisquer alterações.
        </p>

        <h3 style={styles.subTitle}>8. Links para Outros Sites</h3>
        <p style={styles.paragraph}>
          Nosso site pode conter links para sites de terceiros. Não temos controle sobre esses sites e não nos responsabilizamos 
          por qualquer conteúdo ou práticas de privacidade de terceiros. A inclusão de qualquer link não implica endosso ou associação 
          de nossa parte com esses sites vinculados.
        </p>

        <h3 style={styles.subTitle}>9. Legislação Aplicável</h3>
        <p style={styles.paragraph}>
          Estes Termos de Uso são regidos pelas leis do Brasil, independentemente de conflitos de princípios legais. Você concorda 
          que se submeterá à jurisdição exclusiva dos tribunais de São Paulo, São Paulo.
        </p>

        <h3 style={styles.subTitle}>10. Contato</h3>
        <p style={styles.paragraph}>
          Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco através do email 
          SaborSolidario@gmail.com ou pelo telefone (11) 00000-7129.
        </p>
      </div>
    </div>
  );
};

const styles = {
  pageBackground: {
    backgroundColor: '#f9f9e4', // Cor de fundo amarelo claro para toda a página
    minHeight: '100vh',
    padding: '20px 0',
  },
  container: {
    padding: '40px',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#f9f9e4', // Cor de fundo amarelo claro para o conteúdo
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    color: '#6abd45',
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  subTitle: {
    color: '#000',
    fontSize: '20px',
    marginTop: '20px',
  },
  paragraph: {
    marginBottom: '20px',
  },
  list: {
    paddingLeft: '20px',
  },
};

export default Termo;
