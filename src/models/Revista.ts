import { Biblio } from "./Biblio.js";

export class Revista extends Biblio {
    private edicao: number;

    constructor(titulo: string, anoPublicacao: number, edicao: number) {
        super(titulo, anoPublicacao);
        this.edicao = edicao;
    }

    public get getEdicao(): number {return this.edicao}

    public set setEdicao(novaEdicao: number) {
        if (novaEdicao === 0) {
            console.log("\n ERRO: A edição deve ser maior que zero");
            return;
        }
        this.edicao = novaEdicao;
    }
}