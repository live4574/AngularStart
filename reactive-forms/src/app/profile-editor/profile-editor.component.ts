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
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip : new FormControl('')
    })
  });

  //폼 컨트롤을 그룹으로 묶음.
  //폼 컨트롤의 값을 번거롭게 하나씩 참조할 필요 없이
  // 폼그룹에서 제공하는 모델 사용가능

  onSubmit(){
    //TODO: EventEmitter로 폼 내용 보내기
    console.warn(this.profileForm.value);
  }

  updateProfile(){
    this.profileForm.patchValue({
      firstName:'Nancy',
      address:{
        street:'123 Drew Street'
      }
    });
  }
  constructor() { }

  ngOnInit() {
  }

}
