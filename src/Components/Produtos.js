import react, { useState, useEffect } from 'react';

const Produtos = () => {
  const [produtos, setProdutos] = useState(null);
  useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/`)
      .then((response) => response.json())
      .then((json) => setProdutos(json));
  }, []);
  if (produtos === null) return null;

  return (
    <section className={styles.produtos}>
      {produtos.map((produto) => (
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <img src={produto.fotos[0].src} alt={produto.nome} />
          <h1>{produto.nome}</h1>
        </Link>
      ))}
    </section>
  );
};

export default Produtos;
