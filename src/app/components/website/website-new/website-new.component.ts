import { Component, OnInit,ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {WebsiteService} from "../../../services/website.service.client";
import {Routes, RouterModule, ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

  @ViewChild('f') websiteForm: NgForm;
  userId: string;
  websiteName: string;
  description: string;
  websites: any[] = [{}];
  submitted: boolean;
  errorFlag: boolean;
  errorMsg: string;
  constructor(private websiteService: WebsiteService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
        }
      );
    this.websiteService.findWebsiteByUser(this.userId)
      .subscribe(
        (websites:any) => {
          this.websites = websites;
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
  add() {

    this.websiteName = this.websiteForm.value.websiteName;
    this.description = this.websiteForm.value.description;
    if (this.websiteName === '') {
      this.errorFlag = true;
    } else {
    let website = {_id: '', name: this.websiteName, developerId: this.userId, description: this.description};

    this.websiteService.createWebsite(this.userId, website).subscribe(
      (website: any) => {
        this.router.navigate(['../'], {relativeTo: this.route});
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  }

}
