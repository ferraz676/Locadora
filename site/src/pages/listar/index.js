import { Link } from 'react-router-dom';
import './index.scss';

import axios from 'axios';
import { useState } from 'react';


export default function Listar() {
  const [listaClientes, setListaClientes] = useState([]);

  async function listarTodos() {
    let url = 'http://localhost:5000/cliente/listar';
    let resp = await axios.get(url);
    setListaClientes(resp.data);
  }


  return (
    <div className='pagina-listar'>
      <div className='container'>
        <h1> Consultar </h1>
        <div className='filtros'>
        
          <button onClick={listarTodos}> Buscar Todos</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>CPF</th>
              <th>Telefone</th>
              <th>E-mail</th>
            </tr>
          </thead>
          <tbody>
            {listaClientes.map(item =>
              <tr>
                <td>{item.cliente}</td>
                <td>{item.cpf}</td>
                <td>{item.numero}</td>
                <td>{item.email}</td>
              </tr>  
            )}
          </tbody>
        </table>

        <div className='voltar'>
          <hr />
          <Link to='/'> Voltar </Link>
        </div>

      </div>
    </div>
  )
}