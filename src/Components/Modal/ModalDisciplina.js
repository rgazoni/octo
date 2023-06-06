import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function ModalDisciplina() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [mensagem, setMensagem] = useState('');

  const handleSalvar = () => {
    // Lógica para salvar os dados do formulário
    setModalOpen(false);
    setMensagem('Disciplina Adicionada');
    // Limpar a mensagem após alguns segundos
    setTimeout(() => {
      setMensagem('');
    }, 5000);
  };

  return (
    <div>
      {/* Botão para abrir o modal */}
      <button
        type="button"
        className="btn btn-primary modal-button"
        onClick={() => setModalOpen(true)}
      >
        Modal
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Deseja Adicionar Aula</h5>
                <button type="button" className="btn-close" onClick={() => setModalOpen(false)}></button>
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
                <button type="button" className="btn btn-secondary" onClick={() => setModalOpen(false)}>Fechar</button>
                <button type="button" className="btn btn-primary" onClick={handleSalvar}>Salvar</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mensagem de sucesso */}
      {mensagem && (
        <div className="alert alert-success position-fixed top-0 end-0 m-3" role="alert">
          {mensagem}
        </div>
      )}
    </div>
  );
}

export default ModalDisciplina;
