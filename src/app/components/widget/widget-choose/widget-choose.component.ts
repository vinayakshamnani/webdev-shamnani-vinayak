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

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
              private widgetService: WidgetService, private titleService: Title) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.pageId = params['pid'];
          this.userId = params['uid'];
          this.websiteId = params['wid'];
        }
      );
  }

  add(wType: string) {
    let widget = {
      widgetType: wType,
      _id: '0',
    }
    this.widgetService.createWidget(this.pageId, widget).subscribe(
      (widget: any) => {
        this.router.navigate(['..', widget._id],{relativeTo: this.activatedRoute});
      }
    )

  }

}
