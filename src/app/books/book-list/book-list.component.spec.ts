import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListComponent } from './book-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '@reducers';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        StoreModule.forRoot(reducers, { metaReducers }),
      ],
      declarations: [ BookListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
