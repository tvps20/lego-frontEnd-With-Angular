import { Injectable } from '@angular/core';
import LoginModel from 'app/models/login.model';

@Injectable()
export class AuthService {

    private userKey: string = "user-key";
    private tokenKey: string = "token-key";
    
    private user: LoginModel;

    constructor() {
    }

    public login(user: LoginModel) {

        this.user = user;

        localStorage.setItem(this.userKey, JSON.stringify(user));
        localStorage.setItem(this.tokenKey, "token");
    }

    public getUser() {

        if (this.user)
            return this.user;

        this.user = JSON.parse(localStorage.getItem(this.userKey));

        return this.user;
    }

    public isAuthenticated() {

        // se ta em memoria, retorna verdadeiro de cara
        if (this.user)
            return true;

        // caso contrario pega no local storage
        this.user = JSON.parse(localStorage.getItem(this.userKey));

        // se o cara existir retorna verdadeira
        if (this.user)
            return true;

        // caso contrario, o cara nunca logou
        return false;
    }

    public logout() {
        this.user = undefined;

        localStorage.clear();
    }
}