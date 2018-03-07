import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Author } from './author';
import { Gender } from './gender';
import { AuthorService } from './author.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styles: [],
  //encapsulation: ViewEncapsulation.None
})
export class AuthorFormComponent implements OnInit, OnDestroy {
  

  constructor(private authService:AuthorService, private router:Router, private activatedRoute:ActivatedRoute) { }
  paramsubscription:Subscription;
  ngOnInit() {
    this.paramsubscription = this.activatedRoute.params.subscribe((params)=>{
      if(params['id']){
       // this.author = this.authService.getById(parseInt(params['id']));
      }
    });
  }
  author = new Author(0,"","","",0,Gender.MALE,true);
  getkeys(){
    return Object.keys(Gender);
  }

addAuthor(){
  this.authService.saveAuthor(this.author);
  this.author = new Author(0,"","","",0,Gender.MALE,true);
  this.router.navigate(['/authors/authlist']);
}
ngOnDestroy(): void {
  this.paramsubscription.unsubscribe();
}
}
