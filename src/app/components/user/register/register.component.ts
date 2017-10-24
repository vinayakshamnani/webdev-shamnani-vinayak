import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';
import {Title} from "@angular/platform-browser";



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
    let user = {};
    this.username = this.registrationForm.value.username;
    this.password = this.registrationForm.value.password;
    this.verifypwd = this.registrationForm.value.verifypwd;
    const user2 = this.userService.findUserByUsername(this.username)
      .subscribe(
        (user: any)=> {
          this.userExistsFlag = true;
        },
        (error:any)=>{
          if (this.password === this.verifypwd){
            let user = {_id: '', username: this.username, password: this.password, firstName: '', lastName: ''};
            this.userService.createUser(user)
              .subscribe(
                (user2: any) => {
                  this.router.navigate(['/user', user2._id]);
                },
                (error: any) => {
                  this.errorFlag = true;
                  this.errorMessage = 'Error registering';
                }
              );
          } else{
            this.errorFlag = true;
          }
        }
      );
  }

}
