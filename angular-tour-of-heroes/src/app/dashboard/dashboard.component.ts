import { Component, OnInit } from '@angular/core';
import {Hero } from '../hero';
import {HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes:Hero[]=[];
  //heroes 프로퍼티를 배열로 선언

  constructor(private heroService: HeroService) { }
  //생성자를 통해 HeroService를 의존성으로 주입받고
  //이 객체를 private heroSevice 프로퍼티에 할당

  ngOnInit(){
    this.getHeroes();
  }
  //HeroService의 getHeroes 함수는 ngOnInit() 라이프싸이클 후킹 함수에서
  //호출
  
  getHeroes():void{
    this.heroService.getHeroes().subscribe(heroes=>this.heroes=heroes.slice(1,5));
  }
  //
}

