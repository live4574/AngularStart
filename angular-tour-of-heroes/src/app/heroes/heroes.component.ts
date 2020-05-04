import { Component, OnInit } from '@angular/core';
import {Hero } from '../hero';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  //hero 프로퍼티 추가, Windstorm
  //heroes =HEROES;
  
  heroes: Hero[];

  selectedHero:Hero;
  
  onSelect(hero:Hero):void{
    this.selectedHero=hero;
  }

  getHeroes(): void{
    this.heroes = this.heroService.getHeroes();
  }

  constructor(
    private heroService: HeroService
  ) { }
    //컴포넌트의 생성자는 생성자로 받은 인자를 
    //클래스 프로퍼티로 연결하는 정도로 간단하게 유지하는 것이 좋습니다. 
    //생성자에는 이 외의 로직이 들어가지 않는 것이 좋습니다. 
    //리모트 서버로 HTTP 요청을 보내는 로직도 물론 들어가지 않는 것이 좋습니다.
  ngOnInit(): void{
    this.getHeroes();
  }
  //ngOnInit은 라이프싸이클 후킹 함수 입니다. 
  //Angular는 컴포넌트를 생성한 직후에 ngOnInit를 호출합니다. 
  //그래서 컴포넌트를 초기화하는 로직은 이 메소드에 작성하는 것이 좋습니다.
  
  
}
