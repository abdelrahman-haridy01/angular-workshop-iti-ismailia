import { Injectable } from '@angular/core';
import { DOCTORS } from './mock-doctors';
import { HttpClient } from '@angular/common/http';
import {environment} from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor(private http: HttpClient) { }

  getAll() {
    // return all list of data
    // return DOCTORS;
    return this.http.get(`${environment.base_url}doctors`);
  }

  getDoctorDetailsByID(pageId) {
    return DOCTORS.filter(item => pageId == item.id);
  }


  // Delete item
  deleteDoctor(id) {
    return this.http.delete(`${environment.base_url}doctors/${id}`);
  }
}
