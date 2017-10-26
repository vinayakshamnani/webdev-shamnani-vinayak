import { Directive, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';
declare var jQuery: any;
@Directive({
  selector: '[appSortable]'
})
export class SortableDirective implements AfterViewInit {

  // properties
  @Output() newIndexes = new EventEmitter();
  private initialIndex: number;
  private finalIndex: number;

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    this.appSortable();
  }

  /**
   * Make the attached dom element sortable
   */
  private appSortable() {
    jQuery(this.el.nativeElement).sortable({
      axis: 'y',
      start: (event, ui) => {
        this.initialIndex = ui.item.index();
      },
      stop: (event, ui) => {
        this.finalIndex = ui.item.index();
        this.newIndexes.emit({
          initial: this.initialIndex,
          final: this.finalIndex
        });
      }
    });
  }
}
