import { Component } from "@angular/core";

@Component({
     selector: "employee-view",
     templateUrl: "employee.component.html",
     styleUrls: ["employee.component.css"]
})

export class EmployeeComponent {  // the employee component
    columnSpan :number = 2;       // number property called columnSpan with a value
    firstName: string = "Tom";    // string property called firstName with a value
    lastName: string = "Hanks";   // string property called lastName with a value
    gender: string = "Male";      // string property called gender with a value
    age: number = 20;             // number property called age with a value
    showDetails: boolean = false;  // initial value is set to false to hide additional details when page loads

    ToggleDetails(): void { // method will toggle the value of showDetails property
        this.showDetails = !this.showDetails;  // will change the value of showDetails property
    }
}