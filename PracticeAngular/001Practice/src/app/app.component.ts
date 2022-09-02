// imports
import { Component } from '@angular/core';

// decorator functions (metadata and templates)
@Component({
  selector: 'app-root',
  template: `<h1>Hello {{name}}</h1>`
})

// classes
export class AppComponent { 
  name: string = 'Angular 2!';  // string property called name with a value
}