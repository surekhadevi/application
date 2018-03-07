import {RouterModule} from '@angular/router';
import { CourseListComponent } from './course-list.component';
import { CourseFormComponent } from './course-form.component';
import { CoursePageComponent } from './course-page.component';

const ROUTES = [{path:'courses',component:CoursePageComponent, 
                children:[{path:'crselist',component:CourseListComponent},
                {path:'crseform',component:CourseFormComponent},
                {path:'crseform/:id',component:CourseFormComponent}]}
];

export const COURSE_ROUTES =  RouterModule.forChild(ROUTES);