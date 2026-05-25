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

const vagas = [
  {
    id: 1,
    empresa: "Odisy Digital",
    cargo: "Estagio Front-End",
    requisitos: ["JavaScript", "GitHub", "Logica de Programacao", "HTML"],
    salario: 2800,
    modalidade: "Remoto",
  },
  {
    id: 2,
    empresa: "Escalado Tech",
    cargo: "Assistente de Desenvolvimento Web",
    requisitos: ["JavaScript", "Kanban", "GitHub"],
    salario: 1800,
    modalidade: "Hibrido",
  },
  {
    id: 3,
    empresa: "Ciclismo Web",
    cargo: "Programador JavaScript Junior",
    requisitos: ["JavaScript", "Arrays", "Objetos", "Funcoes"],
    salario: 3000,
    modalidade: "Presencial",
  },
  {
    id: 4,
    empresa: "Ungidos Pages",
    cargo: "Desenvolvedor Front-End Junior",
    requisitos: ["HTML", "CSS", "JavaScript", "GitHub"],
    salario: 2200,
    modalidade: "Remoto",
  },
];

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
    habilidadesEncontradas: habilidadesEncontradas,
    habilidadesFaltantes: habilidadesFaltantes,
  };
}

console.log("Candidato cadastrado:");
console.log(candidato);

console.log("Vagas cadastradas:");
console.log(vagas);

const resultadoPrimeiraVaga = calcularCompatibilidade(candidato, vagas[0]);

console.log("Resultado da primeira vaga:");
console.log(resultadoPrimeiraVaga);
