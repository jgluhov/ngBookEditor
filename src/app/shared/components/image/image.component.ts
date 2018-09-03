import { Component, Input } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-image',
  template: `
    <img [src]="imageUrl" class="image" (error)="handleError()">
  `,
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
  imageUrl: string;
  placeholderUrl = `${environment.placeholderUrl}`;
  @Input() set src(path) {
    this.imageUrl = path || this.placeholderUrl;
  }

  handleError() {
    this.imageUrl = this.placeholderUrl;
  }
}
