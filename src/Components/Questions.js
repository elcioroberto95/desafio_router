import react, { useEffect, useState } from 'react';
import Question from './Question';
const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

const Questions = () => {
  const [respostas, setRespostas] = useState(
    perguntas.reduce((acc, field) => {
      return { ...acc, [field.id]: '' };
    }, {}),
  );
  const [slide, setSlide] = useState(0);
  const [resultado, setResultado] = useState(null);
  const handleChange = ({ target }) => {
    setRespostas({ ...respostas, [target.id]: target.value });
  };
  const resultadoFinal = () => {
    const corretas = perguntas.filter(({ id, resposta }) => {
      return respostas[id] === resposta;
    });
    setResultado(
      `voce acertou ${corretas.length} de ${perguntas.length} perguntas.`,
    );
  };

  const handleClick = () => {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      resultadoFinal();
    }
  };
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      {perguntas.map((pergunta, index) => (
        <Question
          active={slide === index}
          value={respostas[pergunta.id]}
          key={pergunta.id}
          onChange={handleChange}
          {...pergunta}
        />
      ))}
      {resultado ? (
        <p>{resultado}</p>
      ) : (
        <button onClick={handleClick}>Proxima</button>
      )}
    </form>
  );
};
export default Questions;
