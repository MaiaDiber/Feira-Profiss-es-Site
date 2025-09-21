import { CriarConta, ListarContasCom, ListarContasInfo, ListarContasCada } from "../Repository/CadastroRepository.js";
import { Router } from "express";
const endpointConta = Router()

endpointConta.get('/Listar/Contas', async (req, resp) => {
    try {
        let contas = await ListarContasCom()
        resp.send(contas)
    } catch (error) {
        console.error('Erro ao listar contas:', error);
        resp.status(500).send({ erro: 'Erro interno do servidor' });
    }
})
endpointConta.get('/Listar/Contas/Info', async (req, resp) => {
    try {
        let contas = await ListarContasInfo()
        resp.send(contas)
    } catch (error) {
        console.error('Erro ao listar contas:', error);
        resp.status(500).send({ erro: 'Erro interno do servidor' });
    }
})
endpointConta.get('/Listar/Contas/Cada', async (req, resp) => {
    try {
        let contas = await ListarContasCada()
        resp.send(contas)
    } catch (error) {
        console.error('Erro ao listar contas:', error);
        resp.status(500).send({ erro: 'Erro interno do servidor' });
    }
})

endpointConta.post('/Postar/Cadastro', async (req, resp) => {
    try {
        let pegar = req.body
        
        // Validação básica
        if (!pegar.nome_completo || !pegar.email || !pegar.cpf) {
            return resp.status(400).send({ 
                erro: 'Campos obrigatórios não preenchidos' 
            });
        }

        let resultado = await CriarConta(pegar)

        resp.send({
            sucesso: true,
            dados: resultado
        })
        
    } catch (error) {
        console.error('Erro ao criar conta:', error);
        resp.status(400).send({ 
            erro: error.message || 'Erro ao criar cadastro'
        });
    }
})

export default endpointConta