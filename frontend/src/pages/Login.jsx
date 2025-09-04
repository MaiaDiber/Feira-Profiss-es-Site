import React from "react";
import { useEffect, useState } from "react";
import slides from './scipts.js';
import "./Login.scss";
import { Link } from "react-router-dom";

export default function Login() {
  useEffect(() => {
      const timer = setTimeout(() => {
        const startSlider = slides();
        startSlider();
      }, 100);
  
      return () => clearTimeout(timer);
    }, []);
      
  return (
    <>
    <div className="login-page">

      <div className="login-container">

      <Link to={'/'} className="Voltar">
        <img src="seta-voltar.webp" alt="" />
        <h1>Voltar</h1>
      </Link>

        <h1>Login</h1>

        <div className="input-group">
            <h3>Nome</h3>

            <label htmlFor="nome"></label>
            <input type="text" id="nome" placeholder="Digite seu nome completo" />
        </div>

        <div className="input-group">
            <h3>Senha</h3>

            <label htmlFor="senha"></label>
            <input type="password" id="senha" placeholder="Digite sua senha" />
          
            <a href="#" className="forgot-password">Esqueci a senha</a>
        </div>

        <button className="cadastrar">Cadastrar</button>
      </div>
    </div>
    </>
  );
}