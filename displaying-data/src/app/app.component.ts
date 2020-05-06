import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <h2>My favorite hero is: {{myHero}}</h2>
  <p>Heroes:</p>
    <ul>
      <li *ngFor="let hero of heroes">
      {{hero}}
      </li>
    </ul>
  `
})
//역따옴표는 문자열을 여러줄에 걸쳐 선언하는 ECMAScript 2015 표준
//문법이며, 역따옴표를 사용하면 HTML의 가독성을 더 높일 수 

export class AppComponent {
  title = 'Tour of Heroes'
  heroes = ['Windstorm' , 'Bombasto', 'Magneta', 'Tornado'];
  myHero = this.heroes[0];

  constructor(){

  }
}

//키 입력이나 타이머, HTTP 응답과 같은 비동기 이벤트가
//발생했을 때 화면이 갱신


//셀렉터 항목에 <App-root>가 지정되어 있고, index.html
//파일에는 <app-root>가 작성되어 있음.
