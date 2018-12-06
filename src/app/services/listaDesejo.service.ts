import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { retry } from 'rxjs/operators';
import { URL_API } from 'app/util/app.api';



@Injectable()
export class ListaDesejoService {

    public id;

    constructor(private http: Http){}

    public criarLista(){

        let headers: Headers = new Headers();
        headers.append('Content-type', 'application/json');

        // Precisa receber uma string, entao stringify retorna uma string do objeto
        return this.http.post(`${URL_API}/lista`, JSON.stringify({ "nome": "Lista de Desejos"}), new RequestOptions({ headers: headers }))
            // Convertendo os dados
            // retry perminte realizar novas tentativas caso a conecção falhe.
            .pipe(map((resposta: Response) => {
                return resposta.json().id
            }))
    }

    public getListas(): Observable<any[]> {
        return this.http.get(`${URL_API}/lista`)
            // Convertendo os dados
            // retry perminte realizar novas tentativas caso a conecção falhe.
            .pipe(map((resposta: Response) => resposta.json()), retry(10))
    }

    public getSets(): Observable<any[]> {
        return this.http.get(`${URL_API}/lista/meusdesejos`)
            // Convertendo os dados
            // retry perminte realizar novas tentativas caso a conecção falhe.
            .pipe(map((resposta: Response) => resposta.json()), retry(10))
    }
}