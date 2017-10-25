import { Component, OnInit, ViewChild } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {

  pageId: string;
  websiteId: string;
  userId: string;
  widgetId: string;
  widget: any;
  widgetName: string;
  widgetText: string;
  widgetSize: number;
  @ViewChild('f') headingForm: NgForm;
  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.widgetId = params['wgid'];
          this.userId = params['uid'];
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
        }
      );
    this.widgetService.findWidgetById(this.widgetId).subscribe(
      (widget: any) => {
        this.widget = widget;
        this.widgetName = this.widget['name'];
        this.widgetText = this.widget['text'];
        this.widgetSize = eval(this.widget['size']);
      }
    );

  }

  update() {
    this.widget['name'] = this.headingForm.value.name;
    this.widget['text'] = this.headingForm.value.text;
    this.widget['size'] = this.headingForm.value.size;
    this.widgetService.updateWidget(this.widgetId,this.widget)
      .subscribe(
        (data: any) => {
          this.router.navigate(['../'],{relativeTo: this.activatedRoute});
        }
      );
  }
  delete() {
    this.widgetService.deleteWidget(this.widgetId).subscribe(
      (data: any) => {
        this.router.navigate(['../'],{relativeTo: this.activatedRoute});
      }
    );
  }

}
