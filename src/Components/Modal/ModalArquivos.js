import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function ModalArquivos() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [fileInputs, setFileInputs] = useState([0]);
  const [mensagem, setMensagem] = useState('');

  const adicionarCampoArquivo = () => {
    setFileInputs(prevInputs => [...prevInputs, prevInputs.length]);
  };

  const removerArquivo = (index) => {
    setFileInputs(prevInputs => prevInputs.filter((_, i) => i !== index));
  };

  const handleSalvar = () => {
    // Lógica para salvar os arquivos
    setModalOpen(false);
    setFileInputs([0]); // Limpar os campos de arquivo
    setMensagem('Arquivos Adicionados');
    setTimeout(() => {
      setMensagem('');
    }, 5000); // 5 segundos na tela
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
                <h5 className="modal-title">Deseja Adicionar Arquivos</h5>
                <button type="button" className="btn-close" onClick={() => setModalOpen(false)}></button>
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

export default ModalArquivos;
