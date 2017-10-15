import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';



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
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  register() {
    let user = {};
    this.username = this.registrationForm.value.username;
    this.password = this.registrationForm.value.password;
    this.verifypwd = this.registrationForm.value.verifypwd;
    const user2 = this.userService.findUserByUsername(this.username);
    if (user2) {
      this.userExistsFlag = true;
    } else if (this.password !== this.verifypwd) {
      this.errorFlag = true;
    } else {
      user['username'] = this.username;
      user['password'] = this.password;
      user = this.userService.createUser(user);
      this.router.navigate(['user', user['_id']]);
    }
  }

}
