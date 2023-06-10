// import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import './CardAula.css';

let nomeAula;
// let desc;
let listaDisciplinas = [];

function adicionaAula() {
  nomeAula = document.getElementById("nome").value;
  console.log(nomeAula);
  listaDisciplinas.push(nomeAula);
  imprimeAulas();
  limpaCampos();
  // desc = document.getElementById("").value;
}

function limpaCampos() {
  nomeAula = document.getElementById("nome").value = '';
}

function imprimeAulas() {
  let bodyList = document.getElementById("list");
  bodyList.innerText = '';
  for (let i = 0; i < listaDisciplinas.length; i++) {
    let li = document.createElement('li');
    li.innerText = listaDisciplinas[i];
    bodyList.appendChild(li);
    console.log(listaDisciplinas);
  }
}

export default function CardAula() {

  // Cria cards dinamicamente
  const [cards, setCards] = useState([]);

  function adicionarCard() {
    const novoCard = (
      <Card className="w-75 p-3 shadow p-3 mb-5 bg-body-tertiary">
        <Card.Header className="d-flex justify-content-between">
          <span className="align-middle">
            <h2>{nomeAula}</h2>
          </span>
          <Button variant="dark">Adicionar Arquivo</Button>
        </Card.Header>

        <Card.Body>
          <Card.Text>
            <ul>
              {/* Lista de disciplinas */}
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    );

    setCards(prevCards => [...prevCards, novoCard]);
  }

  return (
    <>

      <div id='addClass' className='pt-4'>
        <Button variant="dark" onClick={adicionarCard}>
          Adicionar Aula
        </Button>
      </div>


      <div className="cards-container d-flex flex-column align-items-end">
        {cards.map((card, index) => (
          <React.Fragment key={index}>{card}</React.Fragment>
        ))}
      </div>
    </>
  )
}

