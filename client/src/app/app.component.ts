import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo';
  items = [
    { who: 'ron', what: 'One', when: '2020-10-31' },
    { who: 'ron', what: 'Two', when: '2020-10-31' },
    { who: 'ron', what: 'Three', when: '2020-10-31' },
    { who: 'ron', what: 'Four', when: '2020-10-31' },
    { who: 'ron', what: 'Five', when: '2020-10-31' },
    { who: 'ron', what: 'Six', when: '2020-10-31' },
  ];
}
