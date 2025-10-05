export default function Hero({ temaEscuro }) {
  return (
    <section id="inicio" className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${temaEscuro ? "bg-gray-800" : "bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50"}`}>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
          Bem-vindo à <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Kauê's Store</span>
        </h2>
        <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Produtos premium com qualidade excepcional e os melhores preços do mercado
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a 
            href="#produtos" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Ver Produtos
          </a>
          <a 
            href="#sobre" 
            className="border-2 border-gray-300 hover:border-blue-600 text-gray-600 hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105"
          >
            Saiba Mais
          </a>
        </div>
      </div>
    </section>
  );
}