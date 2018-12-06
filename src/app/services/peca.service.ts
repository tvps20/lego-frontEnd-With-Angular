import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Peca } from 'app/models/peca.model';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { retry } from 'rxjs/operators';
import { URL_API } from 'app/util/app.api';



@Injectable()
export class PecaService {

    constructor(private http: Http){}

    public getPecas(): Observable<Peca[]> {
        return this.http.get(`${URL_API}/pecas`)
        // Convertendo os dados
        // retry perminte realizar novas tentativas caso a conecção falhe.
        .pipe(map((resposta: Response) => {
            return resposta.json()
        }), retry(10))
    }


    public addPeca(peca: Peca){
        let headers: Headers = new Headers();
        headers.append('Content-type', 'application/json');

        // Precisa receber uma string, entao stringify retorna uma string do objeto
        return this.http.post(`${URL_API}/pecas`, JSON.stringify(peca), new RequestOptions({ headers: headers }))
            // Convertendo os dados
            // retry perminte realizar novas tentativas caso a conecção falhe.
            .pipe(map((resposta: Response) => {
                return resposta.json().id
            }))
    }

    public deleteSet(id: number) {
        return this.http.delete(`${URL_API}/pecas/${id}`);
    }
}