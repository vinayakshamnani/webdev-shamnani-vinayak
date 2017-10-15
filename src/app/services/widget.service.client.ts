import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

@Injectable()

export class WidgetService {
  constructor() { }
  widgets = [
    { '_id': '123', 'widgetType': 'HEADING', 'pageId': '321', 'size': 2, 'text': 'GIZMODO'},
    { '_id': '234', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
    { '_id': '345', 'widgetType': 'IMAGE', 'pageId': '321', 'width': '100%',
      'url': 'http://lorempixel.com/400/200/'},
    { '_id': '456', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'},
    { '_id': '567', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
    { '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '321', 'width': '100%',
      'url': 'https://youtu.be/AM2Ivdi9c4E' },
    { '_id': '789', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'}
  ]


  api = {
    'createWidget'             : this.createWidget,
    'findWidgetsByPageId'    : this.findWidgetsByPageId,
    'findWidgetById'           : this.findWidgetById,
    'updateWidget'             : this.updateWidget,
    'deleteWidget'             : this.deleteWidget,
  };
  createWidget(pageId: string, widget: any) {
    let id = Math.floor(Math.random() * 10000);
    // Ids must be unique
    while (this.findWidgetById(id.toString())) {
      id = id * 2;
    }
    widget._id = id.toString();
    widget.pageId = pageId;
    this.widgets.push(widget);
    return widget;
  }
  findWidgetsByPageId(pageId: string) {
    const list = [];
    for(let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x].pageId === pageId) {list.push(this.widgets[x]); }
    }
    return list;
  }


  findWidgetById(widgetId: string) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        return this.widgets[x]; }
    }
  }



  updateWidget(widgetId: string, widget: any) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        this.widgets[x] = widget;
      }
    }
  }
  deleteWidget(widgetId: string) {
    const widgetIndex = this.widgets.findIndex(i => i._id === widgetId);
    if (this.widgets[widgetIndex]) {
      this.widgets.splice(widgetIndex, 1);
    }
    return this.widgets[widgetIndex];
  }
}
