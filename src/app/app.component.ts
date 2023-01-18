import { Component } from '@angular/core';

import {DataService} from './data.service'

import {Post} from './post'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-pesa-app';
  activated : Boolean = true;
  name: String = 'Uliser';
  users = ['Uliser','Joe', 'Livan', 'Hanny'];

  posts: Post[]=[];

  constructor(private dataService: DataService){
    this.dataService.getData().subscribe(data=>{
      this.posts = data;
    })
  }

}
