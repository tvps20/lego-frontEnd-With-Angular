import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { ModeloModel } from '../models/modelo.model'

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { retry } from 'rxjs/operators';
import { URL_API } from 'app/util/app.api';



@Injectable()
export class ModeloService {

    constructor(private http: Http){}

    public getModelos(): Observable<ModeloModel[]> {
        return this.http.get(`${URL_API}/modelos/documentos`)
        // Convertendo os dados
        // retry perminte realizar novas tentativas caso a conecção falhe.
        .pipe(map((resposta: Response) => {
            return resposta.json()
        }), retry(10))
    }

    public addModelo(modelo: ModeloModel){
        let headers: Headers = new Headers();
        headers.append('Content-type', 'application/json');

        // Precisa receber uma string, entao stringify retorna uma string do objeto
        return this.http.post(`${URL_API}/modelos/documentos`, JSON.stringify(modelo), new RequestOptions({ headers: headers }))
            // Convertendo os dados
            // retry perminte realizar novas tentativas caso a conecção falhe.
            .pipe(map((resposta: Response) => {
                return resposta.json().id
            }))
    }

    public deleteModelo(id: number) {
        return this.http.delete(`${URL_API}/modelos/documentos/${id}`);
    }


}