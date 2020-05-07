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

  constructor(private greetingService: GreetingService){
  }

  sayHi(){
    //주입된 서비스의 사용
    this.greeting= this.greetingService.sayHi();
  }
}
