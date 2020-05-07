import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  profileForm= new FormGroup({
    firstName: new FormControl(''),
    lastname: new FormControl(''),
  })
  //폼 컨트롤을 그룹으로 묶음.
  //폼 컨트롤의 값을 번거롭게 하나씩 참조할 필요 없이
  // 폼그룹에서 제공하는 모델 사용가능
  
  constructor() { }

  ngOnInit() {
  }

}
