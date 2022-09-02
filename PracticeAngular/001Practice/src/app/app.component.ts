// imports
import { Component } from '@angular/core';

// decorator functions (metadata and templates)
@Component({
    selector: 'app-root',
    template: '<div><h1>{{pageTitle}}</h1><div>My First Component</div></div>'
})

// classes
export class AppComponent {
    // properties
    pageTitle: string = 'Acme Product Management';
}