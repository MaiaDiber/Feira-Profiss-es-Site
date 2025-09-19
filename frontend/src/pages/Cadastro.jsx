import './Cadastro.scss'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import app from '../../../backend/axios.js';

export default function Cadastro(){
    let [caixa, setCaixa] = useState([])
    let [email, setEmail] = useState('')
    let [telefone, setTelefone] = useState('')

    async function CriarConta() {
        await app.post('/Postar/Cadastro', {
             email,
             telefone 
        })
        .then (() => alert('Conta Criada'))
        .cacth((e => alert(e.response.data.erro)))
        
    }

    return (
      <>
      <div className="Cadastrar">
        <h1>Cadastro</h1>
        <label htmlFor="">
            <p>E-mail</p>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label htmlFor="">
            <p>Telefone</p>
            <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
        </label>

        <button onClick={CriarConta} >enviar</button>
      </div>
      </>
      
    );
}