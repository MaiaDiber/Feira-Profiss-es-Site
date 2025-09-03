import * as repository from "../Repository/feiraRepository.js";

import { Router } from "express";
const endpoint = Router()

endpoint.get('/Checar/Tabela', async (req, resp) => {

    try{
        let registro = await repository.Checagem()
        resp.send(registro)
    }
    catch (err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoint.get('/Procurar/Visitante')

export default endpoint