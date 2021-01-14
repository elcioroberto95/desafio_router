import { react, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Produto.module.css';
const Produto = () => {
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (erro) {
        setError(`Um erro foi encontrado`);
      } finally {
        setLoading(false);
      }
    }
    fetchData(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);
  if (loading) return <p>Loading....</p>;
  if (error) return <p>{error}</p>;
  if (produto === null) return null;

  return (
    <section className={styles.produto}>
      <div>
        {produto.fotos.map((foto) => (
          <img src={foto.src} alt={foto.title} />
        ))}
      </div>
      <div>
        <h1>{produto.nome}</h1>
        <span className={styles.preco}>R${produto.preco}</span>
        <p>{produto.descricao}</p>
      </div>
    </section>
  );
};
export default Produto;
