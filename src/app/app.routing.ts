import {RouterModule} from '@angular/router';
import { HomeComponent } from "./home.component";


const ROUTES = [{path:'', component: HomeComponent},
                {path:'employees', loadChildren:'app/employee/employee.module#EmployeeModule'},
                {path:'authors', loadChildren:'app/author/author.module#AuthorModule'},
                {path:'courses', loadChildren:'app/course/course.module#CourseModule'},
                {path:'**', component: HomeComponent}]

export const APP_ROUTES = RouterModule.forRoot(ROUTES);
