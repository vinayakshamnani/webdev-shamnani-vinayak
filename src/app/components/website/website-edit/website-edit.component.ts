import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import {NgForm} from '@angular/forms';

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
  @ViewChild('f') editForm: NgForm;
  website = {};

  constructor(private route: ActivatedRoute, private websiteService: WebsiteService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.website = this.websiteService.findWebsiteById(this.websiteId);
      this.websites = this.websiteService.findWebsiteByUser(this.userId);
      this.descr = this.websiteService.findWebsiteById(this.websiteId).description;
      this.name = this.websiteService.findWebsiteById(this.websiteId).name;
    });
  }

  update() {
    this.website['name'] = this.editForm.value.name;
    this.website['description'] = this.editForm.value.desc;
    this.websiteService.updateWebsite(this.websiteId, this.website);
  }
  delete() {
    this.websiteService.deleteWebsite(this.websiteId);
    console.log('Deleted website id '+this.websiteId);
    console.log('New website JSON is '+ JSON.stringify(this.websiteService.websites));
  }

}
