import { NgModule } from '@angular/core';                  // required to add metadata to a module
import { BrowserModule } from '@angular/platform-browser'; // required by all applications that run in a web browser
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from "./employee/employeeList.component";
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe';

// defines a module that contains conponents, directives, pipes and providers
@NgModule({
    declarations: [  // list of components, directives and pipes that belong to this module
        AppComponent,
        EmployeeComponent,
        EmployeeListComponent,
        EmployeeTitlePipe
    ],
    imports: [  // list of modules to import into this module. Everything from the imported module is available to declarations of this module
        BrowserModule, 
        FormsModule
    ],
    bootstrap: [AppComponent]  // list of components to bootstrap when this module is bootstrapped
})

// Classes
export class AppModule { }  // the root module which bootstraps and launches the application