import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  httpclient: any;

  constructor( private http:HttpClient) { }

  getdata()
  {
    let obj:any
    let url="http://localhost:3000/restaurants";
    obj= this.http.get(url);
    console.log("object="+obj)
    return obj;
  }

  inputdata(val){
    return this.httpclient.post('http://localhost:3000/restaurants',val);

  }
}

