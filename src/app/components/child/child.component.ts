 import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  // pageTitle = 'ITI Doctors v2';
  // arr = ['ahmed', 'mahamed', 'sara'];
  // twoway: any = '';

  @Input() attName = '';
  @Input() attAge = '';

  constructor() { }

  ngOnInit(): void {
  }

  // getList(key) {
  //   return this.arr[key];
  // }

}
