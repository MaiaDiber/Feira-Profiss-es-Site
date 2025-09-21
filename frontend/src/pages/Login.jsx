import { useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import app from "../../../backend/axios.js";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [cpf, setCPF] = useState('');

  async function Logar(e) {
    e.preventDefault();

    // Validação antes de enviar
    if (!email || !cpf) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }

    try {
      const response = await app.post('/post/login', {
        email,
        cpf
      });
      
      alert('Login realizado com sucesso!');
      navigate('/Com'); 
      
    } catch (error) {
      console.error('Erro no login:', error);
      alert(error.response?.data?.erro || "Erro ao fazer login!");
    }
  }
      
  return (
    <>
    <div className="login-page">
      <div className="img-frei">
        <img src="ChatGPT_Image_21_de_set._de_2025__00_42_12-removebg-preview.png" alt="" />
      </div>

      <div className="login-container">
        <Link to={'/'} className="Voltar">
          <img src="seta-voltar.webp" alt="" />
          <h1>Voltar</h1>
        </Link>

        <h1>Login</h1>

        <div className="input-group">
          <form onSubmit={Logar}>
            <label>
              <h3>E-mail</h3>
              <input 
                type="email" 
                placeholder="Digite seu E-mail" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />        
            </label>

            <label>
              <h3>CPF</h3>
              <input 
                type="text" 
                placeholder="Digite seu CPF" 
                value={cpf} 
                onChange={(e) => setCPF(e.target.value)} 
                required 
              />
            </label>

            <button type="submit" className="entrar">Entrar</button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}