import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthorService } from './author.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Author } from './author';
import { Gender } from './gender';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, NgForm } from '@angular/forms';

@Component({
  selector: 'app-author-reactive-form',
  templateUrl: './author-reactive-form.component.html',
  styles: [],
  //encapsulation: ViewEncapsulation.None
})
export class AuthorReactiveFormComponent implements OnInit, OnDestroy {

  paramsubscription:Subscription;
 // author = new Author(0,"","","",0,Gender.MALE,true);
  author:Author;
  auForm:FormGroup;
  constructor(private authService:AuthorService, private router:Router, private activatedRoute:ActivatedRoute,private formbuilder:FormBuilder) { 
    this.auForm = formbuilder.group(
      {name:['',[Validators.required, Validators.minLength(5),this.customNameValidator],this.customNameAsyncValidator],
    address:formbuilder.group({city:['']})
    //,hobbies:formbuilder.array([''])
  });
  }
  ngOnInit() {
    /*this.paramsubscription = this.activatedRoute.params.subscribe((params)=>{
      if(params['id']){
        this.author = this.authService.getById(parseInt(params['id']));
        this.auForm.get('name').setValue(this.author.fName);
        this.auForm.get('address').get('city').setValue('test');
      }
    }); */
  }
  
  get aName(){
    return this.auForm.get('name');
  }

  getHobbies(){
    return (<FormArray>this.auForm.controls['hobbies']).controls;
  }  

  addHobby(){
    (<FormArray>this.auForm.controls['hobbies']).controls.push(new FormControl(''));
  }

  customNameValidator(fc:FormControl){
    let value = <string>fc.value;
    if(!value.startsWith('admin')){
      return {'needsAdmin':true};
    }
    return null;
  }

  customNameAsyncValidator(fc:FormControl){
    let value = <string>fc.value;
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(value === "adminSurru"){
          resolve({nameAlreadyTaken:true});
        }
      },3000)
    })
  }
  
  handleSubmit(){
    console.log(this.auForm);
    let auth:Author = this.auForm.value;
    if(this.author._id>0){
      auth._id = this.author._id;
    }
    this.authService.saveAuthor(auth);
    this.router.navigate(['/authors/authlist']);
  }
  
  getkeys(){
    return Object.keys(Gender);
  }

addAuthor(aForm:NgForm){
  if(this.author._id>0){
    aForm.value._id = this.author._id;
  }
  this.authService.saveAuthor(aForm.value);
 // this.author = new Author(0,"","","",0,Gender.MALE,true);
  this.router.navigate(['/authors/authlist']);
}

ngOnDestroy(): void {
  this.paramsubscription.unsubscribe();
}

}
