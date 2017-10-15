import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WidgetService} from '../../../../services/widget.service.client';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
  userId: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
  widget = {};

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private titleService: Title) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.widgetId = params['wgid'];
      this.widget = this.widgetService.findWidgetById(this.widgetId);
    });
    this.titleService.setTitle('Youtube Widget');
  }
  delete() {
    this.widgetService.deleteWidget(this.widgetId);
  }

}
