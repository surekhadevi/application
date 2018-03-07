import { Component, OnInit, Input } from '@angular/core';
import { Address } from './address';
import { Employee } from './employee';
import { Gender } from './gender';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  //providers:[EmployeeService]
  //encapsulation: ViewEncapsulation.Emulated
})


export class EmployeeListComponent implements OnInit {

  employees;
  constructor(private empService:EmployeeService, private router: Router) {

    this.employees = empService.getAll();
   }
  
  toUpperCase(str:string){
    return str.toUpperCase();
  }
  getGender(value:number){
    return Gender[value];
  }
  ngOnInit() {
     
  }
  routeMeToAddPage(){
    this.router.navigate(['/employees/empform']);
  }
  handleEdit(id:number){
    this.router.navigate(['/employees/empform',id]);
  }

  handleDelete(id:number){
    this.empService.delete(id);
  }

  // newEmployeeAddedEvent(emp:Employee){
  //   this.empService.save(emp);
  // }

  // handleInput(event:KeyboardEvent){
  //   this.employee3.fName = (<HTMLInputElement>event.target).value;
 // }

}

