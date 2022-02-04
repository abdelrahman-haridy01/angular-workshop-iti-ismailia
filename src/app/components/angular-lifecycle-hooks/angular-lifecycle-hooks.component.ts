import { Component, 
  OnInit, 
  OnChanges, Input, 
  DoCheck,
  AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-angular-lifecycle-hooks',
  templateUrl: './angular-lifecycle-hooks.component.html',
  styleUrls: ['./angular-lifecycle-hooks.component.scss']
})
export class AngularLifecycleHooksComponent implements OnInit, OnChanges, DoCheck, AfterContentInit  {
  @Input() data: string;
  isEmpty = false;
  constructor() { 
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('OnInit');

  }

  ngOnChanges() {
    console.log('OnChanges');
  }

  ngDoCheck() {
    if (this.data == '') {
      console.log('ngDoCheck');
      this.isEmpty = true;
    } else {
      this.isEmpty = false;
    }
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

}
