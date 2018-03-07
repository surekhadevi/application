import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list.component';
import { CoursePageComponent } from './course-page.component';
import { CourseFormComponent } from './course-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseService } from './course.service';
import { COURSE_ROUTES } from './course.routing';

@NgModule({
  imports: [
    CommonModule,FormsModule,
    ReactiveFormsModule,COURSE_ROUTES
  ],
  providers:[CourseService],
  declarations: [CourseListComponent, CoursePageComponent, CourseFormComponent],
  exports:[CoursePageComponent]
})
export class CourseModule { }