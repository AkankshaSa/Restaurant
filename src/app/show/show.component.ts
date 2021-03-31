import { Component, OnInit } from '@angular/core';
import{DataService } from '../data.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  
  fetch :any =[];
  constructor(private user:DataService){
    this.user.getdata().subscribe(result=>{
      console.log("result is:"+result)
      this.fetch = result
    })
  }
  
  ngOnInit(): void {
  }

}
