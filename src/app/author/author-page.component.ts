import { Component, OnInit } from '@angular/core';
import { Author } from './author';
import { Gender } from './gender';

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styles: [],
  //encapsulation: ViewEncapsulation.None
})
export class AuthorPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
