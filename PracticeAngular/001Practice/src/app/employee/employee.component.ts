import { Component } from "@angular/core";

@Component({
     selector: 'employee',
     templateUrl: 'employee.component.html'
})

// the employee component
export class EmployeeComponent {
    firstName : string = 'Tom';  // string property called firstName with a value
    lastName : string = 'Hanks';  // string property called lastName with a value
    gender : string = 'Male';  // string property called gender with a value
    age : number = 20;  // number property called age with a value
}