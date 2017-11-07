import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {
  widgetId: string;
  widget: any;
  widgetName: string;
  widgetText: string;
  rows: number;
  placeholder: string;
  formatted: boolean;

  constructor(private widgetService: WidgetService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {this.widgetId = params['wgid'];}
    );
    this.widgetService.findWidgetById(this.widgetId)
      .subscribe(
        (widget: any) => {
          this.widget = widget;
          this.widgetName = this.widget['name'];
          this.widgetText = this.widget['text'];
          this.rows = this.widget['rows'];
          this.placeholder = this.widget['placeholder'];
          this.formatted = this.widget['formatted'];
        }
      );
  }

  update(){
    this.widget['name'] = this.widgetName ;
    this.widget['text'] = this.widgetText;
    this.widget['rows'] = this.rows;
    this.widget['placeholder'] = this.placeholder;
    this.widget['formatted'] = this.formatted;
    console.log('Widget at 44 is ' + JSON.stringify(this.widget));
    this.widgetService.updateWidget(this.widgetId, this.widget)
      .subscribe(
        (widget: any) => {
          this.router.navigate(['../'],{relativeTo: this.activatedRoute});
        }
      );
       }
  delete() {
      this.widgetService.deleteWidget(this.widgetId).subscribe(
            (res: any) => {
              this.router.navigate(['../'],{relativeTo:this.activatedRoute});
            }
        );
     }

}
