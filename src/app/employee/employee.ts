import { Address } from "./address";
import { Gender } from "./gender";

export class Employee {
    
        constructor(private _id:number,private _fname:string, private _lname:string, private _mname:string, 
          private _age:number, private _salary:number, private _gender:Gender, private _address:Address,public newEmp:boolean){
      
        }
        toUpperCase(str:string){
          return str.toUpperCase();
        }

        set address(address:Address){
          this._address = address;
        }
        get address(){
          return this._address;
        }
        set id(id:number){
          this._id =id;
        }
        get id(){
          return this._id;
        }
        set fName(fname:string){
          this._fname = fname;
        }
        get fName(){
          return this._fname;
        }
        set lName(lname:string){
          this._lname = lname;
        }
        get lName(){
          return this._lname;
        }
        set mName(mname:string){
          this._mname = mname;
        }
        get mName(){
          return this._mname;
        }
        set age(age:number){
          this._age = age;
        }
        get age(){
          return this._age;
        }
        set salary(salary:number){
          this._salary = salary;
        }
        get salary(){
          return this._salary;
        }
        set gender(gender:Gender){
          this._gender = gender;
        }
        get gender(){
          return this._gender;
        }
        fullName(){
          return this._fname+" "+this._mname+" "+this._lname;
        }
      }