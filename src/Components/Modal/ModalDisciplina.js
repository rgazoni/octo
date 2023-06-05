import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function ModalDisciplina() {
  return (
    <div>
      {/* Botão para abrir o modal */}
      <button
        type="button"
        className="btn btn-primary modal-button"
        data-bs-toggle="modal"
        data-bs-target="#myModal"
      >
        Modal
      </button>

      {/* Modal */}
      <div className="modal fade" id="myModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Deseja Adicionar Aula</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="nomeAula" className="form-label">Nome:</label>
                <input type="text" className="form-control" id="nomeAula" />
              </div>
              <div className="mb-3">
                <label htmlFor="descricaoAula" className="form-label">Descrição:</label>
                <textarea className="form-control" id="descricaoAula" rows="3"></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
              <button type="button" className="btn btn-primary">Salvar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalDisciplina;
