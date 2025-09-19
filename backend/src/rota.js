import endpoint from "./Controller/BuscarVisitante.js"
import endpointConta from "./Controller/CadastroContrller.js"

export function Rotas(api){
api.use(endpoint)  
api.use(endpointConta)
}