import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class BoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  content:string='default box';

  @Input()
  cssClass:string='gray';

  @Output()
  clickbox:EventEmitter<string>=new EventEmitter<string>();

  handleclick(){
    this.clickbox.emit(this.content);
  }
}
