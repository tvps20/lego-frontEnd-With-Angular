import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { retry } from 'rxjs/operators';
import { URL_API } from 'app/util/app.api';
import { HistoricoCompra } from 'app/models/historicoCompra.model';



@Injectable()
export class HistoricoCompraService {
    
    constructor(private http: Http) { }

    public getHistoricoCompras(): Observable<HistoricoCompra[]> {
        return this.http.get(`${URL_API}/historico/compras`)
            // Convertendo os dados
            // retry perminte realizar novas tentativas caso a conecção falhe.
            .pipe(map((resposta: Response) => resposta.json()), retry(10))
    }

    public addCompra(historico: HistoricoCompra){
        let headers: Headers = new Headers();
        headers.append('Content-type', 'application/json');

        // Precisa receber uma string, entao stringify retorna uma string do objeto
        return this.http.post(`${URL_API}/historico/compras`, JSON.stringify(historico), new RequestOptions({ headers: headers }))
            // Convertendo os dados
            // retry perminte realizar novas tentativas caso a conecção falhe.
            .pipe(map((resposta: Response) => {
                console.log(resposta)
                return resposta.json().id
            }))
    }

    public deleteHistorico(id: number) {
        return this.http.delete(`${URL_API}/historico/compras/${id}`);
    }

}