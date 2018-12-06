import { Component, OnInit } from '@angular/core';
import { ModeloModel } from 'app/models/modelo.model';
import { ModeloService } from 'app/services/modelo.service';
import { DocumentoModel } from 'app/models/documento.model';

@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.css']
})
export class DocumentoComponent implements OnInit {
    
  private listaDeModelos: ModeloModel[];
  private modeloSelecionado: boolean;
  private modelo: ModeloModel;
  private documento: DocumentoModel;

  constructor( private modeloService: ModeloService) { 
    this.modelo = new ModeloModel();
    this.documento = new DocumentoModel();
    this.modeloSelecionado = false;
  }

  ngOnInit() {
    this.loadItens();
  }

  loadItens() {
    this.modeloService.getModelos().subscribe( resposta => {
      this.listaDeModelos = resposta['content'];
    })
  }

  documentoPeca(){}

  selecionarModelo(modelo: ModeloModel){
    this.modeloSelecionado = true;
    this.modelo = modelo;
  }


}
