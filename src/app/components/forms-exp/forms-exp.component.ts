import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-forms-exp',
  templateUrl: './forms-exp.component.html',
  styleUrls: ['./forms-exp.component.scss']
})
export class FormsExpComponent implements OnInit {
  favoriteColorControl = new FormControl('red');

  constructor() { }

  ngOnInit(): void {
  }

  getData() {
    this.favoriteColorControl.setValue('black');
  }

}
