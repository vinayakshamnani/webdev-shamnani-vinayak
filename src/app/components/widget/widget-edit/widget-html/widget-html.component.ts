import { Component, OnInit, ViewChild } from '@angular/core';
import {WidgetService} from "../../../../services/widget.service.client";
import {Router, ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {
  widgetId: string;
  widget: any;
  widgetName: string;
  widgetText: string;
  userId: string;
  @ViewChild('f') htmlForm: NgForm;

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {

    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.widgetId = params['wgid'];
          this.userId = params['uid'];
        }
      );
    this.widgetService.findWidgetById(this.widgetId).subscribe(
      (widget: any) => {
        this.widget = widget;
        this.widgetName = this.widget['name'];
        this.widgetText = this.widget['text'];
      }
    );
  }

  update() {
    this.widget['name'] = this.htmlForm.value.widgetName;
    this.widget['text'] = this.htmlForm.value.widgetText;
    console.log('Widget inside Update ' + JSON.stringify(this.widget));
    this.widgetService.updateWidget(this.widgetId, this.widget)
      .subscribe(
        (data: any) => {
          this.router.navigate(['../'], {relativeTo: this.activatedRoute});
        }
      );
  }

  delete() {
    this.widgetService.deleteWidget(this.widgetId).subscribe(
      (data: any) => {
        this.router.navigate(['../'], {relativeTo: this.activatedRoute});
      }
    );
  }
}
