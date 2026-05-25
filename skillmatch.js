// SkillMatch JS - Simulador de Compatibilidade com Vagas Front-End Junior

const candidato = {
  nome: "Josafa",
  area: "Front-End",
  habilidades: [
    "JavaScript",
    "GitHub",
    "Logica de Programacao",
    "Kanban", "HTML",
    "CSS"
  ],
  experienciaMeses: 3,
  possuiPortfolio: true,
};

const vagas = [
  {
    id: 1,
    empresa: "TechStart",
    cargo: "Desenvolvedor Front-End Junior",
    requisitos: ["JavaScript", "GitHub", "Logica de Programacao", "HTML"],
    salario: 2800,
    modalidade: "Remoto",
  },
  {
    id: 2,
    empresa: "CodeLab",
    cargo: "Estagio Front-End",
    requisitos: ["JavaScript", "Kanban", "GitHub"],
    salario: 1800,
    modalidade: "Hibrido",
  },
  {
    id: 3,
    empresa: "WebSolutions",
    cargo: "Programador JavaScript Junior",
    requisitos: ["JavaScript", "Arrays", "Objetos", "Funcoes"],
    salario: 3000,
    modalidade: "Presencial",
  },
  {
    id: 4,
    empresa: "Creative Pages",
    cargo: "Assistente de Desenvolvimento Web",
    requisitos: ["HTML", "CSS", "JavaScript", "GitHub"],
    salario: 2200,
    modalidade: "Remoto",
  },
];

console.log("Candidato cadastrado:");
console.log(candidato);

console.log("Vagas cadastradas:");
console.log(vagas);
