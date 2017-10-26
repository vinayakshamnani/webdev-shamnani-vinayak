import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PageService} from '../../../services/page.service.client';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  userId: string;
  webId: string;
  pages: any = [];
  pageId: string;
  abc: number;

  constructor(private activatedRoute: ActivatedRoute, private pageService: PageService, private titleService: Title) { }

  ngOnInit() {
    this.activatedRoute.params
    .subscribe(
(params: any) => {
      this.userId = params['uid'];
      this.webId = params['wid'];
}
);
this.pageService.findPageByWebsiteId(this.webId)
  .subscribe(
    (pages: any) => {
      this.pages = pages;
    },
    (error: any) => {
      console.log(error);
    }
  );
}

}
