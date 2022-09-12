import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  readonly APIUrl = "https://localhost:44384/api";
  readonly PhotoUrl = "https://localhost:44384/Photos";

  constructor(private http: HttpClient) { }

  getDepList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/departments');
  }

  addDepartments(val: any) {
    return this.http.post(this.APIUrl + '/departments', val);
  }

  updateDepartments(val: any) {
    return this.http.put(this.APIUrl + '/departments', val);
  }

  deleteDepartments(val: any) {
    return this.http.delete(this.APIUrl + '/departments', val);
  }

  getEmpList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/employees');
  }

  addEmployees(val: any) {
    return this.http.post(this.APIUrl + '/employees', val);
  }

  updateEmployees(val: any) {
    return this.http.put(this.APIUrl + '/employees', val);
  }

  deleteEmployees(val: any) {
    return this.http.delete(this.APIUrl + '/employees', val);
  }

  uploadPhotos(val: any) {
    return this.http.post(this.APIUrl + '/employees/savefile', val);
  }

  getAllDepartmentNames(): Observable<any> {
    return this.http.get<any[]>(this.APIUrl + '/employees/getalldepartmentnames');
  }
}