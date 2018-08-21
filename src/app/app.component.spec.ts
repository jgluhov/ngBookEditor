import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BookModule } from './book/book.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers/index';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers),
        BookModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
