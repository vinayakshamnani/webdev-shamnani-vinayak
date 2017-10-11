import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

@Injectable()

export class PageService {
  constructor() { }
  pages = [
    { '_id': '321', 'name': 'Post 1', 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '432', 'name': 'Post 2', 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '543', 'name': 'Post 3', 'websiteId': '456', 'description': 'Lorem' }
  ]

  api = {
    'createPage'             : this.createPage,
    'findPageByWebsiteId'    : this.findPageByWebsiteId,
    'findPageById'           : this.findPageById,
    'updatePage'             : this.updatePage,
    'deletePage'             : this.deletePage,
  };
  createPage(websiteId: string, page: any) {
    let id = Math.floor(Math.random() * 10000);
    // Ids must be unique
    while (this.findPageById(id.toString())) {
      id = id * 2;
    }
    page._id = id.toString();
    this.pages.push(page);
    return page;
  }
  findPageByWebsiteId(websiteId: string) {
    const list = [];
    for(let x = 0; x < this.pages.length; x++) {
      if (this.pages[x].websiteId === websiteId) {list.push(this.pages[x]); }
    }
    return list;
  }


  findPageById(pageId: string) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {return this.pages[x]; }
    }
  }



  updatePage(pageId: string, page: any) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
        this.pages[x] = page;
      }
    }
  }
  deletePage(pageId: string) {
    const pageIndex = this.pages.findIndex(i => i._id === pageId);
    if (this.pages[pageIndex]) {
      this.pages.splice(pageIndex, 1);
    }
    return this.pages[pageIndex];
  }
}
