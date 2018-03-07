import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorListComponent } from './author-list.component';
import { AuthorPageComponent } from './author-page.component';
import { AuthorFormComponent } from './author-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorService } from './author.service';
import { AUTHOR_ROUTES } from './author.routing';
import { AuthorReactiveFormComponent } from './author-reactive-form.component';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule, FormsModule,
    ReactiveFormsModule,AUTHOR_ROUTES,HttpModule
  ],
  providers:[AuthorService],
  declarations: [AuthorListComponent, AuthorPageComponent, AuthorFormComponent, AuthorReactiveFormComponent],
  exports:[AuthorPageComponent]
})
export class AuthorModule { }
