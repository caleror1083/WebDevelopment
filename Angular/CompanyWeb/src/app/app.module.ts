import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DepartmentsComponent } from './departments/departments.component';
import { ShowDepComponent } from './departments/show-dep/show-dep.component';
import { AddEditDepComponent } from './departments/add-edit-dep/add-edit-dep.component';
import { EmployeesComponent } from './employees/employees.component';
import { ShowEmpComponent } from './employees/show-emp/show-emp.component';
import { AddEditEmpComponent } from './employees/add-edit-emp/add-edit-emp.component';

import { SharedService } from './shared.service';

@NgModule({
  declarations: [AppComponent, DepartmentsComponent, ShowDepComponent, AddEditDepComponent, EmployeesComponent, ShowEmpComponent, AddEditEmpComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
