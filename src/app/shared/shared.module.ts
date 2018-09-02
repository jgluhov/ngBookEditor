import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './components/image/image.component';
import { InputComponent } from './components/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ImagePlaceholderDirective } from './directives/image-placeholder.directive';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ImageComponent, InputComponent, ImagePlaceholderDirective],
  exports: [ImageComponent, InputComponent, ImagePlaceholderDirective]
})
export class SharedModule { }
