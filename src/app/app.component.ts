import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})

export class AppComponent {
  color = 'Получить';
  boolean = false;
  public save = localStorage.getItem('localstorage');

  submit(formJson) {
    localStorage.setItem('localstorage', formJson.value.locastorage);
    this.save = formJson.value.locastorage;
    console.log('this.save', this.save);
  }

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
