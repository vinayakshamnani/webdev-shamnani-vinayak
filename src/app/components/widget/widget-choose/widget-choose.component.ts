import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-widget-choose',
  templateUrl: './widget-choose.component.html',
  styleUrls: ['./widget-choose.component.css']
})
export class WidgetChooseComponent implements OnInit {
  userId: string;
  websiteId: string;
  pageId: string;

  constructor(private route: ActivatedRoute, private router: Router, private widgetService: WidgetService, private titleService: Title) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.titleService.setTitle('Choose a Widget');
    });
  }

  add(wType: string) {
    let widget = {
      widgetType: wType,
      _id: '0',
    }
    widget = this.widgetService.createWidget(this.pageId, widget);
    this.router.navigate(['../' + widget._id], {relativeTo: this.route});
  }

}
