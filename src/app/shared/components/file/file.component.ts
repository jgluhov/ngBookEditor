import { Component, OnInit, Input, ChangeDetectorRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-file',
  template: `
    <div [formGroup]="controlGroup" class="file__container form-group">
      <input type="file" (change)="handleFileChange($event)" #fileInput class="file__input"/>
      <app-button type="button" (clicked)="handleClick($event)" class="file__button">Select cover</app-button>
      <span *ngIf="isEmpty()">No cover choosen</span>
      <span *ngIf="!isEmpty()">{{file.name}}</span>
    </div>
  `,
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {
  file: File = null;
  @Input() controlGroup: FormGroup;
  @Input() controlName: string;
  @ViewChild('fileInput') fileInput;
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  isEmpty() {
    return !this.file;
  }

  handleClick(evt: MouseEvent) {
    this.fileInput.nativeElement.click();
  }

  handleFileChange(evt: Event) {
    const reader = new FileReader();
    const inputEl = <HTMLInputElement>evt.target;
    const files = inputEl.files;

    if (inputEl.files && inputEl.files.length) {
      const [file] = [].slice.call(inputEl.files);
      this.file = file;

      reader.readAsDataURL(file);

      reader.onload = () => {
        this.controlGroup.patchValue({
          [this.controlName]: reader.result
        });

        this.cd.markForCheck();
      };
    }
  }

}
