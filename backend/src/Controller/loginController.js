import { VerificarLogin, ListarUsuarios } from "../Repository/loginrepository.js";
import { Router } from "express";
const endpointLogin = Router()

// Listar usuários (sem autenticação para debug)
endpointLogin.get('/get/usuarios', async (req, resp) => {
    try {
        let usuarios = await ListarUsuarios();
        resp.send(usuarios);
    } catch (error) {
        console.error('Erro ao listar usuários:', error);
        resp.status(500).send({ erro: 'Erro interno do servidor' });
    }
})

// Login - verificar se email e CPF existem
endpointLogin.post('/post/login', async (req, resp) => {
    try {
        let dados = req.body;
        
        // Validação básica
        if (!dados.email || !dados.cpf) {
            return resp.status(400).send({ 
                erro: 'Email e CPF são obrigatórios' 
            });
        }

        let resultado = await VerificarLogin(dados);

        resp.send({
            sucesso: true,
            usuario: resultado.usuario,
            mensagem: resultado.mensagem
        });
        
    } catch (error) {
        console.error('Erro no login:', error);
        resp.status(400).send({ 
            erro: error.message || 'Erro ao fazer login'
        });
    }
})

export default endpointLogin