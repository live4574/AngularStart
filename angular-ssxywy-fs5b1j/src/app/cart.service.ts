import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})

export class CartService {
  items=[];//장바구니에 보관되는 상품 목록

  addToCart(product){
    this.items.push(product);
  }//items 배열에 상품을 추가합니다

  getItems(){
    return this.items;
  }//사용자가 장바구니에 추가한 상품 목록을 반환합니다.

  cleanCart(){
    this.items=[];
    return this.items;
  } // 장바구니 목록을 비웁니다.

  constructor() { }

}