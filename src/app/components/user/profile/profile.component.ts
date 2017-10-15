import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from "@angular/forms";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId: string;
  user = {};
  username: string;
  @ViewChild('f') profileForm: NgForm;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('User Profile');
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
      this.user = this.userService.findUserById(this.userId);
      this.username = this.user['username'];
    });


  }
    update() {
      this.user['username'] = this.profileForm.value.username;
      this.user['email'] = this.profileForm.value.email;
      this.user['firstName'] = this.profileForm.value.firstName;
      this.user['lastName'] = this.profileForm.value.lastName;
      this.userService.updateUser(this.userId, this.user);

    }
  }

