import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {


  widget: {};
  userId: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
  @ViewChild('f') editForm: NgForm;

  constructor( private activatedRoute: ActivatedRoute, private widgetService: WidgetService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.widgetId = params['wgid'];
      this.widget = this.widgetService.findWidgetById(this.widgetId);
      console.log('Inside widget header');
    });
  }

  update() {
     this.widgetService.updateWidget(this.widgetId, this.widget);
     this.router.navigate(['/user', this.userId,
       'website', this.websiteId,
       'page', this.pageId,
       'widget']);
  }

  delete() {
    this.widgetService.deleteWidget(this.widgetId);
    console.log('deleted widget id ' + this.widgetId);
   console.log('New widget array ' + JSON.stringify(this.widgetService.widgets));
  }

}
