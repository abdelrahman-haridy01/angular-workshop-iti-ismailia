import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'doctors-sys';

  addRecievedItem(value) {
    // console.log(value);
    this.title = value;
  }
}
