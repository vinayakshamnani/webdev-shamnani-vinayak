import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';
import {WidgetType} from '../../../model/widgettype.model';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  widgets: any[];
  userId: string;
  websiteId: string;
  pageId: string;
  widgetType = WidgetType;

  constructor(private router: Router, private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.pageId = params['pid'];
      this.websiteId = params['wid'];
      this.userId = params['uid'];
      this.widgets = this.widgetService.findWidgetsByPageId(this.pageId);
    });
  }
  sanitizeUrl(url: string) {
    const videoId = url.split('/');
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + videoId[videoId.length - 1]);
}

}
