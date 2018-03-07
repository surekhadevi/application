import { SkillLevel } from "./skilllevel";

export class Course{
    constructor(public name:string, public id:number, public skilllevel:SkillLevel, public price:number, public newCourse:boolean){

    }
}