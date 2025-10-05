export default function Sobre({ temaEscuro }) {
  return (
    <section id="sobre" className={`py-20 px-4 sm:px-6 lg:px-8 ${temaEscuro ? "bg-gray-800" : "bg-white"}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`text-4xl font-bold mb-6 ${temaEscuro ? "text-gray-100" : "text-gray-900"}`}>Sobre a Kauê's Store</h2>
        <p className={`text-lg leading-relaxed mb-6 ${temaEscuro ? "text-gray-300" : "text-gray-700"}`}>
          Somos uma loja comprometida em oferecer produtos de alta qualidade com os melhores preços do mercado. 
          Nossa missão é proporcionar uma experiência de compra excepcional para nossos clientes.
        </p>
        <p className={`text-lg leading-relaxed ${temaEscuro ? "text-gray-300" : "text-gray-700"}`}>
          Com anos de experiência no mercado, garantimos produtos originais, entrega rápida e atendimento de excelência.
        </p>
      </div>
    </section>
  );
}