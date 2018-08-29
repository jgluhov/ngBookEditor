import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePreloadDirective } from './directives/image-preload.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ImagePreloadDirective],
  exports: [ImagePreloadDirective]
})
export class SharedModule { }
