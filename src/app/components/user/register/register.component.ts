import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';
import {Title} from '@angular/platform-browser';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string;
  password: string;
  verifypwd: string;
  errorFlag: boolean;
  userExistsFlag: boolean;
  errorMessage = 'Passwords do not match';
  userExistsMessage = 'Username not available. Choose a different username.';
  @ViewChild('f') registrationForm: NgForm;
  constructor(private router: Router, private userService: UserService, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Register');
  }

  register() {
    this.username = this.registrationForm.value.username;
    this.password = this.registrationForm.value.password;
    this.verifypwd = this.registrationForm.value.verifypwd;
      if (this.password === this.verifypwd){
        this.userService.register(this.username, this.password)
          .subscribe(
            (data: any) => {
              this.router.navigate(['/profile']);
            },
            (error: any) => {
              console.log(error);
            }
          );

      } else {
        this.errorFlag = true;
      }
  }
}
