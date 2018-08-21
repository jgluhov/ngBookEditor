import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <app-book-list></app-book-list>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
