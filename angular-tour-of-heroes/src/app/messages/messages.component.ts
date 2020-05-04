import { Component, OnInit } from '@angular/core';
import { MessageService} from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }
  //messageSercie 프로퍼티는 템플릿에 바인딩되기 때문에
  //반드시 public으로 선언되어야 한다.

  //angular에서는 public으로 선언된 컴포넌트 프로퍼티만 바인딩할 수 있다.

  ngOnInit(){
  }

}

