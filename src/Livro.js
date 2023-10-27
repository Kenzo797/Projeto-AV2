import React from 'react';

function Livro(props) {
  const { titulo, autor, ano, onRemoverLivro } = props;

  const handleRemoverLivro = () => {
    onRemoverLivro(titulo); 
  };

  return (
    <div style={{textAlign: 'center', marginTop: '30px', marginBottom: '30px'}}>
      <h3>{titulo}</h3>
      <p>Autor: {autor}</p>
      <p>Ano: {ano}</p>
      <button onClick={handleRemoverLivro}>Remover Livro</button>
    </div>
  );
}

export default Livro;

