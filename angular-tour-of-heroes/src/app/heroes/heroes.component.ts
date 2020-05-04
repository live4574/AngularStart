import { Component, OnInit } from '@angular/core';
import {Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  //hero 프로퍼티 추가, Windstorm
  hero: Hero={
    id:1,
    name:'WindStorm'
  };
  
  constructor() { }

  ngOnInit(): void {
  }
  //ngOnInit은 라이프싸이클 후킹 함수 입니다. 
  //Angular는 컴포넌트를 생성한 직후에 ngOnInit를 호출합니다. 
  //그래서 컴포넌트를 초기화하는 로직은 이 메소드에 작성하는 것이 좋습니다.


}
