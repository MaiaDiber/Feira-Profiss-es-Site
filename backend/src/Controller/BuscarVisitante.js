import * as repository from "../Repository/feiraRepository.js";

import { Router } from "express";
const endpoint = Router()

endpoint.get('/Buscar/Todos/Visitantes', async (req, resp) => {

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

endpoint.get('/Buscar/Visitante', async (req, resp) => {
    
})



export default endpoint