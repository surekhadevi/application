import {RouterModule} from '@angular/router';
import { EmployeeListComponent } from "./employee-list.component";
import { EmployeeFormComponent } from "./employee-form.component";
import { EmployeePageComponent } from "./employee-page.component"; 
import { EmployeeGuard } from '../../guards/employee.guard';
import { LeavingGuard } from '../../guards/leaving.guard';

const ROUTES = [{path:'employees', component:EmployeePageComponent, children:[
    {path:'emplist', component:EmployeeListComponent, canActivate:[EmployeeGuard]},
    {path:'empform', component:EmployeeFormComponent, canDeactivate:[LeavingGuard]},
    {path:'empform/:id', component:EmployeeFormComponent, canDeactivate:[LeavingGuard]}
]}
]; 

export const EMPLOYEE_ROUTES = RouterModule.forChild(ROUTES);