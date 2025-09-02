export const cursos = [
    'Informática',
    'Comunicação Visual', 
    'Administração',
    'Eletromecânica',
    'Robótica',
    'Inglês'
  ];
  
  // Função para selecionar curso
  export function selecionarCurso(setCursoSelecionado) {
    return function(nomeCurso) {
      setCursoSelecionado(nomeCurso);
    };
  }

  export function voltarInicio(setCursoSelecionado) {
    return function() {
      setCursoSelecionado('');
    };
  }