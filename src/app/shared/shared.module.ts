import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './components/image/image.component';
import { InputComponent } from './components/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FileComponent } from './components/file/file.component';
import { ButtonComponent } from './components/button/button.component';
import { SortButtonComponent } from './components/sort-button/sort-button.component';
import { SortDirectionEnum } from './enums/sort-direction.enum';
import { FormArrayComponent } from './components/form-array/form-array.component';

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
    SortButtonComponent,
    FormArrayComponent
  ],
  exports: [
    ImageComponent,
    InputComponent,
    FileComponent,
    ButtonComponent,
    SortButtonComponent,
    FormArrayComponent
  ],
  providers: [{
    provide: 'SortDirectionEnum', useValue: SortDirectionEnum
  }]
})
export class SharedModule { }
