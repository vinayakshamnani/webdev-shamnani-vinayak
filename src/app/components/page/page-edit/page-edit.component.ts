import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {PageService} from "../../../services/page.service.client";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  pageId: string;
  page: {};
  pages: {};
  websiteId: string;
  @ViewChild('f') editForm: NgForm;

  constructor(private activatedRoute: ActivatedRoute, private pageService: PageService, private titleService: Title,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.pageId = params['pid']
          this.websiteId = params['wid'];
        }
      );
    this.pageService.findPageById(this.pageId)
      .subscribe(
        (page: any) => {
          this.page = page;
        },
        (error: any) => {
          console.log(error);
        }
      );
    this.pageService.findPageByWebsiteId(this.websiteId)
      .subscribe(
        (pages: any) =>{
          this.pages = pages;
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  update() {
    this.page['name'] = this.editForm.value.name;
    this.page['description'] = this.editForm.value.descr;
    console.log('From the update form ' + this.editForm.value.name + ' ' + this.editForm.value.description);
    this.pageService.updatePage(this.pageId, this.page)
      .subscribe(
        (data: any) => {
          this.router.navigate(['../'],{relativeTo: this.activatedRoute});
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
  delete() {
    this.pageService.deletePage(this.pageId)
      .subscribe(
        (res: any) => {
          this.router.navigate(['../'],{relativeTo:this.activatedRoute});
        },
        (error: any) => {

        }
      );
  }

}
