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
  pages: any[];
  pageId: string;

  constructor(private route: ActivatedRoute, private pageService: PageService, private titleService: Title) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.webId = params['wid'];
      this.pageId = params['pid'];
      this.pages = this.pageService.findPageByWebsiteId(this.webId);
      this.titleService.setTitle('Page List');
    });

  }

}
