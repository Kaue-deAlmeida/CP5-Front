import CardProduto from './CardProduto';

export default function Produtos({ onAdicionarCarrinho , temaEscuro }) {
  const produtos = [
    {
      id: 1,
      nome: "Produto Premium 1",
      preco: 299.90,
      descricao: "Produto de alta qualidade com design moderno",
      imagem: "https://via.placeholder.com/300x300/e0e7ff/4f46e5?text=Produto+1",
      categoria: "Eletrônicos"
    },
    {
      id: 2,
      nome: "Produto Premium 2",
      preco: 199.90,
      descricao: "Perfeito para o seu dia a dia",
      imagem: "https://via.placeholder.com/300x300/ddd6fe/7c3aed?text=Produto+2",
      categoria: "Acessórios"
    },
    {
      id: 3,
      nome: "Produto Premium 3",
      preco: 399.90,
      descricao: "Tecnologia de ponta ao seu alcance",
      imagem: "https://via.placeholder.com/300x300/d1fae5/10b981?text=Produto+3",
      categoria: "Eletrônicos"
    },
    {
      id: 4,
      nome: "Produto Premium 4",
      preco: 149.90,
      descricao: "Estilo e funcionalidade combinados",
      imagem: "https://via.placeholder.com/300x300/fce7f3/ec4899?text=Produto+4",
      categoria: "Moda"
    },
    {
      id: 5,
      nome: "Produto Premium 5",
      preco: 249.90,
      descricao: "Qualidade que você pode confiar",
      imagem: "https://via.placeholder.com/300x300/fef3c7/f59e0b?text=Produto+5",
      categoria: "Casa"
    },
    {
      id: 6,
      nome: "Produto Premium 6",
      preco: 349.90,
      descricao: "Inovação e design em um só produto",
      imagem: "https://via.placeholder.com/300x300/fed7aa/f97316?text=Produto+6",
      categoria: "Eletrônicos"
    }
  ];

  return (
    <section id="produtos" cclassName={`fixed w-full backdrop-blur-md z-50 border-b shadow-sm ${
  temaEscuro 
    ? 'bg-gray-900/95 border-gray-700' 
    : 'bg-white/95 border-gray-200'
}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-4xl font-bold mb-12 text-center ${
  temaEscuro 
    ? 'text-gray-100' 
    : 'text-gray-900'
}
`}>Nossos Produtos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {produtos.map((produto, index) => (
            <CardProduto 
              key={index}
              produto={produto} 
              onComprar={onAdicionarCarrinho}
              temaEscuro={temaEscuro}
            />
          ))}
        </div>
      </div>
    </section>
  );
}