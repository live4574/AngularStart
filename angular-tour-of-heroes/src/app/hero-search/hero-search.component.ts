import { Component, OnInit } from '@angular/core';
import {Observable ,Subject } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) { }

  search(term:string): void{
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      //연속된 키입력을 처리하기 위해 300ms 대기.
      debounceTime(300),
      //사용자가 보내는 요청이 300ms에 하나로 제한.

      distinctUntilChanged(),
      //이전에 입력한 검색어와 같으면 무시.

      switchMap((term: string)=> this.heroService.searchHeroes(term)),
      );
      //검색어가 변경되면 새로운 옵저버블을 생성.
      //이때 이전에 발생했던 옵저버블은 취소,
      //HeroService가 생성한 옵저버블만 반환.
      
  }
  
  
}
