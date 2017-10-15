import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  userId: string;
  websites: {};
  name: string;
  descr: string;
  websiteId: string;

  constructor(private route: ActivatedRoute, private websiteService: WebsiteService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.websites = this.websiteService.findWebsiteByUser(this.userId);
      this.websiteId = params['wid'];
    });
  }

  add() {
    this.websiteService.createWebsite(this.userId, {_id: '', name: this.name, developerId: this.userId, description: this.descr });
  }
}
