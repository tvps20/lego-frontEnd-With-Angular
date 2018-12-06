import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Set } from '../models/set.model';


import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { retry } from 'rxjs/operators';
import { URL_API } from 'app/util/app.api';


@Injectable()
export class SetService {

    constructor(private http: Http) { }

    public getSets(): Observable<Set[]> {
        return this.http.get(`${URL_API}/sets`)
            // Convertendo os dados
            // retry perminte realizar novas tentativas caso a conecção falhe.
            .pipe(map((resposta: Response) => resposta.json()), retry(10))
    }

    public addSet(set: Set){
        let headers: Headers = new Headers();
        headers.append('Content-type', 'application/json');

        // Precisa receber uma string, entao stringify retorna uma string do objeto
        return this.http.post(`${URL_API}/sets`, JSON.stringify(set), new RequestOptions({ headers: headers }))
            // Convertendo os dados
            // retry perminte realizar novas tentativas caso a conecção falhe.
            .pipe(map((resposta: Response) => {
                return resposta.json().id
            }))
    }

    public deleteSet(id: number) {
        return this.http.delete(`${URL_API}/sets/${id}`);
    }

    public upSet(set: Set){
        let headers: Headers = new Headers();
        headers.append('Content-type', 'application/json');
        console.log(set)

        // Precisa receber uma string, entao stringify retorna uma string do objeto
        return this.http.put(`${URL_API}/sets`, JSON.stringify(set), new RequestOptions({ headers: headers }))
    }
}