import { Livro } from "./src/models/Livro.js";
import { Revista } from "./src/models/Revista.js";
import readline from "readline-sync";

console.log("=== CADASTRO DE LIVRO ===");
let tituloL = readline.question("Informe o titulo do livro: ");
let anoL = readline.questionFloat("Informe o ano de publicacao: ");
let autor = readline.question("Informe o autor: ");
let paginas = readline.questionFloat("Informe o numero de paginas: ");
console.log("============================");

let livro = new Livro(tituloL, anoL, autor, paginas);

console.log("\n=== CADASTRO DE REVISTA ===");
let tituloR = readline.question("Informe o titulo da revista: ");
let anoR = readline.questionFloat("Informe o ano de publicacao: ");
let edicao = readline.questionFloat("Informe a edicao: ");
console.log("============================");

let revista = new Revista(tituloR, anoR, edicao);

console.log("\n=== ITENS CADASTRADOS ===");
console.log(livro);
console.log(revista);