import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contato from './pages/Contato';
import AdicionarOng from './pages/AdicionarOng';
import AdicionarOuRemover from './pages/AdicionarOuRemover';
import Termo from './pages/Termo';
import TrabalheConosco from './pages/TrabalheConosco';
import Sobrenos from './pages/Sobrenos';
import ComoParticipar from './pages/ComoParticipar';
import ListaOngs from './pages/ListaOngs';
import Login from './pages/Login';
import EsqueceuSenha from './pages/EsqueceuSenha';
import CriarConta from './pages/CriarConta';

// Componente Layout para páginas que precisam do Header e Footer
function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

function App() {
  // Estado global para a lista de ONGs
  const [ongs, setOngs] = useState([]);

  return (
    <Router>
      <Routes>
        {/* Rotas para as páginas de login, esqueceu senha e criar conta, sem header e footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/esqueceu-senha" element={<EsqueceuSenha />} />
        <Route path="/criar-conta" element={<CriarConta />} />

        {/* Rotas com header e footer usando o Layout */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/contato" element={<Layout><Contato /></Layout>} />
        <Route
          path="/cadastre-sua-ong"
          element={
            <Layout>
              <AdicionarOng ongs={ongs} setOngs={setOngs} />
            </Layout>
          }
        />
        <Route path="/termos-de-uso" element={<Layout><Termo /></Layout>} />
        <Route path="/trabalhe-conosco" element={<Layout><TrabalheConosco /></Layout>} />
        <Route path="/sobre-nos" element={<Layout><Sobrenos /></Layout>} />
        <Route path="/como-participar" element={<Layout><ComoParticipar /></Layout>} />
        <Route
          path="/lista-de-ongs"
          element={
            <Layout>
              <ListaOngs ongs={ongs} setOngs={setOngs} />
            </Layout>
          }
        />
        <Route path="/adicionar-ou-remover" element={<Layout><AdicionarOuRemover /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
