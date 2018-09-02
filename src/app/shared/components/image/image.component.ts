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
  base64regex: RegExp = /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?/;
  @Input() set src(path) {
    if (this.isBase64(path)) {
      this.imageUrl = path;
    } else {
      this.imageUrl = `${environment.baseUrl}${path}`;
    }
  }

  handleError() {
    this.imageUrl = `${environment.placeholderUrl}`;
  }

  isBase64(path: string) {
    return this.base64regex.test(path);
  }
}
