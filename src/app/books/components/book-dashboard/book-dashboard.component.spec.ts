import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BookDashboardComponent } from './book-dashboard.component';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from '@reducers';
import { RouterTestingModule } from '@angular/router/testing';
import { BookService } from '@books/services/book.service';
import { of } from 'rxjs';

describe('BookDashboardComponent', () => {
  let component: BookDashboardComponent;
  let fixture: ComponentFixture<BookDashboardComponent>;
  let bookServiceMock;

  beforeEach(async(() => {
    bookServiceMock = {
      searchBook: () => {},
      getDashboardState: () => of({})
    };

    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        SharedModule,
        StoreModule.forRoot(reducers),
        RouterTestingModule
      ],
      declarations: [
        BookDashboardComponent
      ],
      providers: [{
        provide: BookService, useValue: bookServiceMock
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDashboardComponent);
    component = fixture.componentInstance;
    component.dashboardForm = new FormGroup({
      searchTerm: new FormControl(''),
      titleSorting: new FormControl(''),
      yearSorting: new FormControl('')
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
