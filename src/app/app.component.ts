import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'doctors-sys';
  faCoffee = faCoffee;
  
  addRecievedItem(value) {
    // console.log(value);
    this.title = value;
  }
}
