import connection from "./conexao.js";

export async function CriarConta(dados) {
    try {
        // Iniciar transação
        await connection.beginTransaction();

        // 1. Inserir na tabela Comunicacao
        const comando1 = `INSERT INTO Comunicacao (email, telefone) 
                         VALUES (?, ?)`;
        
        const [resultado1] = await connection.query(comando1, [
            dados.email, 
            dados.telefone || null
        ]);
        
        const comunicacaoId = resultado1.insertId;

        // 2. Inserir na tabela Informacao
        const comando2 = `INSERT INTO Informacao (como_ficou_sabendo_da_feira, interesse_em_algum_curso, previsao_de_chegada) 
                         VALUES (?, ?, ?)`;
        
        const [resultado2] = await connection.query(comando2, [
            dados.como_ficou_sabendo_da_feira || null, 
            dados.interesse_em_algum_curso || null, 
            dados.previsao_de_chegada || null
        ]);
        
        const informacaoId = resultado2.insertId;

        // 3. Inserir na tabela Cadastrar
        const comando3 = `INSERT INTO Cadastrar (nome_completo, cpf, escolaridade, ja_foi_aluno, id_comunicacao, id_informacao) 
                         VALUES (?, ?, ?, ?, ?, ?)`;
        
        // Converter ja_foi_aluno para boolean
        let jaFoiAluno = 0;
        if (dados.ja_foi_aluno) {
            const resposta = dados.ja_foi_aluno.toLowerCase();
            jaFoiAluno = (resposta === 'sim' || resposta === 'true' || resposta === '1') ? 1 : 0;
        }

        // IMPORTANTE: CPF precisa ser VARCHAR, não INT no banco!
        // Seu banco está como INT, mas CPF tem pontos e traços
        const [resultado3] = await connection.query(comando3, [
            dados.nome_completo, 
            dados.cpf.replace(/[.-]/g, ''), // Remove pontos e traços do CPF
            dados.escolaridade || null, 
            jaFoiAluno,
            comunicacaoId,  
            informacaoId    
        ]);

        // Confirmar transação
        await connection.commit();
        
        return {
            cadastroId: resultado3.insertId,
            comunicacaoId: comunicacaoId,
            informacaoId: informacaoId,
            mensagem: "Cadastro realizado com sucesso!"
        };

    } catch (error) {
        // Reverter transação em caso de erro
        await connection.rollback();
        console.error('Erro na transação:', error);
        
        // Verificar se é erro de duplicata
        if (error.code === 'ER_DUP_ENTRY') {
            throw new Error('Email ou CPF já cadastrado');
        }

        // Erro específico do CPF
        if (error.code === 'ER_TRUNCATED_WRONG_VALUE') {
            throw new Error('CPF deve conter apenas números');
        }
        
        throw new Error(`Erro ao criar cadastro: ${error.message}`);
    }
}

export async function ListarContas() {
    try {
        const comando = `SELECT email, telefone
                        FROM Comunicacao`;
                        
        let [listagem] = await connection.query(comando);
        return listagem;
        
    } catch (error) {
        console.error('Erro ao listar contas:', error);
        throw new Error('Erro ao buscar contas');
    }
}