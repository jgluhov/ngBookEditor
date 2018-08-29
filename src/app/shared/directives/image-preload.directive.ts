import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appImagePreload]'
})
export class ImagePreloadDirective {
  @HostListener('error', ['$event']) handleLoad(evt) {
    console.log(evt);
  }
}
