export default function Categorias({ temaEscuro }) {
  const categorias = ["Todos", "Eletrônicos", "Acessórios", "Moda", "Casa"];

  return (
    <section cclassName={`fixed w-full backdrop-blur-md z-50 border-b shadow-sm ${
  temaEscuro 
    ? 'bg-gray-900/95 border-gray-700' 
    : 'bg-white/95 border-gray-200'
}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {categorias.map((categoria) => (
            <button
              className={`px-6 py-2 rounded-full transition duration-300 transform hover:scale-105 ${
                temaEscuro
                  ? 'bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white'
              }`}
            >
              {categoria}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}