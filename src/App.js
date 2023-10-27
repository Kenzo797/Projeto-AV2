import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Card from './Card';
import AdicionarLivroForm from './AdicionarLivroForm';
import ListaDeLivros from './ListaDeLivros';


function App() {
  const [livros, setLivros] = useState([
    { titulo: 'O Hobbit', autor: 'J.R.R. Tolkien', ano: 1937 },
    { titulo: '1984', autor: 'George Orwell', ano: 1949 },
    { titulo: 'Dom Quixote', autor: 'Miguel de Cervantes', ano: 1605 },
  ]);

  const adicionarLivro = (novoLivro) => {
    setLivros([...livros, novoLivro]);
  };

  const removerLivro = (titulo) => {
    const novaLista = livros.filter((livro) => livro.titulo !== titulo);
    setLivros(novaLista);
  };

  return (
    <div className="App" style={{fontFamily: 'math', backgroundColor: '#131212', color: 'White' }}>
      <Container>
        <Row>
          <Col>
            <h1 className="my-4" style={{textAlign: 'center' }}>Livraria</h1>
          </Col>
        </Row>
        <Row style={{ marginTop: '30px', justifyContent: 'center' }}>
          <Col md={6} style={{textAlign: 'center' }}>
            <Card title="ADICIONAR LIVRO" className="mb-3">
              <AdicionarLivroForm onLivroAdicionado={adicionarLivro} />
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: '30px', justifyContent: 'center', marginBottom: '30px'}}>
          <Col md={6} style={{textAlign: 'center', marginTop: '30px', marginBottom: '30px'}}> 
            <Card title="Lista de Livros" style={{ marginTop: '30px', marginBottom: '30px', justifyContent: 'center' }}>
              <ListaDeLivros livros={livros} onRemoverLivro={removerLivro} style={{ marginBottom: '30px'}}/>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
