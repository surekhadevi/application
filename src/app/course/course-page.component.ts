import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { SkillLevel } from './skilllevel';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styles: [],
  //encapsulation: ViewEncapsulation.None
})
export class CoursePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
