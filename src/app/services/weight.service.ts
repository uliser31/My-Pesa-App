import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeightService {

  weight: String = '';

  URL_API = 'http://localhost:3000';
  
  constructor(private http: HttpClient) { 

  }
  getWeight(){
    return this.http.get<String>(this.URL_API);  
  }
}
