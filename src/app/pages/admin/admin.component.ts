import { Component, OnInit } from '@angular/core';
import { DoctorsService } from './../../services/doctors.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  list: any = []
  constructor(
    private doctorsService: DoctorsService,
    private _modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.doctorsService.getAll().subscribe(res => {
      this.list = res;
    });
  }

  onDelete(id, modelRef) {
    console.log(id);
    this._modalService.open(modelRef, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      
      // User Click on OK button
      // console.log(result+' hhhhh');
      this.doctorsService.deleteDoctor(id).subscribe(res => {
        console.log(res);
        this.getAll();
      });


    }, (reason) => {
      console.log(reason);
    });
  }

}
