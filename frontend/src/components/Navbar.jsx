import { useState } from 'react';
import { Menu, X, ShoppingCart, Search, User, Heart, Moon, Sun } from 'lucide-react';

export default function Navbar({ cartCount, temaEscuro, onAlternarTema }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`fixed w-full backdrop-blur-md z-50 border-b shadow-sm ${
  temaEscuro 
    ? 'bg-gray-900/95 border-gray-700' 
    : 'bg-white/95 border-gray-200'
}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:from-purple-600 hover:via-pink-600 hover:to-blue-600 transition-all duration-500 cursor-pointer">
            Kauê's Store
          </h1>
          
          <ul className="hidden md:flex gap-8">
            <li>
              <a href="#inicio" className={`relative transition duration-300 group ${
  temaEscuro ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
}`}>
                Início
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a href="#produtos" className={`relative transition duration-300 group ${
  temaEscuro ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
}`}>
                Produtos
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a href="#sobre" className={`relative transition duration-300 group ${
  temaEscuro ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
}`}>
                Sobre
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a href="#contato" className={`relative transition duration-300 group ${
  temaEscuro ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
}`}>
                Contato
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <button className={`relative transition duration-300 group ${
  temaEscuro ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
}`}>
              <Search size={20} />
            </button>
            <button className={`hidden md:block transition duration-300 transform hover:scale-110 ${
  temaEscuro ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
}`}>
              <User size={20} />
            </button>
            <button className={`hidden md:block transition duration-300 transform hover:scale-110 ${
  temaEscuro ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
}`}>
              <Heart size={20} />
            </button>
            <button className={`hidden md:block relative transition duration-300 transform hover:scale-110 ${
  temaEscuro ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
}`}>
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
                onClick={onAlternarTema}
                className={`hidden md:block relative transition duration-300 transform hover:scale-110 ${
  temaEscuro ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
}`}
>
              {temaEscuro ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              className="md:hidden text-gray-700 hover:text-blue-600 transition duration-300"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {/* ícone ou texto do botão */}
              {menuOpen ? "Fechar" : "Menu"}
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <a href="#inicio" className="block text-gray-700 hover:text-blue-600 transition duration-300 py-2">Início</a>
            <a href="#produtos" className="block text-gray-700 hover:text-blue-600 transition duration-300 py-2">Produtos</a>
            <a href="#sobre" className="block text-gray-700 hover:text-blue-600 transition duration-300 py-2">Sobre</a>
            <a href="#contato" className="block text-gray-700 hover:text-blue-600 transition duration-300 py-2">Contato</a>
          </div>
        </div>
      )}
    </header>
    );
  }
