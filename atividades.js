console.log("\n=== BLOCO 1 — TEMPLATE LITERALS E DESTRUCTURING ===");

// Bloco 1 — Exercício 1
const produto = {
  nome: "Notebook",
  preco: 3500,
  estoque: 8,
};

console.log(
  `O produto ${produto.nome} custa R$ ${produto.preco.toFixed(2)} e possui ${produto.estoque} unidades em estoque.`
);

// Bloco 1 — Exercício 2
const { preco, estoque } = produto;
console.log(`Preço: R$ ${preco.toFixed(2)} | Estoque: ${estoque}`);

// Bloco 1 — Exercício 3
const colegas = ["Ana", "Bruno", "Carla", "Diego"];
const [primeiroColega, , , ultimoColega] = colegas;
console.log(`Primeiro: ${primeiroColega} | Último: ${ultimoColega}`);

console.log("\n=== BLOCO 2 — SPREAD E REST ===");

// Bloco 2 — Exercício 1
const cores = ["azul", "verde"];
const novasCores = [...cores, "amarelo"];
console.log("Array original:", cores);
console.log("Novo array:", novasCores);

// Bloco 2 — Exercício 2
const mediaTurma = (...notas) => {
  if (notas.length === 0) return 0;

  const soma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
  return soma / notas.length;
};

console.log(`Média da turma: ${mediaTurma(8, 7.5, 9, 6.5).toFixed(2)}`);

// Bloco 2 — Exercício 3 está nos arquivos matematica.js e app.js.

console.log("\n=== BLOCO 3 — MÉTODOS DE ARRAY ===");

const precos = [50, 120, 35, 200];

// Bloco 3 — Exercício 1
const precosAcimaDe100 = precos.filter((valor) => valor > 100);
console.log("Preços acima de 100:", precosAcimaDe100);

// Bloco 3 — Exercício 2
const precosComDesconto = precos.map((valor) => valor * 0.9);
console.log("Preços com 10% de desconto:", precosComDesconto);

// Bloco 3 — Exercício 3
const numeros = [10, 20, 30, 40, 50];
const total = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(`Soma dos números: ${total}`);

// Bloco 3 — Exercício 4
const alunos = [
  { id: 1, nome: "Amanda" },
  { id: 2, nome: "Carlos" },
  { id: 3, nome: "Fernanda" },
  { id: 4, nome: "João" },
];

const alunoEncontrado = alunos.find(({ id }) => id === 3);
console.log("Aluno com ID 3:", alunoEncontrado);

console.log("\n=== BLOCO 4 — ES5 PARA ES6+ E JSON ===");

// Bloco 4 — Exercício 1
const nome = "Léo";
console.log(`Olá ${nome}!`);

// Bloco 4 — Exercício 2
// A arrow function mantém o contexto de "this" do método apresentar.
const estudante = {
  nome: "Lucas",
  curso: "Análise e Desenvolvimento de Sistemas",

  apresentar() {
    setTimeout(() => {
      const { nome, curso } = this;
      console.log(`Meu nome é ${nome} e estudo ${curso}.`);
    }, 0);
  },
};

estudante.apresentar();

// Bloco 4 — Exercício 3
const curso = {
  nome: "React Native",
  professor: "Bruno A. Dias",
  cargaHoraria: 60,
};

const cursoEmTexto = JSON.stringify(curso);
console.log("JSON:", cursoEmTexto);

const cursoConvertido = JSON.parse(cursoEmTexto);
console.log("Objeto:", cursoConvertido);
