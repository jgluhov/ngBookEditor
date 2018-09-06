import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './components/image/image.component';
import { InputComponent } from './components/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FileComponent } from './components/file/file.component';
import { ButtonComponent } from './components/button/button.component';
import { SortButtonComponent } from './components/sort-button/sort-button.component';
import { SortDirectionEnum } from './enums/sort-direction.enum';

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
    SortButtonComponent
  ],
  exports: [
    ImageComponent,
    InputComponent,
    FileComponent,
    ButtonComponent,
    SortButtonComponent
  ],
  providers: [{
    provide: 'SortDirectionEnum', useValue: SortDirectionEnum
  }]
})
export class SharedModule { }
