import { NgModule } from '@angular/core';                  // required to add metadata to a module
import { BrowserModule } from '@angular/platform-browser'; // required by all applications that run in a web browser
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from "./employee/employeeList.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, EmployeeComponent, EmployeeListComponent], // registering these components with this module
    bootstrap: [AppComponent]
})

export class AppModule { }  // the root module which bootstraps and launches the application