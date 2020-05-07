import { Component } from '@angular/core';
import {GreetingService } from './greeting.service';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="sayHi()">Say Hi</button>
    <p>{{ greeting }}</p>
    `,
  styles: []
})
export class AppComponent {
  greeting:string;
  greetingService:GreetingService;

  constructor(){
    //서비스 인스턴스 직접 생성
    this.greetingService=new GreetingService();
  }

  sayHi(){
    //서비스의 사용
    this.greeting= this.greetingService.sayHi();
  }
}
