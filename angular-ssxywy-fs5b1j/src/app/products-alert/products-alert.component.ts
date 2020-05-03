import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-alert',
  templateUrl: './products-alert.component.html',
  styleUrls: ['./products-alert.component.css']
})
export class ProductsAlertComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

}