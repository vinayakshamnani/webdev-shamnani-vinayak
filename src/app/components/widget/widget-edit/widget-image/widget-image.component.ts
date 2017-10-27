import { Component, OnInit, ViewChild } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {SafeResourceUrl, SafeUrl} from '@angular/platform-browser'
import {environment} from '../../../../../environments/environment';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {

  widgetId: string;
  pageId: string;
  websiteId: string;
  userId: string;
  widget:any;
  widgetName: string;
  widgetText: string;
  widgetUrl: SafeResourceUrl;
  widgetWidth: string;
  @ViewChild('f') imageForm: NgForm;
  @ViewChild('upload') upload;
  baseUrl = environment.baseUrl;

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.widgetId = params['wgid'];
          this.pageId = params['pid'];
          this.websiteId = params['wid'];
          this.userId = params['uid'];
        }
      );
    this.widgetService.findWidgetById(this.widgetId).subscribe(
      (widget:any) => {
        this.widget = widget;
        this.widgetName = this.widget['name'];
        this.widgetText = this.widget['text'];
        this.widgetUrl = this.widget['url'];
        this.widgetWidth = this.widget['width'];
      }
    );
  }
  update() {
    this.widget['name'] = this.imageForm.value.name;
    this.widget['text'] = this.imageForm.value.text;
    this.widget['width'] = this.imageForm.value.width;
    this.widget['url'] = this.imageForm.value.url;
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
  search() {
    console.log('Inside search');
    this.router.navigate(['./search'],{relativeTo: this.activatedRoute});
  }
}
