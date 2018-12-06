import { Component, OnInit } from '@angular/core';
import LoginModel from 'app/models/login.model';
import { AuthService } from 'app/services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	public user: LoginModel;

	constructor(private authService: AuthService, private router: Router) {
		this.user = new LoginModel();
	}

	ngOnInit() {
	}

	onSubmit() {
		this.authService.login(this.user);
		this.router.navigate(['dashboard']);	
	}

}
