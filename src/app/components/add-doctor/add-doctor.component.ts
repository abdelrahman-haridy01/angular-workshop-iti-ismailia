import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})
export class AddDoctorComponent implements OnInit {

  addDoctorForm: FormGroup;
  isSubmitted = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.addDoctorForm = this.fb.group({
      name: [ '', [
        Validators.required, 
        Validators.minLength(4), 
        Validators.maxLength(25) ]  
      ],
      email: '',
      sps: '',
      phone: ['', Validators.required],
      address: ''
    });

  }

  onSubmit() {
    this.isSubmitted = true;

    console.log(this.addDoctorForm.value);

    console.log(this.f.name.errors?.required);

    setTimeout(() => {
      this.isSubmitted = false;
    }, 3000);
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.addDoctorForm.controls;
  }

}
