import { Component } from '@angular/core';
import{ DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'restaurant';
  fetch :any =[];
  constructor(private user:DataService){
    this.user.getdata().subscribe(result=>{
      console.log("result is:"+result)
      this.fetch = result
    })
  }
}
