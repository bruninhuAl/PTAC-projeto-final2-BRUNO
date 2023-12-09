import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./todo.css";

export default function Todo() {
  const listaLocalStorage = JSON.parse(localStorage.getItem("Lista")) || [];
  const [lista, setLista] = useState(listaLocalStorage);

  const [id, setId] = useState(listaLocalStorage [listaLocalStorage.length - 1]?.id + 1 || 1);
  const [Titulo, setTitulo] = useState("");
  const [Canal, setCanal] = useState("");
  const [Descricao, setDescricao] = useState("");
  const [url, seturl] = useState("");


  useEffect(() => {localStorage.setItem("Lista", JSON.stringify(lista))},[lista]);
  

  function salvar(e) {
    e.preventDefault();
    setLista([...lista, { id: id, Titulo: Titulo, Canal: Canal, Descricao: Descricao, url: url }]);
    setId(id + 1);
    setTitulo("");
    setCanal("");
    setDescricao("");
    seturl("");
  }

  const remover = (id) => {
    const listaFiltrada = lista.filter((item) => item.id !== id);
    setLista(listaFiltrada);
  };

  return (
    <div>
      <div className="card">
        <form onSubmit={salvar}>
          <div className="input-container">
            <p><label htmlFor="titulo">Titulo:</label>
            <input
              id="titulo"
              onChange={(e) => setTitulo(e.target.value)}
              type="text"
              value={titulo}
            /></p>
            <p><label htmlFor="canal">Canal:</label>
            <input
              id="canal"
              onChange={(e) => setCanal(e.target.value)}
              type="text"
              value={canal}
            /></p>
           <p> <label htmlFor="descricao">Descricao:</label>
            <input
              id="descricao"
              onChange={(e) => setDescricao(e.target.value)}
              type="text"
              value={descricao}
            /></p>
            <p> <label htmlFor="url">url:</label>
            <input
              id="url"
              onChange={(e) => seturl(e.target.value)}
              type="text"
              value={url}
            /></p>
          </div>
        </form>

        <div>
          <div className="values-area">
            {lista.map((item) => (
              <div key={item.id}>
                
                <p>Email: {item.Email}</p>
                <p>CPF: {item.Cpf}</p>
                <button
                  className="blue-border-button"
                  onClick={() => remover(item.id)}
                >
                  Remover
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      



    </div>
  );
}