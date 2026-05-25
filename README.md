# SkillMatch JS

## Sobre o projeto

O **SkillMatch JS** e um simulador de compatibilidade entre uma pessoa candidata e vagas ficticias de Front-End Junior.

O sistema compara as habilidades do candidato com os requisitos das vagas e apresenta:

- percentual de compatibilidade;
- habilidades encontradas;
- habilidades faltantes;
- classificacao da compatibilidade;
- vaga mais compativel;
- recomendacao de estudo.

Este projeto foi desenvolvido em JavaScript puro como atividade avaliativa do Modulo 01 do curso de Programacao Front-End.

## Objetivo

Praticar logica de programacao e conceitos iniciais de JavaScript por meio de um sistema simples de analise de vagas.

## Como executar

O projeto nao precisa de instalacao de bibliotecas.

### Opcao 1: Console do navegador

1. Abra o arquivo `skillmatch.js`.
2. Copie todo o codigo.
3. Abra o navegador Google Chrome.
4. Pressione `F12` ou `Ctrl + Shift + J`.
5. Abra a aba `Console`.
6. Cole o codigo e pressione `Enter`.

### Opcao 2: Node.js

Com o Node.js instalado, abra o terminal na pasta do projeto e execute:

```bash
node skillmatch.js
```

Ao iniciar, o sistema espera 1 segundo para simular o carregamento das vagas e depois exibe a analise no console.

## Estrutura do projeto

```txt
skillmatch-js/
|-- README.md
`-- skillmatch.js
```

## Funcionamento

O candidato possui habilidades cadastradas. Cada vaga possui requisitos. A compatibilidade e calculada pela regra:

```txt
compatibilidade = habilidades encontradas / total de requisitos * 100
```

A classificacao segue estes intervalos:

| Percentual | Classificacao |
| --- | --- |
| 80% a 100% | Alta compatibilidade |
| 50% a 79% | Media compatibilidade |
| 0% a 49% | Baixa compatibilidade |

## Conceitos aplicados

| Conceito | Aplicacao no projeto |
| --- | --- |
| Strings, numeros e booleanos | Dados do candidato e das vagas |
| Arrays e objetos | Habilidades, candidato e lista de vagas |
| `const` e `let` | Declaracao de dados fixos e contador atualizado |
| Funcoes | Separacao das regras do sistema |
| Arrow function | Funcao `analisarVagas` e funcoes usadas nos metodos de array |
| `if-else` | Classificacao do percentual de compatibilidade |
| Operadores | Calculo do percentual e comparacoes |
| Repeticao | `for...of` para exibir resultados e `forEach` para contar analises |
| `filter` | Habilidades encontradas e faltantes |
| `map` | Analise de todas as vagas |
| `reduce` | Melhor vaga e lista de habilidades faltantes |
| `find` | Busca de vaga pela empresa |
| `every` | Verificacao de todos os requisitos |
| Classe e construtor | Classe `Vaga` |
| Heranca | Classe `VagaFrontEnd extends Vaga` |
| `this` | Atributos e metodos das vagas |
| Callback | Mensagem executada ao finalizar a analise |
| Closure | Contador interno de vagas analisadas |
| Promise | Simulacao do carregamento das vagas |
| `async/await` | Espera pelo carregamento antes da analise |

### Sobre `var`, `let` e `const`

No projeto foi priorizado o uso de `const` para valores que nao recebem uma nova atribuicao e `let` para o total de analises, que e atualizado. O `var` e uma forma antiga de declarar variaveis e possui um comportamento de escopo mais amplo, por isso nao foi necessario utiliza-lo aqui.

## Programacao Orientada a Objetos

A classe `Vaga` guarda informacoes comuns, como empresa, cargo e requisitos. A classe `VagaFrontEnd` herda esses dados e acrescenta o nivel da vaga.

```js
class VagaFrontEnd extends Vaga {
  constructor(id, empresa, cargo, requisitos, salario, modalidade, nivel) {
    super(id, empresa, cargo, requisitos, salario, modalidade);
    this.nivel = nivel;
  }
}
```

## Internet E Arquitetura Cliente-Servidor

De forma resumida, a internet permite que computadores troquem informacoes. Em um sistema web, o cliente, como o navegador, solicita dados; um servidor recebe essa solicitacao e devolve uma resposta.

Neste projeto nao foi usada uma API real. A funcao `buscarVagasSimuladas()` usa uma `Promise` e `setTimeout` para representar a espera por dados que poderiam vir de um servidor. A funcao `iniciarSistema()` usa `async/await` para continuar a analise somente depois que as vagas forem carregadas.

## Organizacao Das Tarefas

O acompanhamento do projeto foi realizado em um quadro Kanban no Trello, utilizando as colunas Backlog, A Fazer, Em Andamento e Concluido.

[Quadro Kanban - SkillMatch JS](https://trello.com/invite/b/6a0b917c7e202525b4034831/ATTI93add0e008e0d943573a597218c84aa264827C73/mini-projeto-front-end-skillmatch-js)

## Versionamento

O desenvolvimento foi organizado com branches descritivas:

- `main`: versao principal do projeto;
- `develop`: integracao do desenvolvimento;
- `feat/analise-vagas`: candidato, vagas e calculos de compatibilidade;
- `feat/classes-poo`: classes, heranca e recursos finais de JavaScript;
- `docs/readme-video`: documentacao e preparacao da apresentacao.

## Ferramentas E Extensoes Recomendadas

- Visual Studio Code;
- Git e GitHub;
- Trello;
- extensao Code Runner, opcional para executar JavaScript;
- extensao Prettier, opcional para formatacao do codigo.

## Links Da Entrega

- Repositorio GitHub: [github.com/josafanet/skillmatch-js](https://github.com/josafanet/skillmatch-js)
- Quadro Kanban: [trello.com - SkillMatch JS](https://trello.com/invite/b/6a0b917c7e202525b4034831/ATTI93add0e008e0d943573a597218c84aa264827C73/mini-projeto-front-end-skillmatch-js)
- Video de apresentacao: [video - SkillMatch JS](https://drive.google.com/file/d/1JvpAfUNXgABVJlKWuQ4SoGkQISvVbG9Q/view?usp=sharing)

## Possiveis Melhorias

- Criar uma interface visual com HTML, CSS e React.
- Permitir o cadastro de candidatos e vagas.
- Consumir uma API real de vagas.
- Armazenar um historico de analises.
