import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WidgetService} from '../../../../services/widget.service.client';
@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {
  userId: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
  widget;

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.widgetId = params['wgid'];
      this.widget = this.widgetService.findWidgetById(this.widgetId);
    });
  }

  delete() {
    this.widgetService.deleteWidget(this.widgetId);
    this.router.navigate(['/user', this.userId,
      'website', this.websiteId,
      'page', this.pageId,
      'widget']);
  }
}
