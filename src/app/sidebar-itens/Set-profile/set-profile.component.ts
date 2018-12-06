import { Component, OnInit } from '@angular/core';
import { Set } from '../../models/set.model';
import { Peca } from '../../models/peca.model';
import { SetService } from 'app/services/set.service';
import { ListaDesejoService } from 'app/services/listaDesejo.service';

@Component({
  selector: 'app-set-profile',
  templateUrl: './set-profile.component.html',
  styleUrls: ['./set-profile.component.css']
})
export class SetProfileComponent implements OnInit {

  public set: Set;
  public peca: Peca;
  public pecas: Array<Peca>;

  constructor(private setService: SetService, private listaDesejoService: ListaDesejoService) {
    this.set = new Set();
    this.peca = new Peca();
    this.pecas = new Array<Peca>();
  }

  ngOnInit() {
  }

  adicionarPeca() {
    this.pecas.push(this.peca);
    this.peca = new Peca();
  }

  adicionarSet() {
    this.set.listaDePecas = this.pecas;
   

    if(this.set.listaDesejo){
      this.set.listaDeDesejoId = this.listaDesejoService.id;
    } 
    this.setService.addSet(this.set).subscribe(() => {
      this.set =  new Set();
      this.pecas = new Array<Peca>();
    })
  }

  deletePeca(peca: Peca) {
    for (let i = 0; i < this.pecas.length; i++) {
      if (this.pecas[i].numPeca === peca.numPeca) {
        this.pecas.splice(i, 1);
        break;
      }
    }
  }

}
