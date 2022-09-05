import {Component} from "@angular/core";      // importing the Component decorator from core package - required to add metadata to a component

@Component({                                    // component decorator which adds metadata to the class - when you decorate a class with a decorator, it becomes a component
     selector: "app-root",  // 
     templateUrl: "app.component.html",          // view template which defines the HTML, directives and data bindings
     styleUrls: ["app.component.css"]    
})

export class AppComponent {                     // class has code required for the view template - export keyword allows this class to be imported and used by other components
    // Properties
    boldStyle: boolean = true;
    fontSize: number = 13;
    italicStyle: boolean = true;

    name: string = "Tom";

    AddStyles() {
        let styles = {
            'font-style': this.italicStyle ? 'italic' : ''
        };
        return styles;
    }

    OnClick(): void {
        alert("Button was clicked");
        //console.log("Button was clicked");
    }
}