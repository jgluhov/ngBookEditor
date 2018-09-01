import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  @Input() set book(value) {
    if (value) {
      this.bookForm.patchValue(value);
    }
  }

  bookForm = this.fb.group({
    title: [''],
    authors: this.fb.array([ this.createAuthor() ]),
    pageCount: [''],
    publisher: [''],
    year: [''],
    releaseDate: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  createAuthor() {
    return this.fb.group({
      firstName: [''],
      lastName: ['']
    });
  }

  get authors(): FormArray {
    return this.bookForm.get('authors') as FormArray;
  }

}
