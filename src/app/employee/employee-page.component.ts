import { Component, OnInit } from '@angular/core';
import { Address } from './address';
import { Employee } from './employee';
import { Gender } from './gender';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.css']
 // encapsulation: ViewEncapsulation.None
})
export class EmployeePageComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
  }
 
  
}
