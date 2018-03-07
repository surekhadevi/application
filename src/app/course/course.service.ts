import { Injectable } from '@angular/core';
import { Course } from './course';
import { SkillLevel } from './skilllevel';

@Injectable()
export class CourseService {

  constructor() { }
  courses:Course[]=[new Course("JAVA",1,SkillLevel.BEGINNER,45.50,false),new Course("Angular",2,SkillLevel.EASY,145.50,false)];

  getCourses(){
    return this.courses;
  }
  getMaxId(){
    let maxId=0;
    for(let course of this.courses){
      if(course.id>maxId){
        maxId=course.id;
      }
    }
    return maxId;
  }

  
  saveCourse(course:Course){
    if(course.id===0){
      course.id = this.getMaxId()+1;
      this.courses.push(course);
    }else{
      let index = this.courses.findIndex(c=>c.id===course.id);
      this.courses[index] = course;
    }
  }

  getById(id:number){
  return this.courses.find(c=>c.id===id);
  }

  delete(id:number){
    let index = this.courses.findIndex(c=>c.id===id);
    this.courses.splice(index,1);
  }
}
