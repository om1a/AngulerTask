import { Component, OnInit, Output, Input } from "@angular/core";
import { Form, NgForm } from '@angular/forms';


interface UserVM{
  name: string,
   age: number, 
  
}


@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',

    
  })
 
export class UserFormComponent implements OnInit {
  
  
  @Input() public newUser: UserVM ={name:'',  age: 0}
  @Input() UserList: UserVM[]=[
    {
      name:'Omar ',
      age: 50,
  },
  {
    name:'Mohammad ',
    age: 10,
  },
  {
    name:'Basel ',
    age: 90,
  }
   ];
  
  constructor() { }
  ngOnInit(): void {
  }
  addUser(form: NgForm){
    console.log(form.form.value,this.newUser);
    if(!form.form.valid){
      form.form.markAllAsTouched();
    }else{
      this.UserList.push(this.newUser);
    }
  }
  deleteUser(user:UserVM){
    let i = this.UserList.indexOf(user);
    if (i>= 0){
      this.UserList.splice(i,1);
    }
  }
  

 

}
