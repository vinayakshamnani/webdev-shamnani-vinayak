import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  userId: string;
  website: any;
  websiteId: string;
  websiteName: string;
  description: string;
  websites: any[] = [{}];
  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
        }
      );
    this.websiteService.findWebsiteById(this.websiteId)
      .subscribe(
        (website: any) => {
          this.website = website;
          this.websiteName  = this.website['name'];
          this.description = this.website['description'];
        },
        (error:any) => {
          console.log(error);
        }

      );
    this.websiteService.findWebsiteByUser(this.userId).
    subscribe(
      (websites: any) => {
        this.websites = websites;
      },
      (error:any) => {
        console.log(error);
      }
    );
  }
  delete() {
    this.websiteService.deleteWebsite(this.websiteId)
      .subscribe(
      (res: any) => {
        this.router.navigate(['../'], {relativeTo: this.activatedRoute})
      },
      (error: any) => {
        console.log('Error is ' + error);
      }
    );
  }
  update() {
      this.website['name'] = this.websiteName;
      this.website['description'] = this.description;
      this.websiteService.updateWebsite(this.websiteId, this.website)
        .subscribe(
          (data: any) => {
            this.router.navigate(['../'], {relativeTo: this.activatedRoute})
            console.log('Updated website');
          },
          (error: any) => {
            console.log(error);
          }
        );
  }

}
