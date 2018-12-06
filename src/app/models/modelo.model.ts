export class ModeloModel {
    public id: number;
    public nome: string;
    public descricao: boolean;
    public historicoDeCompras: boolean;
    public listaDeSets: boolean;
    public listaDeDesejo: boolean;
    public listaDePecas: boolean;
    
    public conteudo: string;

    public constructor(){
        this.conteudo = this.mostrarConteudo();
    }
    
    public mostrarConteudo(){
        let conteudo: string = "";
         if(this.descricao) { conteudo += "Descrição, "}
         if(this.historicoDeCompras) { conteudo += "Historico De Compras, "}
         if(this.listaDeSets) { conteudo += "Lista De Sets, "}
         if(this.listaDeDesejo) { conteudo += "Lista De Desejo, "}
         if(this.listaDePecas) { conteudo += "Lista De Pecas, "}

         return conteudo;
    }
}