import { Biblio } from "./Biblio.js";

export class Livro extends Biblio {
    private autor: string;
    private nPag: number;

    constructor(titulo: string, anoPublicacao: number, autor: string, nPag: number) {
        super(titulo, anoPublicacao);
        this.autor = autor;
        this.nPag = nPag;
    }

    public get getAutor(): string {return this.autor}
    public get getNPag(): number {return this.nPag}

    public set setAutor(novoAutor: string) {
        if (novoAutor.trim() .length === 0) {
            console.log("\n ERRO: O autor não pode ser vazio");
            return;
        }
        this.autor = novoAutor;
    }


    public set setNPag(novoNPag: number) {
        if (novoNPag === 0) {
            console.log("\n ERRO: O número de páginas deve ser maior que zero");
            return;
        }
        this.nPag = novoNPag;
    }
}