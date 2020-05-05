import { Injectable } from '@angular/core';
import { Hero } from './hero';
import {HEROES } from './mock-heroees';
import {Observable, of } from 'rxjs';
import {MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  private heroesUrl='api/heroes';
  //웹 API 형식의 URL로 사용

  getHeroes() : Observable<Hero[]>{
    //TODO: 메시지는 히어로 데이터를 가져온 _후에_ 보내야 합니다.
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
  
  getHero(id:number): Observable<Hero>{
    //TODO:이 메시지는 서버에서 히어로 정보를 가져온 _후에_ 보내야 합니다.
    this.messageService.add(`HeroService: fetched hero id=${id}`)
    //id에 사용된 역따옴표`는 템플릿 리터럴을 표현하는 Javascript 문법

    return of(HEROES.find(hero=>hero.id===id));
  }
  //getHero 함수도 비슷하게 비동기로 동작.
  //히어로의 목 데이터 하나를 Observable로 반환하기 위해 RxJs가 제공하는 of()함수를 사용.

  //이렇게 구현하면 나중에 getHero()가 실제 Http 요청을 보내도록 수정하더라도 이함수를 호출하는 
  //HeroDetailComponent는 영향을 받지 않음.


  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  //서비스 안에 서비스 가 존재하는 경우.
  //MessageService는 HeroService에 의존성으로 주입되고, 
  //HeroService는 다시 HeroesComponent에 의존성으로 주입.
  
  private log(message:string){
    this.messageService.add(`HeroService: ${message}`);
  }
  //HeroService에서 보내는 메시지는 MessageService가 화면에 표시

  //heroesUrl을 :base:/collectionName과 같은 형태로 정의.
  //이 주소는 서버의 리소스 위치에 따라 달라질 수 있으며
  //이 주소에서 base는 어떤 종류의 요청인지 구별하는 변수이고,
  //collectionName은 in-memory-data-service.ts 파일에 있는
  //콜렉션을 구별하는 변수.
  
}
