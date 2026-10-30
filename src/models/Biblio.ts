export class Biblio {
    private titulo: string;
    private anoPublicacao: number;

    constructor(titulo: string, anoPublicacao: number) {
        this.titulo = titulo;
        this.anoPublicacao = anoPublicacao;
    }

    public get getTitulo(): string {return this.titulo}
    public get getAnoPublicacao(): number {return this.anoPublicacao}

    public set setTitulo(novoTitulo: string) {
        if (novoTitulo.trim() .length === 0) {
            console.log("\n ERRO: O título não pode ser vazio");
            return;
        }
        this.titulo = novoTitulo;
    }


    public set setAnoPublicacao(novoAnoPublicacao: number) {
        if (novoAnoPublicacao === 0) {
            console.log("\n ERRO: O ano de publicação deve ser válido");
            return;
        }
        this.anoPublicacao = novoAnoPublicacao;
    }
} 