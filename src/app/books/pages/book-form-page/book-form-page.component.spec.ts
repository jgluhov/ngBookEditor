import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFormPageComponent } from './book-form-page.component';
import { CommonModule, Location } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { reducers } from '@reducers';
import { StoreModule } from '@ngrx/store';
import { BookFormComponent } from '@books/components/book-form/book-form.component';
import { SharedModule } from '../../../shared/shared.module';

describe('BookFormPageComponent', () => {
  let component: BookFormPageComponent;
  let fixture: ComponentFixture<BookFormPageComponent>;
  let routeMock;

  beforeEach(async(() => {
    routeMock = {
      paramMap: of({
        get: () => 'id'
      })
    };

    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        StoreModule.forRoot(reducers),
        SharedModule
      ],
      declarations: [
        BookFormPageComponent,
        BookFormComponent
      ],
      providers: [
        {
          provide: Location, useValue: window.location
        },
        {
          provide: ActivatedRoute, useValue: routeMock
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
