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
    authors: this.fb.array([ this.createAuthor() ], Validators.minLength(1)),
    pageCount: [''],
    imageUrl: [null],
    publisher: ['', Validators.maxLength(30)],
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
      firstName: ['', Validators.compose([
        Validators.required, Validators.maxLength(20)
      ])],
      lastName: ['', Validators.compose([
        Validators.required, Validators.maxLength(20)
      ])]
    });
  }

  addAuthor() {
    this.authors.push(this.createAuthor());
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
