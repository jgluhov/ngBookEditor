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
  placeholderUrl = `${environment.baseUrl}${environment.placeholderUrl}`;
  @Input() set src(path) {
    if (path && path.includes('base64')) {
      this.imageUrl = path;
    } else if (path) {
      this.imageUrl = `${environment.baseUrl}${path}`;
    } else {
      this.imageUrl = this.placeholderUrl;
    }
  }

  handleError() {
    this.imageUrl = this.placeholderUrl;
  }
}
