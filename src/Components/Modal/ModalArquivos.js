import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function ModalArquivos() {
  const [fileInputs, setFileInputs] = useState([0]);

  const adicionarCampoArquivo = () => {
    setFileInputs(prevInputs => [...prevInputs, prevInputs.length]);
  };

  const removerArquivo = (index) => {
    setFileInputs(prevInputs => prevInputs.filter((_, i) => i !== index));
  };

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
              <h5 className="modal-title" id="exampleModalLabel">Deseja Adicionar Arquivos</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
            </div>
            <div className="modal-body">
              <div id="arquivosContainer">
                {fileInputs.map((index) => (
                  <div className="mb-3" key={index}>
                    <label htmlFor={`arquivosAula${index}`} className="form-label">Arquivos:</label>
                    <div className="input-group">
                      <input type="file" className="form-control" name={`arquivosAula${index}[]`} multiple />
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => removerArquivo(index)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button type="button" className="btn btn-secondary mt-2" onClick={adicionarCampoArquivo}>Adicionar Arquivo</button>
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

export default ModalArquivos;
