import { Component, OnInit, Input, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookModel } from '@books/models/book.model';
import { ValidateRange } from '@books/validations/range.validation';
import { ValidateGreaterThan } from '@books/validations/greater-than.vaidation';
import { ValidateGreaterThanDate } from '@books/validations/greater-than-date.validation';
import { ValidateISBN } from '@books/validations/isbn.validation';
import { ValidateYear } from '../../validations/year.validation';

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
    authors: this.fb.array([
      this.createAuthor()
    ], Validators.minLength(1)),
    pageCount: ['', Validators.compose([
      Validators.required,
      ValidateRange(1, 10000)
    ])],
    imageUrl: [null],
    publisher: ['', Validators.maxLength(30)],
    year: ['', Validators.compose([
      ValidateGreaterThan(1800), ValidateYear
    ])],
    releaseDate: ['', ValidateGreaterThanDate(new Date(1800, 0, 1))],
    isbn: ['', ValidateISBN]
  }, {
    updateOn: 'blur'
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
      this.validateAll(bookForm);
      return;
    }

    this.submitted.emit(book);
  }

  validateAll(formGroup: FormGroup) {
    Object.keys(formGroup.controls)
      .forEach(controlName => {
        const controlOrGroup = <FormGroup>formGroup.get(controlName);
          if (controlOrGroup.controls) {
            this.validateAll(controlOrGroup);
          }
          controlOrGroup.markAsDirty({ onlySelf: true });
        });
      }
}
