import { Component, OnInit } from '@angular/core';
import { DoctorsService } from './../../services/doctors.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  parentArr:any = [];
  constructor(private doctorsService: DoctorsService) { }

  ngOnInit(): void {
    //  this.parentArr = this.doctorsService.getAll();

    this.doctorsService.getAll().subscribe(res => {
      console.log(res);
      this.parentArr = res;
    });
  }

}
