import react, { useState } from 'react';
const formFields = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    id: 'senha',
    label: 'Senha',
    type: 'password',
  },
  {
    id: 'cep',
    label: 'Cep',
    type: 'text',
  },
  {
    id: 'rua',
    label: 'Rua',
    type: 'text',
  },
  {
    id: 'numero',
    label: 'Numero',
    type: 'text',
  },
  {
    id: 'bairro',
    label: 'Bairro',
    type: 'text',
  },
  {
    id: 'cidade',
    label: 'Cidade',
    type: 'text',
  },
  {
    id: 'estado',
    label: 'Estado',
    type: 'text',
  },
];
const Cadastro = () => {
  const [form, setForm] = useState(
    formFields.reduce((acc, field) => {
      return { ...acc, [field.id]: '' };
    }, {}),
  );
  const [response, setResponse] = useState(null);
  const handleChange = ({ target }) => {
    setForm({ ...form, [target.id]: target.value });
  };
  const sendForm = (event) => {
    event.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((response) => setResponse(response));
  };

  return (
    <form onSubmit={sendForm}>
      {formFields.map(({ id, label, type }) => (
        <div key={id}>
          <label key={id} htmlFor={id}>
            {label}
          </label>
          <input
            type={type}
            id={id}
            type={type}
            onChange={handleChange}
            value={form[id]}
          />
        </div>
      ))}
      <button>Enviar</button>
      {response && response.ok && <p>Usuario criado com sucesso</p>}
    </form>
  );
};
export default Cadastro;
