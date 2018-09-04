import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './components/image/image.component';
import { InputComponent } from './components/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FileComponent } from './components/file/file.component';
import { ButtonComponent } from './components/button/button.component';
import { SortIconComponent } from './components/sort-icon/sort-icon.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    ImageComponent,
    InputComponent,
    FileComponent,
    ButtonComponent,
    SortIconComponent
  ],
  exports: [
    ImageComponent,
    InputComponent,
    FileComponent,
    ButtonComponent,
    SortIconComponent
  ]
})
export class SharedModule { }
