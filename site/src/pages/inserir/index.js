import { Link } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';
import axios from 'axios';


export default function Inserir() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [numero, setNumero] = useState('');
  const [cpf, setCpf] = useState('');
  const [cnh, setCnh] = useState('');


  async function salvarCliente() {
    let cliente = {
      nome: nome,
      email: email,
      numero: numero,
      cpf: cpf,
      cnh: cnh
    }


    let url = 'http://localhost:5000/cliente';
    let resp = await axios.post(url, cliente);

    alert('Cliente Registrado com Sucesso!');
  }

  return (
    <div className='pagina-inserir'>
      <div className='container'>
        <h1> Novo Cliente</h1>
        <section className='form'>
          <div>
            <label>Nome: </label>
            <input type='text' value={nome} onChange={e => setNome(e.target.value)} />
          </div>
          <div>
            <label>E-mail: </label>
            <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div>
            <label>numero: </label>
            <input type='text' value={numero} onChange={e => setNumero(e.target.value)} />
          </div>
          <div>
            <label>Cpf: </label>
            <input type='text'  value={cpf} onChange={e => setCpf(e.target.value)} />
          </div>
          <div>
            <label>Cnh: </label>
            <div>
              <input type='text'  value={cnh} onChange={e => setCnh(e.target.value)} />
            </div>
          </div>
          <div className='right'>
            <button onClick={salvarCliente}> Salvar </button>
          </div>
        </section>

        <div className='voltar'>
          <hr />
          <Link to='/'> Voltar </Link>
        </div>
      </div>
    </div>

    
  )
}