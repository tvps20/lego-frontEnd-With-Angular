import { Peca } from "./peca.model";

export class Set {
    
    public id: number;
    public createdAt: string;
    public updatedAt: string;
    public nome: string;
    public ano: number;
    public preco: number;
    public listaDeDesejoId: number;
    public listaDePecas: Array<Peca>;
    public listaDeImagens: Array<Object>;

    public listaDesejo: boolean = false;

    constructor() {
        this.listaDeImagens = new Array<any>()
    }
}