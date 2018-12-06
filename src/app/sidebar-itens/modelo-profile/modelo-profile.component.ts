import { Component, OnInit } from '@angular/core';
import { ModeloModel } from 'app/models/modelo.model';
import { ModeloService } from 'app/services/modelo.service';

@Component({
  selector: 'app-modelo-profile',
  templateUrl: './modelo-profile.component.html',
  styleUrls: ['./modelo-profile.component.css']
})
export class ModeloProfileComponent implements OnInit {

  public modelo: ModeloModel;

  constructor(private modeloService: ModeloService) {
    this.modelo = new ModeloModel();
   }

  ngOnInit() {
  }

  adicionarModelo(){
    this.modeloService.addModelo(this.modelo).subscribe();
    this.modelo = new ModeloModel();
  }

}
