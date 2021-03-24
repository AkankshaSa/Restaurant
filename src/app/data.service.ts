import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  httpclient: any;

  constructor( private http:HttpClient) { }
  url="http://localhost:3000/restaurants";

  getdata()
  {
    
    return this.http.get(this.url);
  }
    

  inputdata(val : any){
    console.log(val)
    return this.http.post(this.url,val);
  }

  editdata(id : any){
      return this.http.get('${this.url}/${id}')
  }
  deletedata(id: any){
      return this.http.delete('${this.url}/${id}')
  }
  
}

