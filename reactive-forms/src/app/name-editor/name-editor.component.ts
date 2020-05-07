import { Component, OnInit } from '@angular/core';

import {FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {

  name= new FormControl('');
  //FormControl 생성자
  //인자로 빈 문자열 초기값 전달, 설정
  
  constructor() { }

  ngOnInit() {
  }

}
