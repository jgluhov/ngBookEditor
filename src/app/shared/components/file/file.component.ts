import { Component, OnInit, Input, ChangeDetectorRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-file',
  template: `
    <div [formGroup]="controlGroup" class="file__container">
      <input type="file" (change)="handleFileChange($event)" #fileInput class="file__input"/>
      <app-button type="button" (clicked)="handleClick($event)" class="file__button">Select cover</app-button>
      <span *ngIf="!filename">No cover choosen</span>
    </div>
  `,
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {
  filename: string;
  @Input() controlGroup: FormGroup;
  @Input() controlName: string;
  @ViewChild('fileInput') fileInput;
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
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
