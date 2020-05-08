import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'matTest';

  myControl: FormControl;

  constructor(private fb: FormBuilder) {

    this.myControl = this.fb.control('')
  }
}
