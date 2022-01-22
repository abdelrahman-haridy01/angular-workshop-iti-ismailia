import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-loading',
  templateUrl: './btn-loading.component.html',
  styleUrls: ['./btn-loading.component.scss']
})
export class BtnLoadingComponent implements OnInit {
  btnTitle = 'Send';
  isLoading = false;
  constructor() { }

  ngOnInit(): void {
  }

  getLoadingTitle() {
    this.isLoading = true;
    this.btnTitle = 'Loading...';
    setTimeout(() => {
      this.isLoading = false;
      this.btnTitle = 'Send';
    }, 3000);
  }

}
