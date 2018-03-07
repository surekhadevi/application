import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EmployeeModule } from './employee/employee.module';
import { CourseModule } from './course/course.module';
import { AuthorModule } from './author/author.module';
import { BoxModule } from './box/box.module';
import { EmployeeListComponent } from './employee/employee-list.component';
import { EmployeeFormComponent } from './employee/employee-form.component';
import { EmployeePageComponent } from './employee/employee-page.component';
import { HomeComponent } from './home.component';
import { APP_ROUTES } from './app.routing';
import { NavbarComponent } from './navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent 
  ],
  imports: [
    BrowserModule,EmployeeModule,CourseModule,AuthorModule,BoxModule,APP_ROUTES
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
