import connection from "./conexao.js";

// Função para verificar se usuário existe (LOGIN)
export async function VerificarLogin(dados) {
    try {
        // Query que junta as três tabelas para verificar se email e CPF existem
        const comando = `
            SELECT 
                c.id_cadastro,
                c.nome_completo,
                c.cpf,
                com.email,
                com.telefone
            FROM Cadastrar c
            INNER JOIN Comunicacao com ON c.id_comunicacao = com.id_comunicacao
            WHERE com.email = ? AND c.cpf = ?
        `;
        
        // Remove pontos e traços do CPF para comparar
        const cpfLimpo = dados.cpf.replace(/[.-]/g, '');
        
        const [resultado] = await connection.query(comando, [dados.email, cpfLimpo]);
        
        if (resultado.length === 0) {
            throw new Error('Email ou CPF incorretos');
        }
        
        // Retorna os dados do usuário encontrado
        return {
            usuario: resultado[0],
            mensagem: 'Login realizado com sucesso!'
        };
        
    } catch (error) {
        console.error('Erro no login:', error);
        throw new Error(error.message || 'Erro ao fazer login');
    }
}

// Função para listar todos os usuários (para debug/admin)
export async function ListarUsuarios() {
    try {
        const comando = `
            SELECT 
                c.id_cadastro,
                c.nome_completo,
                c.cpf,
                com.email,
                com.telefone,
                info.interesse_em_algum_curso
            FROM Cadastrar c
            INNER JOIN Comunicacao com ON c.id_comunicacao = com.id_comunicacao
            INNER JOIN Informacao info ON c.id_informacao = info.id_informacao
            ORDER BY c.id_cadastro DESC
        `;
        
        const [usuarios] = await connection.query(comando);
        return usuarios;
        
    } catch (error) {
        console.error('Erro ao listar usuários:', error);
        throw new Error('Erro ao buscar usuários');
    }
}