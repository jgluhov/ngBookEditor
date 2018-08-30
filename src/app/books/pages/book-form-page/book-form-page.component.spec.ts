import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFormPageComponent } from './book-form-page.component';

describe('BookFormComponent', () => {
  let component: BookFormPageComponent;
  let fixture: ComponentFixture<BookFormPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookFormPageComponent
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
