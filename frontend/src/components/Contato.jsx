export default function Contato({ temaEscuro }) {
  return (
    <section id="contato" className={`py-20 px-4 sm:px-6 lg:px-8 ${temaEscuro ? "bg-gray-800" : "bg-gray-50"}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`text-4xl font-bold mb-6 ${temaEscuro ? "text-gray-100" : "text-gray-900"}`}>Entre em Contato</h2>
        <p className={`text-lg mb-8 ${temaEscuro ? "text-gray-300" : "text-gray-600"}`}>
          Tem alguma dúvida? Estamos aqui para ajudar!
        </p>
        <div className="flex justify-center gap-6">
          <a 
            href="mailto:contato@cp5store.com" 
            className="bg-gray-200 hover:bg-blue-600 hover:text-white text-gray-700 px-6 py-4 rounded-lg transition duration-300 transform hover:scale-110"
          >
            📧 Email
          </a>
          <a 
            href="https://wa.me/5511999999999" 
            className="bg-gray-200 hover:bg-green-500 hover:text-white text-gray-700 px-6 py-4 rounded-lg transition duration-300 transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 WhatsApp
          </a>
          <a 
            href="tel:+5511999999999" 
            className="bg-gray-200 hover:bg-purple-600 hover:text-white text-gray-700 px-6 py-4 rounded-lg transition duration-300 transform hover:scale-110"
          >
            📞 Telefone
          </a>
        </div>
      </div>
    </section>
  );
}