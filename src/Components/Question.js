import react from 'react';

const Question = ({ pergunta, options, id, value, onChange, active }) => {
  if (active === false) return null;
  return (
    <fieldset>
      <legend>{pergunta}</legend>

      {options.map((option) => (
        <label htmlFor={id} key={id}>
          <input
            type="radio"
            onChange={onChange}
            value={option}
            checked={option === value}
            id={id}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default Question;
