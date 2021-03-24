import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import{DataService} from '../data.service'
import {edit} from './edit.model'


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  edit= new edit();
  editRestro=new FormGroup({
    name:new FormControl(''),
    city:new FormControl(''),
    contact:new FormControl('')
  })

  constructor(private data:DataService) { }
 
  ngOnInit(): void {
    this.data.editdata(this.edit).subscribe(res=>{
      console.log(res)
      this.editRestro=new FormGroup({
        name:new FormControl(res['name']),
        city:new FormControl(res['city']),
        contact:new FormControl(res['contact'])
    })
  }
    )
  }
  saveapi(){
    console.log(this.edit);
    
  }

}
