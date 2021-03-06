import { Component, OnInit, ViewChild } from '@angular/core';
import {WidgetType} from '../../../model/widgettype.model';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {
  widget: any;
  widgetId: string;
  userId: string;
  websiteId: string;
  pageId: string;
  header = 'HEADING';
  image = 'IMAGE';
  youtube = 'YOUTUBE';
  html = 'HTML';
  text = 'TEXT';
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private widgetService: WidgetService,
              private titleService: Title) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
          this.widgetId = params['wgid'];
        }
      );
    this.widgetService.findWidgetById(this.widgetId)
      .subscribe(
        (widget: any) => {
          this.widget = widget;
        },
        (error:any) => {
          console.log(error);
        }
      );
    this.titleService.setTitle('Edit Widget');
  }

}
