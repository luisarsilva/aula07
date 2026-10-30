import { Livro } from "./models/Livro.js";
import { Revista } from "./models/Revista.js";
import readline from "readline-sync";

console.log("=== BIBLIOTECAECAECA===")

const tipo = readline.question("Você deseja adicionar um livro ou uma revista? ")
if (tipo === "livro"){
    
console.log("\n=== CADASTRO DE LIVRO ===");
let tituloL = readline.question("Informe o titulo do livro: ");
let anoL = readline.questionFloat("Informe o ano de publicacao: ");
let autor = readline.question("Informe o autor: ");
let paginas = readline.questionFloat("Informe o numero de paginas: ");
console.log("============================")

let livro = new Livro(tituloL, anoL, autor, paginas)

console.log("\n=== ITENS CADASTRADOS ===");
console.log(livro);
console.log("============================");

}

else if (tipo === "revista") {
console.log("\n=== CADASTRO DE REVISTA ===");
let tituloR = readline.question("Informe o titulo da revista: ");
let anoR = readline.questionFloat("Informe o ano de publicacao: ");
let edicao = readline.questionFloat("Informe a edicao: ");
console.log("============================");

let revista = new Revista(tituloR, anoR, edicao);

console.log("\n=== ITENS CADASTRADOS ===");
console.log(revista);
console.log("============================");

}

else {
    console.log("Invalido! insira uma informação válida")
}