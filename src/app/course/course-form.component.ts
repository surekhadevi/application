import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Course } from './course';
import { SkillLevel } from './skilllevel';
import { CourseService } from './course.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styles: [],
  //encapsulation: ViewEncapsulation.None
})
export class CourseFormComponent implements OnInit, OnDestroy {
  

  constructor(private crseService:CourseService, private router:Router, private activatedRoute:ActivatedRoute) { }
  paramsubscription:Subscription;
  ngOnInit() {
    this.paramsubscription = this.activatedRoute.params.subscribe((params)=>{
      if(params['id']){
        this.course = this.crseService.getById(parseInt(params['id']));
      }
    });
  }
course:Course = new Course("",0,SkillLevel.BEGINNER,0,true);

RouteMeToListPage(){
this.crseService.saveCourse(this.course);
this.course = new Course("",0,SkillLevel.BEGINNER,0,true);
this.router.navigate(['/courses/crselist']);
}
getkeys(){
  return Object.keys(SkillLevel);
}

ngOnDestroy(): void {
  this.paramsubscription.unsubscribe();
}
}
