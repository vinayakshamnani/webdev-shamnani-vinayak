import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

@Injectable()

export class WebsiteService {
  constructor() {
  }

  websites = [
    {'_id': '123', 'name': 'Facebook', 'developerId': '456', 'description': 'Lorem'},
    {'_id': '234', 'name': 'Tweeter', 'developerId': '456', 'description': 'Lorem'},
    {'_id': '456', 'name': 'Gizmodo', 'developerId': '456', 'description': 'Lorem'},
    {'_id': '890', 'name': 'Go', 'developerId': '123', 'description': 'Lorem'},
    {'_id': '567', 'name': 'Tic Tac Toe', 'developerId': '123', 'description': 'Lorem'},
    {'_id': '678', 'name': 'Checkers', 'developerId': '123', 'description': 'Lorem'},
    {'_id': '789', 'name': 'Chess', 'developerId': '234', 'description': 'Lorem'}
  ]

  api = {
    'createWebsite': this.createWebsite,
    'findWebsiteById': this.findWebsiteById,
    'findWebsiteByUser': this.findWebsiteByUser,
    'updateWebsite': this.updateWebsite,
    'deleteWebsite': this.deleteWebsite,
  };
  createWebsite(userId: string, website: any) {
    let id = Math.floor(Math.random() * 10000);
    // Ids must be unique
    while (this.findWebsiteById(id.toString())) {
      id = id * 2;
    }
    website._id = id.toString();
    website.developerId = userId;
    this.websites.push(website);
    return website;
  }
  findWebsiteByUser(userId: string) {
    const list = [];
    for(let x = 0; x < this.websites.length; x++) {
      if (this.websites[x].developerId === userId) {list.push(this.websites[x]); }
    }
    return list;
  }


  findWebsiteById(websiteId: string) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {return this.websites[x]; }
    }
  }

  updateWebsite(websiteId: string, website: any) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {
        this.websites[x] = website;
      }
    }
  }
  deleteWebsite(websiteId: string) {
    const websiteIndex = this.websites.findIndex(i => i._id === websiteId);
    if (this.websites[websiteIndex]) {
      this.websites.splice(websiteIndex, 1);
    }
    return this.websites[websiteIndex];
  }
}
