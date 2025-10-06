import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categorias from './components/Categorias';
import Produtos from './components/Produtos';
import Sobre from './components/Sobre';
import Contato from './components/Contato';
import Footer from './components/Footer';



function App() {
  const [cartCount, setCartCount] = useState(0);
  const [temaEscuro, setTemaEscuro] = useState(false); 

  const alternarTema = () => {
    setTemaEscuro(!temaEscuro); 
  };

  const adicionarAoCarrinho = () => {
    setCartCount(cartCount + 1);
  };

  return (
  <div className={temaEscuro ? "bg-gray-900 text-gray-100 min-h-screen" : "bg-gray-50 text-gray-900 min-h-screen"}>
    <Navbar 
      cartCount={cartCount}
      temaEscuro={temaEscuro}
      onAlternarTema={alternarTema}
    />
    <Hero temaEscuro={temaEscuro} />
    <Categorias temaEscuro={temaEscuro} />
    <Produtos temaEscuro={temaEscuro} onAdicionarCarrinho={adicionarAoCarrinho} />
    <Sobre temaEscuro={temaEscuro} />
    <Contato temaEscuro={temaEscuro} />
    <Footer temaEscuro={temaEscuro} />
  </div>
);
}

export default App;
