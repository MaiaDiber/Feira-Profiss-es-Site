import { CriarConta, ListarContas } from "../Repository/CadastroRepository.js";
import { Router } from "express";
const endpointConta = Router()

endpointConta.get('/Listar/Contas', async (req, resp) => {
    
    let contas = await ListarContas()
    resp.send(contas)
})

endpointConta.post('/Postar/Cadastro', async (req, resp) => {
    let pegar = req.body

    let id = await CriarConta(pegar)

    resp.send({
        novoID: id 
    })
} )

export default endpointConta