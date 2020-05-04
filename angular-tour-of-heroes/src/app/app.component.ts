import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms'; //<--NgModel은 이 패키지가 제공.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
