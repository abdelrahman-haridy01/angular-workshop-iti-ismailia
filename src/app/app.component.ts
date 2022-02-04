import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'doctors-sys';
  faCoffee = faCoffee;
  onChangeVarExample = '';
  constructor(private modalService: NgbModal) {


    // For On Change example hooks
    // setTimeout(() => {
    //   this.onChangeVarExample = 'changed..';
    // }, 5000);
  }

  addRecievedItem(value) {
    // console.log(value);
    this.title = value;
  }

  open(content) {
    this.modalService.open(content, 
      {ariaLabelledBy: 'modal-basic-title'}
      ).result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log(reason);
    });
  }
}
