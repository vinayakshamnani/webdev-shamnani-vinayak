import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import {Title} from "@angular/platform-browser";


@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {
  userId: string;
  websites: any = [];

  constructor(private route: ActivatedRoute, private websiteService: WebsiteService, private titleService: Title) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
    });
    this.websiteService.findWebsiteByUser(this.userId)
      .subscribe(
        (websites: any) => {
          this.websites = websites;
        },
        (error: any) => {
          console.log(error);
        }
      );

    this.titleService.setTitle('Website List');
  }

}
