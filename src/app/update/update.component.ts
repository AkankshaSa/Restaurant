import { Component, OnInit } from '@angular/core';
import{ DataService } from '../data.service'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  fetch :any =[];
  constructor(private user:DataService) {}
  updateapi(){
  this.user.getdata().subscribe(result=>{
    console.log("result is:"+result)
    this.fetch = result
  })
}

    delete(item){
      this.fetch.splice(item-1,1)
      this.user.deletedata(item).subscribe(result=>{
        console.log("result is" +result)
      })


    }
  ngOnInit(): void {
  
  }

}
