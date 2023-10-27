import React from 'react';
import Livro from './Livro';

function ListaDeLivros(props) {
  const { livros, onRemoverLivro } = props;

  const livrosRenderizados = livros.map((livro, index) => (
    <Livro
      key={index}
      titulo={livro.titulo}
      autor={livro.autor}
      ano={livro.ano}
      onRemoverLivro={onRemoverLivro}
    />
  ));

  return (
    <div className="lista-de-livros">
      {livrosRenderizados}
    </div>
  );
}

export default ListaDeLivros;
