import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  // other ways of specifying selector include:
  // using an attribute like so ---->
  // **********  selector : '[app-navbar]'
  //  and using a class like so ------>
  // **********  selector : '.app-navbar'

  // Attributes are defined by html while properties are defined in the DOM
  // Property bindings affect the dom elements

  // When interpolation cannot be used because the attribute in question is a boolean value,
  // property binding is called uppon to do the business!!!!!!
  // For instance when you want to set a disabled value to false, you cannet use property binding
  // since false is a boolean value and so you have to use property binding
  // If we enclose the value disabled in square brackets ie(property binding)....
  // we can then assign it to the value of false and tha will work in this case.
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  name: String;
  constructor() {
    this.name = "Victor Ireri";
  }
  ngOnInit() {}
}
// console.log(this.people.person1.age);
