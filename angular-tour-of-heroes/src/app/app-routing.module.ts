import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
//라우팅 동작을 실행할 수 있도록 RouterModule과 Routes 심볼을 로드.

import { HeroesComponent } from './heroes/heroes.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import {HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes : Routes =[
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path:'', redirectTo: '/dashboard', pathMatch:'full'},
  {path:'detail/:id', component: HeroDetailComponent},
];

//path: 브라우저 주소로 주소표시줄에 있는 URL과 매칭될 문자열을 지정
//component: 라우터가 생성하고 화면에 표시할 컴포넌트를 지정

//브라우저의 URL이 빈 문자열일 때 './dashboard' 주소로 이동하도록 설정한것.

@NgModule({
  //CommonModule을 로드했던 부분이나 declartions 배열은 필요없기
  //때문에 AppRoutingModule에서 제거
  imports: [
    RouterModule.forRoot(routes)
  ],

  //@NgModule에 메타데이터를 지정하면 모듈이 생성될때
  //라우터를 초기화하면서  브라우저의 주소가 변환되는 것을 감지.

  //그래서 AppRouting module에도 라우터를 초기화하기 위해
  //imports 배열에 RouterModule을 등록해야하는데,
  
  //이 때 RouterModule.forRoot() 메소드에 routes()인자를 넣어서
  //실행한 결과를 지정.

  //애플리케이션 최상위 계층에 존재하는 라우터를 설정할 때는
  //forRoot() 메소드를 사용
  //forRoot() 메소드를 사용하면 라우팅과 관련된 서비스 프로바이더와
  //디렉티브를 애플리케이션에 제공할 수 있으며,
  //브라우저에서 변경되는 URL을 감지할 수 있음.
  exports: [RouterModule]

  //그리고 앱에도 Router Module을 사용할 수 있도록 AppRoutingModule의
  //export 배열을 다음과 같이 지정.

})

export class AppRoutingModule { }

