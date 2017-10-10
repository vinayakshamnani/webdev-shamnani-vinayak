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
  errorMessage: 'Passwords do not match';
  userExistsMessage: 'Username not available. Choose a different username.';
  @ViewChild('f') registrationForm: NgForm;
  newUser: {};
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  register(){
    this.username = this.registrationForm.value.username;
    this.password = this.registrationForm.value.password;
    this.verifypwd = this.registrationForm.value.verifypwd;
    const user = this.userService.findUserByUsername(this.username);
    if(user) {
      this.userExistsFlag = true;
    } else if (this.password !== this.verifypwd) {
      this.errorFlag = true;
    } else {
      const addUser = {_id: "", username: this.username, password: this.password, firstName: '', lastName: '', email: ''}
      const id: string = this.userService.createUser(addUser);
      this.router.navigate(['/user/', id]);
    }
  }

}
