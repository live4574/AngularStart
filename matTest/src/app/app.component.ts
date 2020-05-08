import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

export interface Tile {
  text: string;
  cols: number;
  rows: number;
  color: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'matTest';

  myControl: FormControl;

  constructor(private fb:FormBuilder) {
    this.myControl=fb.control('');
  }
  
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
}
