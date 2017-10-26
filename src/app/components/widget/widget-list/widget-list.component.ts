import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';
import {WidgetType} from '../../../model/widgettype.model';
import {DomSanitizer, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  widgets: any = [];
  userId: string;
  websiteId: string;
  pageId: string;
  widgetType = WidgetType;
  updated: boolean;

  constructor(private router: Router,
              private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute,
              private sanitizer: DomSanitizer,
              private titleService: Title) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.pageId = params['pid'];
          this.userId = params['uid'];
          this.websiteId = params['wid'];
        }
      );
    this.titleService.setTitle('Widget List');
    this.widgetService.findWidgetsByPageId(this.pageId)
      .subscribe(
        (widgets: any) => {
          this.widgets = widgets;
          for (let x = 0; x < this.widgets.length; x++) {
            // For youtube widgets, bypass security for URL
            this.widgets[x]['url'] = this.sanitizer.bypassSecurityTrustResourceUrl(this.widgets[x]['url']);
          }
        }
      );
}

  sortWidgets(event: Object) {
    console.log('Initial and Final: ' + event['initial'] + ' ' + event['final']);
    this.widgetService.sortWidgets(this.pageId, this.widgets[event['initial']], event['initial'], event['final'])
      .subscribe(
        (widgets) => {
          this.updated = true;
        },
        (err) => {
          console.log('Error reordering widgets' + err);
        }
      );
  }


}
