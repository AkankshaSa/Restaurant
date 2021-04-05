import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import{ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router'
import{DataService} from '../data.service'


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  alert:boolean=false
  editRestro=new FormGroup({
    name:new FormControl(''),
    city:new FormControl(''),
    contact:new FormControl('')
    
  })
  onFileSelected(event){
    console.log(event);

  }

  constructor(private data:DataService,private router:ActivatedRoute) { }
 
  ngOnInit(): void {
    this.data.updatedata (this.router.snapshot.params.id).subscribe(res=>{
      console.log(res)
      this.editRestro=new FormGroup({
        name:new FormControl(res['name']),
        city:new FormControl(res['city']),
        contact:new FormControl(res['contact'])
    })
  })
  
  }
  saveapi(){
    console.log(this.editRestro.value);
    this.data.editdata(this.router.snapshot.params.id,this.editRestro.value).subscribe(res=>
      console.log(res))
    this.editRestro.reset({})
    this.alert=true
  }
  closeAlert(){
    this.alert=false
  }
}
