import { Address } from "./address";
import { Employee } from "./employee";
import { Gender } from "./gender";
import { Injectable } from "@angular/core";

@Injectable()
export class EmployeeService {

  constructor() { }
  address1 = new Address("Lewisville","Texas","Wmain st",75067);
  address2 = new Address("Houston","Texas","Bay Area",77058);
  

  employee1 = new Employee(1,"surekha", "Bathula", "Devi", 26, 50000,Gender.FEMALE,this.address1,false);
  employee2 = new Employee(2,"parthyu", "mandagani", "Devi", 26, 50000,Gender.FEMALE,this.address2,false);
  

  employees:Array<Employee>  = [this.employee1,this.employee2];

  getAll(){
    
    return this.employees;
  }

  getMaxId(){
    let maxId=0;
    for(let emp of this.employees){
      if(emp.id>maxId){
        maxId=emp.id;
      }
    }
    return maxId+1;
  }

  save(emp:Employee){
    if(emp.id===undefined){
      console.log(emp);
      emp.id = this.getMaxId();
      this.employees.push(emp);
    }else{
     
      let index = this.employees.findIndex(e=>e.id===emp.id);
      this.employees[index]=emp;
    }
   
  }

  getById(id:number){
    return this.employees.find(e=>e.id===id);
  }

  delete(id:number){
    let i = this.employees.findIndex(e=>e.id===id);
    this.employees.splice(i,1);
  }
}
