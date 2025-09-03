import 'dotenv/config'
import { Rotas } from './rota.js';

import cors from 'cors'
import express from 'express'
const api = express()
api.use(express.json())
api.use(cors())

Rotas(api)

api.listen(process.env.PORTA, () => console.log(`.....SOLICITAÇÃO SOLICITADA NA PORTA ${process.env.PORTA}`))
