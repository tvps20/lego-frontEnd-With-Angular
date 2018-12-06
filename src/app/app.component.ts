import { Component, OnInit } from '@angular/core';
import { ListaDesejoService } from './services/listaDesejo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private listaDesejoService: ListaDesejoService) { }

  ngOnInit(): void {
    this.listaDesejoService.getListas().subscribe(resposta => {
      let lista: any[] = resposta['content'];

      if (lista.length <= 0) {
        this.listaDesejoService.criarLista().subscribe( id => {
          this.listaDesejoService.id = id;
        });
      } else {
        this.listaDesejoService.id = lista[0].id;
      }
    })
  }

}
