import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { BookModel } from '@books/models/book.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  selectedBook: BookModel;
  imageUrl = '';
  @Input() set book(book: BookModel) {
    if (book) {
      this.bookForm.patchValue(book);
      this.imageUrl = book.imageUrl;
    }
  }

  bookForm = this.fb.group({
    title: [''],
    authors: this.fb.array([ this.createAuthor() ]),
    pageCount: [''],
    imageUrl: [null],
    publisher: [''],
    year: [''],
    releaseDate: ['']
  });

  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef) { }

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
