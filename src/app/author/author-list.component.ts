import { Component, OnInit, Input } from '@angular/core';
import { Author } from './author';
import { Gender } from './gender';
import { AuthorService } from './author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css'],
 // encapsulation: ViewEncapsulation.None
})
export class AuthorListComponent implements OnInit {
  
  constructor(private authService:AuthorService, private router:Router) { }

  authorArray:Author[];

  ngOnInit() {
    this.authService.getAuthors().subscribe(response=>{
      console.log(response);
      this.authorArray = response.json();
    });
  }
 // authorArray:Author[]=this.authService.getAuthors();
 

  toUpperCase(str:string){
    return str.toUpperCase();
  }

  routeMeToFormPage(){
    this.router.navigate(['/authors/authform']);
  }

  handleEdit(id:number){
    this.router.navigate(['/authors/authform',id]);
  }
  
  handleDelete(id:number){
    this.authService.delete(id);
  }
  // getGender(value:number){
  //   return Gender[value];
  // }
}
