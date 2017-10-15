import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';
import {ActivatedRoute} from "@angular/router";
import {PageService} from "../../../services/page.service.client";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  userId: string;
  websiteId: string;
  pageId: string;
  page: {};
  showDeleteConfirmation: boolean;
  pages: {};
  @ViewChild('f') editForm: NgForm;

  constructor(private activatedRoute: ActivatedRoute, private pageService: PageService, private titleService: Title) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.pages = this.pageService.findPageByWebsiteId(this.websiteId);
      this.page = this.pageService.findPageById(this.pageId);
      this.titleService.setTitle('Edit Page');
    });
  }

  update() {
    this.page['name'] = this.editForm.value.name;
    this.page['description'] = this.editForm.value.descr;
    this.pageService.updatePage(this.pageId, this.page);
  }
  delete() {
    this.pageService.deletePage(this.pageId);
  }

}
