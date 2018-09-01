import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFormPageComponent } from './book-form-page.component';
import { CommonModule, Location } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

describe('BookFormComponent', () => {
  let component: BookFormPageComponent;
  let fixture: ComponentFixture<BookFormPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ReactiveFormsModule
      ],
      declarations: [
        BookFormPageComponent
      ],
      providers: [
        {
          provide: Location, useValue: window.location
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
