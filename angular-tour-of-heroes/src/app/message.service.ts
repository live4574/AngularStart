import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages:string[]=[];

  add(message:string){
    this.messages.push(message);
  }

  clear(){
    this.messages=[];
  }

  constructor() { }
}
//messages 프로퍼티에 메시지를 캐싱하는 서비스

//add() 메소드는 프로퍼티에 메시지를 추가하고

//clear() 메소드는 캐시를 비우는 역할을 함.

