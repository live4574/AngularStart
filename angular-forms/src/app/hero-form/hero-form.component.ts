import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  powers=['really smart','flexible'];

  model= new Hero(18,'Dr IQ',this.powers[0],'Chuck overstreet');

  submitted=false;

  onSubmit(){this.submitted=true;}

  //TODO: 필요한 기능을 개발하고 나면 이 함수는 제거.
  get diagnostic(){
    return JSON.stringify(this.model);
  }

  newHero() {
    this.model = new Hero(42, '', '');
  }
  
  constructor() { }

  ngOnInit(): void {
  }


}
