import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import { DataService } from '../data.service';
import { Add } from './add.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  add= new Add();
  addRestro=new FormGroup({
    name:new FormControl(''),
    city:new FormControl(''),
    contact:new FormControl('')
  })
  
  constructor( private data:DataService ) {}
  saveapi(){
    console.log(this.add);
    this.data.inputdata(this.add).subscribe(res=>{
      console.log(res)
    })
    
    
  }

  ngOnInit(): void {
  }

}
