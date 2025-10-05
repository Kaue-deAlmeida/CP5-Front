import { ShoppingCart } from 'lucide-react';

export default function CardProduto({ produto, onComprar, temaEscuro }) {
  return (
    <div className={`rounded-lg overflow-hidden border border-gray-200 hover:border-blue-500 transition duration-300 transform hover:scale-105 hover:shadow-xl group ${`backdrop-blur-md ${
  temaEscuro 
    ? 'bg-gray-900/95 border-gray-700 text-white' 
    : 'bg-white/95 border-gray-200 text-black'
}`}`}>
      <div className="relative overflow-hidden">
        <img 
          src={produto.imagem} 
          alt={produto.nome}
          className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
        />
        <span className={`absolute top-4 right-4 bg-blue-600 px-3 py-1 rounded-full text-sm ${`fixed  backdrop-blur-md z-50 border-b shadow-sm ${
  temaEscuro 
    ? 'bg-gray-900/95 border-gray-700 text-white' 
    : 'bg-white/95 border-gray-200 text-black'
}`}`}>
          {produto.categoria}
        </span>
      </div>
      <div className="p-6">
        <h3 className={`text-2xl font-semibold mb-2 text-gray-900 ${
  temaEscuro 
    ? ' text-white' 
    : ' text-black'
}`}>{produto.nome}</h3>
        <p className="text-gray-600 mb-4">{produto.descricao}</p>
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold text-blue-600">
            R$ {produto.preco.toFixed(2)}
          </span>
          <button 
            onClick={onComprar}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <ShoppingCart size={18} />
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}