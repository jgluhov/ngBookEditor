import { Component, OnInit, Input, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookModel } from '@books/models/book.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  selectedBook: BookModel;
  imageUrl = '';
  @Output() submitted = new EventEmitter<BookModel>();
  @Input() set book(book: BookModel) {
    if (book) {
      this.bookForm.patchValue(book);
      this.imageUrl = book.imageUrl;
    }
  }

  bookForm = this.fb.group({
    id: [''],
    title: ['', Validators.compose([
      Validators.required,
      Validators.maxLength(30)
    ])],
    authors: this.fb.array([ this.createAuthor() ]),
    pageCount: [''],
    imageUrl: [null],
    publisher: [''],
    year: [''],
    releaseDate: ['']
  });

  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.bookForm.valueChanges
      .subscribe((book: BookModel) => {
        this.imageUrl = book.imageUrl;
      });
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

  handleSubmit(bookForm: FormGroup): void {
    const book: BookModel = bookForm.value;

    if (bookForm.invalid) {
      console.log('invalid');
      return;
    }


    console.log(bookForm);
    // this.submitted.emit(book);
  }

}
