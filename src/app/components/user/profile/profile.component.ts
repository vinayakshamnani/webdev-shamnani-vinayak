import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {SharedService} from "../../../services/shared.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId: string;
  user: any;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  @ViewChild('f') profileForm: NgForm;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute,
              private titleService: Title, private router: Router,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.titleService.setTitle('User Profile');
    this.user = this.sharedService.user;
    this.userId = this.user['_id'];
    this.username = this.user['username'];
    this.email = this.user['email'];
    this.firstName = this.user['firstName'];
    this.lastName = this.user['lastName'];


  }

  logout() {
      this.userService.logout()
         .subscribe(
             (data: any) => this.router.navigate(['/login'])
         );
    }
    update() {
      this.user['username'] = this.profileForm.value.username;
      this.user['email'] = this.profileForm.value.email;
      this.user['firstName'] = this.profileForm.value.firstName;
      this.user['lastName'] = this.profileForm.value.lastName;
      this.userService.updateUser(this.userId, this.user)
        .subscribe(
          (updatedUser) => {
            if (updatedUser) {
              this.user = updatedUser;
            } },
          (err) => {
          }
        );

    }
  }

