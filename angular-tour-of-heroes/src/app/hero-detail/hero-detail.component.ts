import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import {ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {HeroService} from "../hero.service";

//화면에 표시할 히어로의 id는 다음과 같이 가져옴

//라우팅 규칙에서 id에 해당하는 라우팅 변수를 추출.
//id에 해당되는 히어로 정보는 HeroService를 활용해 서버에서 가져옴

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  
  constructor(
    private route: ActivatedRoute,
    private location:Location,
    private heroService: HeroService,
  ) { }
    //컴포넌트 생성자로 ~ 서비스를 의존성으로 주입하고 private 프로퍼티로 선언
    //ActivatedRoue는 HeroDetailComponent의 인스턴스를 생성하며
    //적용한 라우팅 규칙에 대한 정보를 담고있음
    //따라서 이를 참조하면 URL을 통해 컴포넌트로 전달되는 변수를 추출할 수 있음.

    //컴포넌트에 사용할 히어로 데이터는 HeroService를 사용해서 리모트 서버에서 가져옴

    //location은 브라우저 제어하기 위해 Angular가 제공하는 서비스.
    
    ngOnInit(): void {
      this.getHero();
    }
    getHero():void{
      const id = +this.route.snapshot.paramMap.get('id');
      this.heroService.getHero(id).subscribe(hero=>this.hero = hero);
    }

}
