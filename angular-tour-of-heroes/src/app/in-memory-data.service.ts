import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { HeroesComponent } from './heroes/heroes.component';
import { SSL_OP_NO_TLSv1_1 } from 'constants';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const heroes=[
      {id:11, name: 'Dr Nice'},
      {id:12, name: 'Narco'},
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {heroes};
  }

  //히어로 객체가 항상 id 프로퍼티를 갖도록 getId메소드를 오버라이드 합니다.
  //히어로 목록이 비어있다면 이 메소드는 초기값(11)을 반환.
  //비어있지 않다면 id의 최대값에 1을 더해서 반환.

  genId(heroes:Hero[]):number{
    return heroes.length >0 ? Math.max(...heroes.map(hero=>hero.id)) +1 :11;
  }
  //제 in-memory-data.service.ts 파일이 mock-heroes.ts 파일을 대신하기 때문에 mock-heroes.ts 파일은 삭제해도 됩니다.

  //나중에 서버가 준비되면 인-메모리 Web API를 제거하기만 하면 클라이언트가 보내는 요청이 서버에서 이전과 같이 처리될 것입니다.
  
  constructor() { }
}
