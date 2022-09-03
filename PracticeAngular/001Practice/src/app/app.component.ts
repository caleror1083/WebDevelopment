import { Component } from "@angular/core";

@Component({
     selector: 'app-root',
     templateUrl: 'app.component.html'
     // template: `<h1>Hello {{ name }}</h1>`
})

// the root component
// export keyword allows this class to be imported and used by other components
export class AppComponent {
    name : string = "Angular";  // string property called name with a value
}