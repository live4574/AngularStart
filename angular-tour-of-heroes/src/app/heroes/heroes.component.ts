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
  
  getHeroes(): void{
    this.heroService.getHeroes()
    .subscribe(heroes=> this.heroes=heroes);
  }

  constructor(
    private heroService: HeroService,
  ) { }
    //컴포넌트의 생성자는 생성자로 받은 인자를 
    //클래스 프로퍼티로 연결하는 정도로 간단하게 유지하는 것이 좋습니다. 
    //생성자에는 이 외의 로직이 들어가지 않는 것이 좋습니다. 
    //리모트 서버로 HTTP 요청을 보내는 로직도 물론 들어가지 않는 것이 좋습니다.

  ngOnInit(){
    this.getHeroes();
  }

  //ngOnInit은 라이프싸이클 후킹 함수 입니다. 
  //Angular는 컴포넌트를 생성한 직후에 ngOnInit를 호출합니다. 
  //그래서 컴포넌트를 초기화하는 로직은 이 메소드에 작성하는 것이 좋습니다.

  add(name : string):void{
    name= name.trim();
    if(!name){ return;}
    this.heroService.addHero({name} as Hero)
    .subscribe(hero=>{
      this.heroes.push(hero);
    })
  }

  delete(hero:Hero):void{
    this.heroes=this.heroes.filter(h=>h !== hero);
    this.heroService.deleteHero(hero).subscribe();
    //heroService.delete 메소드를 실행하고
    //받은 Observable로는 아무것도 하지않음.
    //함수를 실행하기 위해 단순히 구독만 할뿐임.

    //subscribe()를 생략하면 
    //서버로 제거 요청을 보내지 않습니다!
    // 왜냐하면 아무도 구독하지 않은 Observable은 
    //아무 동작도 하지 않기 때문입니다!
  }
  //히어로를 제거하는 기능은 HeroService가 담당하지만,
  //변경된 내용으로 화면을 갱신하는 것은 컴포넌트가 처리해야함
  //그래서 컴포넌트에 정의된 delete 메소드는 서버로 보내는 요청이
  //성공할 것으로 간주하고 이 히어로를 목록에서 바로 제거함.
  
}
