import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BiHomeAlt2 } from "react-icons/bi";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react'

export default function HomeCards() {

	const [message, setMessage] = useState('')

	const click = () => {
		alert(message);

		if(document.getElementById('name').value != "")
			document.getElementById('name').placeholder = document.getElementById('name').value;

		if(document.getElementById('lastName').value != "")
			document.getElementById('lastName').placeholder = document.getElementById('lastName').value;

		if(document.getElementById('email').value != "")
			document.getElementById('email').placeholder = document.getElementById('email').value;

		if(document.getElementById('role').value != "")
			document.getElementById('role').placeholder = document.getElementById('role').value;

		if(document.getElementById('cellphone').value != "")
			document.getElementById('cellphone').placeholder = document.getElementById('cellphone').value;

		if(document.getElementById('description').value != "")
			document.getElementById('description').placeholder = document.getElementById('description').value;
		
	}

	return (

		<div className="text-center vh-100">
			<div className="row">
				<div className="col d-flex align-items-center justify-content-center">
					<div>
						<div onClick={() => alert("Faz modal")}>
							<Card style={{ width: '18rem' }}>
								<h3> <BiHomeAlt2 className="w-100 h-100 text-center"/> </h3>
								<Card.Body>
									<Card.Title className="text-center">Adicionar Disciplina</Card.Title>
									<Card.Text className="text-center">
										Clique para adicionar uma nova disciplina.
									</Card.Text>
								</Card.Body>
							</Card>
						</div>
					</div>		
				</div>

				<div className="col align-items-center">
					<div className="form-group text-start p-5">
						<p>
							<label>Nome</label> <input type="text" className="form-control" id="name" placeholder="Ricardo" /> <br/>
							<label>Sobrenome</label> <input type="text" className="form-control" id="lastName" placeholder="Pannain"/> <br/>
							<label>Email</label> <input type="text" className="form-control" id="email" placeholder="ricardo-pannain@puc-campinas.edu.br"/> <br/>
							<label>Cargo</label> <input type="text" className="form-control" id="role" placeholder="Diretor e Professor"/> <br/>
							<label>Celular</label> <input type="text" className="form-control" id="cellphone" placeholder="14 98564-9412"/> <br/>
							<label>Descrição</label> <textarea type="text" className="form-control" rows='10' cols='10' maxLength={"250"} id="description" placeholder="Professor na Puc-Campinas"/> <br/>
							<button	onClick={click} type="submit" className="btn btn-primary">Editar</button>
						</p>
					</div>
				</div>
			</div>
		</div>
	
	)
}
