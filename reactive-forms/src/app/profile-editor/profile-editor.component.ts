import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})

export class ProfileEditorComponent {

  profileForm= this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip : ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
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
  constructor(
    private fb: FormBuilder
  ) { }

  get aliases(){
    return this.profileForm.get('aliases') as FormArray;
    //게터함수
    //폼 배열 안에 있는 폼 컨트롤의 개수에 관계 없이
    //간단하게 폼컨트롤의 값을 참조할 수 있고, 반복문 작성시도 편리함
  }

  addAlias(){
    this.aliases.push(this.fb.control(''));
  }

  ngOnInit() {
  }

}
