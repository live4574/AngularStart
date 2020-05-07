import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GreetingService {
  sayHi(){return 'Hi!';}
  constructor() { }
}
