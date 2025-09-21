import endpoint from "./Controller/BuscarVisitante.js"
import endpointConta from "./Controller/CadastroContrller.js"
import endpointLogin from "./Controller/loginController.js"

export function Rotas(api){
api.use(endpoint)  
api.use(endpointConta)
api.use(endpointLogin)
}