import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WebsiteService} from "../../../services/website.service.client";

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  userId: string;
  websiteId: string;
  descr: string;
  websites: {};
  name: string;

  constructor(private route: ActivatedRoute, private websiteService: WebsiteService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.websites = this.websiteService.findWebsiteByUser(this.userId);
      this.descr = this.websiteService.findWebsiteById(this.websiteId).description;
      this.name = this.websiteService.findWebsiteById(this.websiteId).name;
    });
  }

  update() {
    this.websiteService.updateWebsite(this.websiteId, {'name': this.name, 'desc': this.descr });
  }
  delete() {
    this.websiteService.deleteWebsite(this.websiteId);
  }

}
