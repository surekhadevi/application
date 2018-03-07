import {Http} from '@angular/http';
import { Injectable } from '@angular/core';
import { Author } from './author';
import { Gender } from './gender';

@Injectable()
export class AuthorService {

  URL:string = "http://localhost:3000/authorsarray";

  constructor(private http:Http) { }
  
  /*author1 = new Author(1,"Surekha","Devi","Bathula",26,Gender.FEMALE,false);
  author2 = new Author(2,"Anusha","","Nanneboina",25,Gender.FEMALE,false);  

  authors:Array<Author>  = [this.author1,this.author2];
*/
  getAuthors(){
    return this.http.get(this.URL);
    //return this.authors;
  }
  /*getMaxId(){
    let maxId = 0;
    for(let auth of this.authors){
      if(maxId<auth.id){
        maxId = auth.id;
      } 
    }
    return maxId+1;
  }*/

  saveAuthor(auth:Author){
   /* if(auth.id===0){
      auth.id = this.getMaxId();
      this.authors.push(auth);
    }else{
      let index = this.authors.findIndex(a=>a.id===auth.id);
      this.authors[index]=auth;
    }*/
  }

  getById(id:number){
    //return this.authors.find(auth=>auth.id===id);
  }

  delete(id:number){
   // let i = this.authors.findIndex(a=>a.id===id);
   // this.authors.splice(i,1);
  }
}
