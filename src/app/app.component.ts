import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-pesa-app';
  activated : Boolean = true;
  name: String = 'Uliser';
  users = ['Uliser','Joe', 'Livan', 'Hanny']
}
