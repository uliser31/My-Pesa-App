import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Partner} from '../models/partner'

@Injectable({
  providedIn: 'root'
})
export class OdooService {
 
  partners : Partner[] = [];
  
  URL_API = 'http://localhost:3002/partners';
  
  getPartners(){
    return this.http.get<[]>(this.URL_API); ;  
  }
  
  constructor( private http:HttpClient) { }

  }

