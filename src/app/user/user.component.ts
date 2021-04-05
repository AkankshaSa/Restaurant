import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { User} from './user.model';
import {DataService} from '../data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
 alert:boolean=false
 user=new User();
 loginUser =new FormGroup(
   {
     name:new FormControl(''),
     email:new FormControl(''),
     password:new FormControl(''),
     contact:new FormControl(''),
     city:new FormControl(''),
   }
 )
  onFileSelected(event){
  console.log(event);
 
 }
  constructor(private data:DataService) {}

  ngOnInit(): void {
  }
  saveapi(){
    console.log(this.user);
    this.data.adddata(this.user).subscribe(res=>{
      console.log(res)
    })

    this.alert=true
    this.loginUser.reset({})
  }
  closeAlert(){
    this.alert=false
  }
}
