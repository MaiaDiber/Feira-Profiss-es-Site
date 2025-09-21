import { useNavigate } from 'react-router-dom';
import './Cadastro.scss'
import { useState } from "react";
import { Link } from "react-router-dom";
import app from '../../../backend/axios.js';



export default function Cadastro(){

  const navigate = useNavigate()

    let [nome_completo, setNome_completo] = useState('')
    let [email, setEmail] = useState('')
    let [telefone, setTelefone] = useState('')
    let [cpf, setCPF] = useState('')
    let [escolaridade, setEscolaridade] = useState('')
    let [interesse_em_algum_curso, setInteresse_em_algum_curso] = useState('')
    let [ja_foi_aluno, setJa_foi_aluno] = useState('')
    let [previsao_de_chegada, setPrevisao_de_chegada] = useState('')
    let [como_ficou_sabendo_da_feira, setComo_ficou_sabendo_da_feira] = useState('')
    

    async function CriarConta(e) {
      e.preventDefault(); // impede reload/redirect automático do form
    
      // validação antes de enviar
      if (!nome_completo || !email || !cpf) {
        alert("Preencha todos os campos obrigatórios!");
        return;
      }
    
      try {
        await app.post('/Postar/Cadastro', {
          email,
          telefone,
          nome_completo,
          cpf,
          escolaridade,
          interesse_em_algum_curso,
          ja_foi_aluno,
          previsao_de_chegada,
          como_ficou_sabendo_da_feira
        });
    
        alert('Conta criada com sucesso!');

        navigate('/Com')
    
      } catch (e) {
        console.error(e); // mostra o erro completo no console
        alert(e.response?.data?.erro || e.message || "Erro ao criar conta!");
      }
    }
    

    return (
      <>
      <div className="Cadastro">

      <div className="img-frei" >
        <img src="ChatGPT_Image_21_de_set._de_2025__00_42_12-removebg-preview.png" alt="" />
      </div>

      <div className="Cadastrar">
        <h1>Cadastra-se</h1>

        <Link to={'/'} className="Voltar">
        <img src="seta-voltar.webp" alt="" />
      </Link>
        
        <div className="la-inp">
        <form onSubmit={CriarConta}>
  <label>
    <p>Nome inteiro *</p>
    <input 
      type="text" 
      placeholder="Escreva aqui" 
      value={nome_completo} 
      onChange={(e) => setNome_completo(e.target.value)} 
      required 
    />
  </label>

  <label>
    <p>E-mail *</p>
    <input 
      type="email" 
      placeholder="Inclua '@gmail.com'" 
      value={email} 
      onChange={(e) => setEmail(e.target.value)} 
      required 
    />
  </label>

  <label>
    <p>CPF *</p>
    <input 
      type="text" 
      placeholder="Inclua '.' e '-'" 
      value={cpf} 
      onChange={(e) => setCPF(e.target.value)} 
      required 
    />
  </label>

  <label>
    <p>Telefone</p>
    <input 
      type="text" 
      placeholder="Inclua '()' no DD e '-'" 
      value={telefone} 
      onChange={(e) => setTelefone(e.target.value)} 
    />
  </label>

  <label>
    <p>Escolaridade</p>
    <input 
      type="text" 
      placeholder="Escreva aqui" 
      value={escolaridade} 
      onChange={(e) => setEscolaridade(e.target.value)} 
    />
  </label>

  <label>
    <p>Interesse em qual curso?</p>
    <input 
      type="text" 
      placeholder="Escreva aqui" 
      value={interesse_em_algum_curso} 
      onChange={(e) => setInteresse_em_algum_curso(e.target.value)} 
    />
  </label>

  <label>
    <p>Já foi Aluno?</p>
    <input 
      type="text" 
      placeholder="Escreva aqui" 
      value={ja_foi_aluno} 
      onChange={(e) => setJa_foi_aluno(e.target.value)} 
    />
  </label>

  <label>
    <p>Previsão/Chegada de regresso</p>
    <input 
      type="text" 
      placeholder="Ex.: '11:32'" 
      value={previsao_de_chegada} 
      onChange={(e) => setPrevisao_de_chegada(e.target.value)} 
    />
  </label>

  <label>
    <p>Como ficou sabendo da Feira</p>
    <input 
      type="text" 
      placeholder="Escreva aqui" 
      value={como_ficou_sabendo_da_feira} 
      onChange={(e) => setComo_ficou_sabendo_da_feira(e.target.value)} 
    />
  </label>

  <button className="button" type="submit">Enviar</button>
</form>

        </div>

        
      </div>
      </div>
      </>
      
    );
}