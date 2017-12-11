import {Component} from '@angular/core';

class AuthService {
  refreshToken() {
    let a = 0;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color = 'Получить';
  boolean = false;

  click(event) {
    this.boolean = !this.boolean;

    if (this.boolean) {
      event.target.className = 'red';
      this.color = 'Красный';
    } else {
      event.target.className = 'green';
      this.color = 'Зелёный';
    }

    console.log('boolean', this.boolean);
  }

}
