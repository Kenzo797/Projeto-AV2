import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

function AdicionarLivroForm(props) {
  const [novoLivro, setNovoLivro] = useState({ titulo: '', autor: '', ano: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNovoLivro({ ...novoLivro, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onLivroAdicionado(novoLivro);
    setNovoLivro({ titulo: '', autor: '', ano: '' });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="titulo">Título do Livro</Label>
        <Input
          type="text"
          name="titulo"
          id="titulo"
          value={novoLivro.titulo}
          onChange={handleInputChange}
          placeholder="Digite o título do livro"
        />
      </FormGroup>
      <FormGroup>
        <Label for="autor">Autor</Label>
        <Input
          type="text"
          name="autor"
          id="autor"
          value={novoLivro.autor}
          onChange={handleInputChange}
          placeholder="Digite o nome do autor"
        />
      </FormGroup>
      <FormGroup>
        <Label for="ano">Ano</Label>
        <Input
          type="text"
          name="ano"
          id="ano"
          value={novoLivro.ano}
          onChange={handleInputChange}
          placeholder="Digite o ano de publicação"
        />
      </FormGroup>
      <Button>Adicionar Livro</Button>
    </Form>
  );
}

export default AdicionarLivroForm;
