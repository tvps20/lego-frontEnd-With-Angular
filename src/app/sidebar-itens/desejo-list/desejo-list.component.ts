import { Component, OnInit } from '@angular/core';
import { Set } from '../../models/set.model';
import { ListaDesejoService } from 'app/services/listaDesejo.service';
import { SetService } from 'app/services/set.service';
import { HistoricoCompra } from '../../models/historicoCompra.model';
import { HistoricoCompraService } from 'app/services/historicoCompra.service';

@Component({
  selector: 'app-desejo-list',
  templateUrl: './desejo-list.component.html',
  styleUrls: ['./desejo-list.component.css']
})
export class DesejoListComponent implements OnInit {

  public sets: Set[];

  constructor(private listaDesejoService: ListaDesejoService, private setService: SetService, private historicoCompraService: HistoricoCompraService) { }

  ngOnInit() {
    this.loadItens();
  }

  loadItens() {
    this.listaDesejoService.getSets().subscribe( resposta => {
      this.sets = resposta;     
    });
  }

  comprarSet(set: Set){
    set.listaDeDesejoId = null;
    let historicoCompra = new HistoricoCompra();
    historicoCompra.set = set;
    historicoCompra.preco = set.preco;
    this.historicoCompraService.addCompra(historicoCompra).subscribe();
    this.setService.upSet(set).subscribe(() => this.loadItens())
  }

}
