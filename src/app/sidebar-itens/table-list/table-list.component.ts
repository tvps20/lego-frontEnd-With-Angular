import { Component, OnInit } from '@angular/core';
import { SetService } from '../../services/set.service';
import { PecaService } from '../../services/peca.service';
import { Set } from '../../models/set.model';
import { Peca } from '../../models/peca.model';
import { Observable } from 'rxjs';
import { HistoricoCompraService } from '../../services/historicoCompra.service';
import { HistoricoCompra } from 'app/models/historicoCompra.model';
import { ModeloService } from 'app/services/modelo.service';
import { ModeloModel } from 'app/models/modelo.model';


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  public sets: Set[];
  public pecas: Observable<Peca[]>;
  public historicosCompras: HistoricoCompra[];
  public modelos: ModeloModel[];

  constructor(private setService: SetService, 
    private pecaService: PecaService, 
    private historicoCompraService: HistoricoCompraService,
    private modeloService: ModeloService) { }

  ngOnInit() {
    this.loadItens();
  }

  deletaSet(set: Set){
    this.setService.deleteSet(set.id).subscribe(() => this.loadItens());
  }

  deletaHistorico(historico: HistoricoCompra){
    this.historicoCompraService.deleteHistorico(historico.id).subscribe(() => this.loadItens());
  }

  deletaPeca(peca: Peca){
    this.pecaService.deleteSet(peca.id).subscribe(() => this.loadItens());
  }

  deletaModelo(modelo: ModeloModel){
    this.modeloService.deleteModelo(modelo.id).subscribe(() => this.loadItens());
  }

  loadItens() {
    this.setService.getSets().subscribe( resposta => {
      this.sets = resposta['content'];
      this.pecaService.getPecas().subscribe( resposta => {
        let pecasDoBanco = resposta['content'];
        this.configuraSetInPeca(pecasDoBanco);
        this.pecas = pecasDoBanco;
      })


      this.modeloService.getModelos().subscribe( resposta => {
        this.modelos = resposta['content'];
      })

      this.historicoCompraService.getHistoricoCompras().subscribe(resposta => {
        this.historicosCompras = resposta['content'];
    })
    });
  }

  configuraSetInPeca(pecas: Array<Peca>) {
    for(let i = 0; i < pecas.length; i++ ){
      for(let j = 0; j < this.sets.length; j++ ){
        if(pecas[i].setId == this.sets[j].id) { 
          pecas[i].nomeDoSet = this.sets[j].nome; 
          break;
        }
      }
    }
  }
}
