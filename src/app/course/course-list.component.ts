import { Component, OnInit, Input } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class CourseListComponent implements OnInit {

  constructor(private crseService:CourseService, private router:Router) { }
courses:Course[];
  ngOnInit() {
    this.courses=this.crseService.getCourses();
  }

  RouteMeToFormPage(){
    this.router.navigate(['/courses/crseform']);
  }

  handleEdit(id:number){
    this.router.navigate(['/courses/crseform',id]);
  }
  
  handleDelete(id:number){
    this.crseService.delete(id);
  }
}
