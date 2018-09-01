import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers/index';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsModule } from '@ngrx/effects';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers),
        BooksModule,
        RouterTestingModule,
        EffectsModule.forRoot([])
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
