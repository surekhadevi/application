import { Gender } from "./gender";

export class Author{
constructor(public _id:number, public fName:string, public mName:string, public lName:string, public age:number, public gender:Gender, public newAuthor:boolean){
    
}
}