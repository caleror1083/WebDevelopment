import {Component} from "@angular/core";

@Component ({
    selector: "employee-list",
    templateUrl: "employeeList.component.html",
    styleUrls: ["employeeList.component.css"]
})

export class EmployeeListComponent {
    employees: any[] = [
        {code: "emp101", name: "Tom", gender: "Male", annualSalary: 5500, dateOfBirth: "6/25/1988"},
        {code: "emp102", name: "Alex", gender: "Male", annualSalary: 5700.95, dateOfBirth: "6/9/1982"},
        {code: "emp103", name: "Mike", gender: "Male", annualSalary: 5900, dateOfBirth: "8/12/1979"},
        {code: "emp104", name: "Mary", gender: "Female", annualSalary: 6500.826, dateOfBirth: "10/14/1980"}
    ];
}