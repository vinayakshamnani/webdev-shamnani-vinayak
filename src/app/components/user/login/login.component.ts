import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {Title} from "@angular/platform-browser";
import {SharedService} from "../../../services/shared.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;
  username: string;
  password: string;
  errorFlag: boolean;
  errorMsg = 'Invalid credentials!';

  constructor(private router: Router, private userService: UserService, private titleService: Title, private sharedService: SharedService) { }

  ngOnInit() {
    this.titleService.setTitle('Login');
    if (this.userService.loggedIn()) {
      this.router.navigate(['/profile']);
    }
  }
  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    if (this.username === '' || this.password === '') {
      this.errorFlag = true;
      this.errorMsg = 'Both credentials are required!';
    } else {
      this.errorFlag = false;
      this.userService.login(this.username, this.password)
        .subscribe(
          (data: any) => {
            this.sharedService.user = data;
            this.router.navigate(['/profile'])},
          (error: any) => {
            this.errorFlag = true;
            this.errorMsg = 'Invalid credentials'
            console.log(error);
          }
        );
    }

  }
}
