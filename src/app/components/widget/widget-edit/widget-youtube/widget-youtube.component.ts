import { Component, OnInit, ViewChild } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {SafeResourceUrl, SafeUrl} from '@angular/platform-browser'
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
  userId: string;
  pageId: string;
  websiteId: string;
  widgetId: string;
  widget: any;
  widgetName: string;
  widgetTitle: string;
  widgetUrl: SafeResourceUrl;
  widgetWidth: string;
  errorFlag: boolean;
  errorMsg: string;
  updated: boolean;
  @ViewChild('f') youtubeForm: NgForm;
  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params:  any)  =>  {
          this.userId = params['uid'];
          this.pageId = params['pid'];
          this.websiteId = params['wid'];
          this.widgetId = params['wgid'];
        }
      );
    this.widgetService.findWidgetById(this.widgetId).subscribe(
      (widget: any) => {
        this.widget = widget;
        this.widgetName = this.widget['name'];
        this.widgetTitle = this.widget['title'];
        this.widgetUrl = this.widget['url'];
        this.widgetWidth = this.widget['width'];
      }
    );

  }
  update() {
    this.updated = true;
    this.widget['name'] = this.youtubeForm.value.name;
    this.widget['title'] = this.youtubeForm.value.title;
    this.widget['width'] = this.youtubeForm.value.width;
    this.widget['url'] = this.youtubeForm.value.url;
    if (this.widget['name'] === '') {
      this.errorFlag = true;
      this.errorMsg = 'Widget name is required';
    } else {
      this.widgetService.updateWidget(this.widgetId, this.widget)
        .subscribe(
          (data: any) => {
            this.router.navigate(['../'], {relativeTo: this.activatedRoute});
          }
        );
    }
  }
  delete(){
    this.widgetService.deleteWidget(this.widgetId).subscribe(
      (data: any) => {
        this.router.navigate(['../'],{relativeTo: this.activatedRoute});
      }
    );
  }

}
