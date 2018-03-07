import { Component, OnInit, Output, EventEmitter, OnDestroy, ViewChild } from '@angular/core';
import { Address } from './address';
import { Employee } from './employee';
import { Gender } from './gender';
import { EmployeeService } from './employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';
import { Form } from '../form';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
 // providers:[EmployeeService]
  //encapsulation: ViewEncapsulation.None
})
export class EmployeeFormComponent implements OnInit, OnDestroy,Form {
  
  service;
  routerParamSubscription:Subscription;

  constructor(private empService: EmployeeService, private router: Router, private activatedRoute: ActivatedRoute) 
  { 
    this.service = empService;
  }

  hasUnsavedChanges(): boolean {
    return this.empForm.dirty;
  }

  @ViewChild("employeeForm")
  empForm:NgForm;

  ngOnInit() {
    this.routerParamSubscription = this.activatedRoute.params.subscribe((params)=>{
      if(params['id']){
        this.employee = this.empService.getById(parseInt(params['id']));
      }
    });
  }
  address = new Address("","","",0);
  employee = new Employee(0,"", "", "",0,0,Gender.MALE,this.address,true);
  getkeys(){
    return Object.keys(Gender);
  }
  
  addEmployee(employeeForm:NgForm){
    if(this.employee.id>0){
      employeeForm.value.id=this.employee.id;
    }
    this.service.save(employeeForm.value);
    this.router.navigate(['/employees/emplist']);
    // this.service.save(this.employee);
    // this.employee=new Employee(0,"", "", "",0,0,Gender.MALE,new Address("","","",0),true);
    // this.router.navigate(['/employees/emplist']);
  }

  ngOnDestroy(): void {
    this.routerParamSubscription.unsubscribe();
  }
}
