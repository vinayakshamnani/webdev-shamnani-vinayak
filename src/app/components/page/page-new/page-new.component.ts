import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PageService} from '../../../services/page.service.client';
import {NgForm} from '@angular/forms';
import {Title} from "@angular/platform-browser";

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

  constructor(private activatedRoute: ActivatedRoute,
              private pageService: PageService,
              private router: Router,
              private titleService: Title) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
        }
      );
    this.pageService.findPageByWebsiteId(this.websiteId)
      .subscribe(
        (pages: any) => {
          this.pages = pages;
          console.log('Pages here is ' + JSON.stringify(this.pages));
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
  add() {
    console.log('inside add');
    let page = {};
    this.name = this.newForm.value.name;
    this.descr = this.newForm.value.descr;
    page['name'] = this.name;
    page['description'] = this.descr;
    this.pageService.createPage(this.websiteId, page)
      .subscribe(
        (page: any) => {
          this.router.navigate(['../'],{relativeTo: this.activatedRoute});
        }
      );
  }

}
