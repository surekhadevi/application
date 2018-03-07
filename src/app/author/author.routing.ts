import {RouterModule} from '@angular/router';
import { AuthorListComponent } from './author-list.component';
import { AuthorFormComponent } from './author-form.component';
import { AuthorPageComponent } from './author-page.component';
import { AuthorReactiveFormComponent } from './author-reactive-form.component';

const ROUTES = [{path:'authors', component:AuthorPageComponent, 
                children:[{path:'authlist', component:AuthorListComponent},
                {path:'authform', component:AuthorReactiveFormComponent},
                {path:'authform/:id', component:AuthorReactiveFormComponent}]}
                ];

export const AUTHOR_ROUTES = RouterModule.forChild(ROUTES);