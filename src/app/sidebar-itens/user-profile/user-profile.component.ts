import { Component, OnInit } from '@angular/core';
import LoginModel from 'app/models/login.model';
import { AuthService } from 'app/services/auth.service';
import { UserModel } from 'app/models/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public userProfile: LoginModel;
  public user: UserModel;

  constructor(private authService: AuthService) {
    this.user = new UserModel();
   }

  ngOnInit() {
    this.user.email = this.authService.getUser().email;
  }

  adicionarUser(){
    console.log("ok");
  }

}
