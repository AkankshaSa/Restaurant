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
  updatedata(id){
    return this.http.get(`${this.url}/${id}`)
  }

  editdata(id,data){
      return this.http.put(`${this.url}/${id}`,data)
  }
  deletedata(id){
      return this.http.delete(`${this.url}/${id}`)
  }
  
}

