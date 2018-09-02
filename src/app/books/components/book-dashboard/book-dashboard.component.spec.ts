import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDashboardComponent } from './book-dashboard.component';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { SharedModule } from '@root/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from '@reducers';

describe('BookDashboardComponent', () => {
  let component: BookDashboardComponent;
  let fixture: ComponentFixture<BookDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        SharedModule,
        StoreModule.forRoot(reducers)
      ],
      declarations: [
        BookDashboardComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDashboardComponent);
    component = fixture.componentInstance;
    component.dashboardForm = new FormGroup({
      searchTerm: new FormControl('')
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
