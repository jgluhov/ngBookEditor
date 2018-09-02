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
  @Input() set src(path) {
    this.imageUrl = path;
  }

  handleError() {
    this.imageUrl = `${environment.placeholderUrl}`;
  }
}
