import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  parentArr = [
    {
      id: 0,
      name: 'Ali',
      age: 40
    },{
      id: 1,
      name: 'Ahmed',
      age: 30
    },
    {
      id: 2,
      name: 'Randa',
      age: 20
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
