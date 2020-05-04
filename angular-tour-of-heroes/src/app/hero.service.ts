import { Injectable } from '@angular/core';
import { Hero } from './hero';
import {HEROES } from './mock-heroees';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  getHeroes() : Hero[]{
    return HEROES;
  }

  constructor() { }
}
