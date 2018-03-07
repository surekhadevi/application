import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent} from './employee-list.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EmployeeFormComponent } from './employee-form.component';
import { EmployeePageComponent } from './employee-page.component';
import { EmployeeService } from './employee.service';
import { EMPLOYEE_ROUTES } from './employee.routing';
import { EmployeeGuard } from '../../guards/employee.guard';
import { LeavingGuard } from '../../guards/leaving.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EMPLOYEE_ROUTES
  ],
  exports:[EmployeePageComponent],
  providers:[EmployeeService,EmployeeGuard,LeavingGuard],
  declarations:[EmployeeListComponent, EmployeeFormComponent, EmployeePageComponent]
})
export class EmployeeModule { }

