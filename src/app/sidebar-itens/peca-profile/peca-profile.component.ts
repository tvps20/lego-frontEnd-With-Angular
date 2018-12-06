import { Component, OnInit } from '@angular/core';
import { PecaService } from 'app/services/peca.service';
import { SetService } from 'app/services/set.service';
import { Set } from '../../models/set.model';
import { Peca } from '../../models/peca.model';

@Component({
  selector: 'app-peca-profile',
  templateUrl: './peca-profile.component.html',
  styleUrls: ['./peca-profile.component.css']
})
export class PecaProfileComponent implements OnInit {

  private peca: Peca;
  private setSelecionado: boolean;
  private set: Set;
  public listaDeSets: Set[];

  constructor(private setService: SetService, private pecaService: PecaService) {
    this.peca =  new Peca();
    this.set = new Set();
    this.setSelecionado = false;
  }

  ngOnInit() {
    this.loadItens();
  }

  loadItens() {
    this.setService.getSets().subscribe( resposta => {
      this.listaDeSets = resposta['content'];   
    });
  }

  selecionarSet(set: Set){
    this.setSelecionado = true;
    this.set = set;
  }

  adicionarPeca(){
    this.peca.setId = this.set.id;
    this.pecaService.addPeca(this.peca).subscribe(() => this.peca = new Peca())
  }

}
