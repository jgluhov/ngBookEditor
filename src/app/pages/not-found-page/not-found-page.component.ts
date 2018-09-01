import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  template: `
    <div class="not-found-container">
      Page not Found
    </div>
  `,
  styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
