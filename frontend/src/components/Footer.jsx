export default function Footer({ temaEscuro }) {
  return (
    <footer className={`${temaEscuro ? "bg-gray-800" : "bg-blue-50"} py-8 px-4 border-t border-gray-200 text-center text-gray-600`}>
      <p>© 2025 Kauê's Store. Todos os direitos reservados.</p>
    </footer>
  );
}