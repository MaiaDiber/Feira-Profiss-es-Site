import connection from "./conexao.js";

export async function CriarConta(pegar) {
    const comando = `insert into Comunicacao (email, telefone)
                    values(?, ?)`     

    let [inserir] = await connection.query(comando, [pegar.email, pegar.telefone])
    return inserir.insertId

}

export async function ListarContas() {
    const comando = `select email, telefone
                    from Comunicacao`

    let [listagem] = await connection.query(comando)
    return listagem
}