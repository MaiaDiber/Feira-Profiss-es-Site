import connection from "./conexao.js";

export async function  Checagem() {
    const comando = 'select * from Comunicacao'

    let registrar = await connection.query(comando)
    return registrar
}


