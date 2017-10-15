import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PageService} from '../../../services/page.service.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  userId: string;
  websites: {};
  name: string;
  descr: string;
  websiteId: string;
  pageId: string;
  @ViewChild('f') newForm: NgForm;
  pages: {};

  constructor(private activatedRoute: ActivatedRoute, private pageService: PageService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pages = this.pageService.findPageByWebsiteId(this.websiteId);
    });
  }
  add() {
    console.log('Inside add function');
    const page = {};
    this.name = this.newForm.value.name;
    this.descr = this.newForm.value.descr;
    console.log('Form values ' + this.name + this.descr);
    page['name'] = this.name;
    page['description'] = this.descr;
    this.pageService.createPage(this.websiteId, page);
    this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page']);
    console.log('Page added with name and descr' + this.name + this.descr);
    console.log('new JSON array' + JSON.stringify(this.pageService.pages));
  }

}
