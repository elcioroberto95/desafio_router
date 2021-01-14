import react, { useState, useEffect } from 'react';
import styles from './Produtos.module.css';
import { Link } from 'react-router-dom';
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
        <div key={produto.id} className={styles.produto}>
          <Link to={`produto/${produto.id}`} key={produto.id}>
            <img src={produto.fotos[0].src} alt={produto.nome} />
            <h1>{produto.nome}</h1>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Produtos;
