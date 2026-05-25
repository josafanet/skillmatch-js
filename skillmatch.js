// SkillMatch JS - Simulador de Compatibilidade com Vagas Front-End Junior

const candidato = {
  nome: "Josafa",
  area: "Front-End",
  habilidades: [
    "JavaScript",
    "GitHub",
    "Logica de Programacao",
    "Kanban"
  ],
  experienciaMeses: 3,
  possuiPortfolio: true,
};

class Vaga {
  constructor(id, empresa, cargo, requisitos, salario, modalidade) {
    this.id = id;
    this.empresa = empresa;
    this.cargo = cargo;
    this.requisitos = requisitos;
    this.salario = salario;
    this.modalidade = modalidade;
  }

  exibirResumo() {
    return `${this.cargo} na empresa ${this.empresa}`;
  }
}

class VagaFrontEnd extends Vaga {
  constructor(id, empresa, cargo, requisitos, salario, modalidade, nivel) {
    super(id, empresa, cargo, requisitos, salario, modalidade);
    this.nivel = nivel;
  }

  exibirNivel() {
    return `Nivel da vaga: ${this.nivel}`;
  }
}

const vagas = [
  new VagaFrontEnd(
    1,
    "Odisy Digital",
    "Estagio Front-End",
    ["JavaScript", "GitHub", "Logica de Programacao", "HTML"],
    2800,
    "Remoto",
    "Estagio"
  ),
  new VagaFrontEnd(
    2,
    "Escalado Tech",
    "Assistente de Desenvolvimento Web",
    ["JavaScript", "Kanban", "GitHub"],
    1800,
    "Hibrido",
    "Entrada"
  ),
  new VagaFrontEnd(
    3,
    "Ciclismo Web",
    "Programador JavaScript Junior",
    ["JavaScript", "Arrays", "Objetos", "Funcoes"],
    3000,
    "Presencial",
    "Junior"
  ),
  new VagaFrontEnd(
    4,
    "Ungidos Pages",
    "Desenvolvedor Front-End Junior",
    ["HTML", "CSS", "JavaScript", "GitHub"],
    2200,
    "Remoto",
    "Junior"
  ),
];

function classificarCompatibilidade(percentual) {
  if (percentual >= 80) {
    return "Alta compatibilidade";
  } else if (percentual >= 50) {
    return "Media compatibilidade";
  } else {
    return "Baixa compatibilidade";
  }
}

function calcularCompatibilidade(perfilCandidato, vaga) {
  const habilidadesEncontradas = vaga.requisitos.filter((requisito) =>
    perfilCandidato.habilidades.includes(requisito)
  );

  const habilidadesFaltantes = vaga.requisitos.filter(
    (requisito) => !perfilCandidato.habilidades.includes(requisito)
  );

  const percentual = Math.round(
    (habilidadesEncontradas.length / vaga.requisitos.length) * 100
  );

  return {
    empresa: vaga.empresa,
    cargo: vaga.cargo,
    percentual: percentual,
    classificacao: classificarCompatibilidade(percentual),
    habilidadesEncontradas: habilidadesEncontradas,
    habilidadesFaltantes: habilidadesFaltantes,
  };
}

const analisarVagas = (perfilCandidato, listaDeVagas) => {
  return listaDeVagas.map((vaga) =>
    calcularCompatibilidade(perfilCandidato, vaga)
  );
};

function encontrarMelhorVaga(resultadosDasVagas) {
  return resultadosDasVagas.reduce((melhorVaga, vagaAtual) => {
    if (vagaAtual.percentual > melhorVaga.percentual) {
      return vagaAtual;
    }

    return melhorVaga;
  });
}

function buscarVagaPorEmpresa(listaDeVagas, empresaProcurada) {
  return listaDeVagas.find((vaga) => vaga.empresa === empresaProcurada);
}

function verificarTodosRequisitos(perfilCandidato, vaga) {
  return vaga.requisitos.every((requisito) =>
    perfilCandidato.habilidades.includes(requisito)
  );
}

console.log("Candidato cadastrado:");
console.log(candidato);

console.log("Vagas cadastradas:");
console.log(vagas);

const resultados = analisarVagas(candidato, vagas);
const melhorVaga = encontrarMelhorVaga(resultados);
const vagaEncontrada = buscarVagaPorEmpresa(vagas, "Escalado Tech");
const atendeTodosRequisitos = verificarTodosRequisitos(
  candidato,
  vagaEncontrada
);

console.log("Resultado de todas as vagas:");
console.log(resultados);

console.log("Vaga mais compativel:");
console.log(melhorVaga);

console.log("Vaga localizada com find:");
console.log(vagaEncontrada);
console.log(vagaEncontrada.exibirResumo());
console.log(vagaEncontrada.exibirNivel());

console.log("Atende todos os requisitos?");
console.log(atendeTodosRequisitos);
