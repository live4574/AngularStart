import { Injectable } from '@angular/core';
import { Hero } from './hero';
import {HEROES } from './mock-heroees';
import {Observable, of } from 'rxjs';
import {MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import {catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  private heroesUrl='api/heroes';
  //웹 API 형식의 URL로 사용
  
  getHeroes() : Observable<Hero[]>{
    //TODO: 메시지는 히어로 데이터를 가져온 _후에_ 보내야 합니다.
    //this.messageService.add('HeroService: fetched heroes');
    //return of(HEROES);
    //히어로 목록 목 데이터를 Observable<Hero[]> 타입으로 반환하기위해
    //RxJs of()함수를 사용해왔지만
    //HttpClient로 동작하도록 다음과 같이 수정.
    return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(tap(_=> this.log('fetched heroes')),catchError(this.handleError<Hero[]>('getHeroes',[])));
  }
  //observable이 실패시 실행됨.(catchError() 연산자)
  //에러가 발생했을 때 실행할 에러 핸들러 함수를 인자로 전달.

  //**GET : id에 해당하는 히어로 데이터 가져오기. 존재하지 않으면 404를 반환합니다. */
  getHero(id:number): Observable<Hero>{
    /*//TODO:이 메시지는 서버에서 히어로 정보를 가져온 _후에_ 보내야 합니다.
    this.messageService.add(`HeroService: fetched hero id=${id}`)
    //id에 사용된 역따옴표`는 템플릿 리터럴을 표현하는 Javascript 문법

    return of(HEROES.find(hero=>hero.id===id));
    */
   const url= `{this.heroesUrl}/${id}`;
   return this.http.get<Hero>(url)
   .pipe(tap(_=> this.log(`fetched hero id=${id}`)),
   catchError(this.handleError<Hero>(`getHero id=${id}`)));
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
  
  //HTTP 요청이 실패한 경우를 처리
  //로직 흐름은 그대로 유지
  //@param operation - 실패한 동작의 이름
  //@param result - 기본값으로 반환할 객체

  private handleError<T> (operation = 'operation', result? : T){
    return ( error : any ) : Observable<T> => {
      //TODO: 리모트 서버로 에러 메시지 보내기
      console.error(error);
      //지금은 콘솔에 로그 출력
      
      //TODO: 사용자가 이해할 수 있는 형태로 변환하기
      this.log(`${operation} failed: ${error.message}`);
      
      //애플리케이션 로직이 끊기지 않도록 기본값으로 받은 객체를 반환.
      return of(result as T);
    };
  }
  //에러를 콘솔에 출력하고 나면 핸드러 함수는 사용자가 이해하기 쉬운 형식의
  //메시지를 반환하면서 앱이 중단되지 ㅇ낞도록 기본값을 반환
  //서비스의 각 메소드는 서로 다른 타입으로 Observable 결과를 반환하기 때문에
  //handleError() 메소드는 각 메소드의 기본값을 인자로 받을 수 있도록 정의

  updateHero(hero:Hero):Observable<any>{
    return this.http.put(this.heroesUrl,hero,this.httpOptions)
    .pipe(tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }
  //HttpClien.put() 메소드는 3개의 인자를 받습니다.
  // URL
  // 수정할 데이터(수정된 히어로 데이터)
  // 옵션

  //이번 예제에서 사용하는 웹 API에는 헤더가 존재함.
  //이 헤더는 HeroService 안에 httpOptions 프로퍼티에 저장하고
  //상수처럼 사용할 것.
  httpOptions={
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };
  
  //**POST: 서버에 새로운 히어로를 추가합니다. */
  addHero(hero: Hero): Observable<Hero>{
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions)
      .pipe(tap((newHero: Hero)=> this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }
  //addHero()와 updateHero()가 다른 두가지.
  //HttpClient.post() 대신 put()을 실행
  //이 함수를 실행하면 새로운 히어로에 대한 id가 생성되어야하고,
  //Observable<Hero>타입으로 반환됨.

  //**DeLETE: 서버에서 히어로를 제거합니다 */
  deleteHero(hero:Hero | number): Observable<Hero>{
    const id = typeof hero ==='number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }
  //URL은 리소스 URL 뒤에 제거하려는 히어로의 id가 붙은 형태.

  /*GET: 입력된 문구가 이름에 포함된 히어로 목록을 반환합니다.*/
  searchHerores(term: string):Observable<Hero[]>{
    if(!term.trim()){
      //입력된 내용이 없으면 빈 배열을 반환.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`)
      .pipe(tap(x=>x.length?
      this.log(`found heroes matching "${term}"`) :
      this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeores',[]))
      );
  }
}
