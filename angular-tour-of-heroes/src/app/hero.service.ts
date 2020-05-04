import { Injectable } from '@angular/core';
import { Hero } from './hero';
import {HEROES } from './mock-heroees';
import {Observable, of } from 'rxjs';
import {MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  getHeroes() : Observable<Hero[]>{
    //TODO: 메시지는 히어로 데이터를 가져온 _후에_ 보내야 합니다.
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
  
  constructor(private messageService: MessageService) { }
  //서비스 안에 서비스 가 존재하는 경우.
  //MessageService는 HeroService에 의존성으로 주입되고, 
  //HeroService는 다시 HeroesComponent에 의존성으로 주입.

}
