import { Component, OnInit, Input, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { BookModel } from '@books/models/book.model';
import { ValidateRange } from '@books/validations/range.validation';
import { ValidateGreaterThan } from '@books/validations/greater-than.vaidation';
import { ValidateGreaterThanDate } from '../../validations/greater-than-date.validation';

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
    pageCount: ['', Validators.compose([
      Validators.required,
      ValidateRange(0, 10000)
    ])],
    imageUrl: [null],
    publisher: ['', Validators.maxLength(30)],
    year: ['', ValidateGreaterThan(1800)],
    releaseDate: ['', ValidateGreaterThanDate(new Date(1800, 0, 1))]
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
    Object.keys(formGroup.controls).forEach(controlName => {
      const controlOrGroup = <FormGroup>formGroup.controls[controlName];
        if (controlOrGroup.controls) {
          this.validateAll(controlOrGroup);
        }
        controlOrGroup.markAsDirty({ onlySelf: true });
      });
    }
  }

}
