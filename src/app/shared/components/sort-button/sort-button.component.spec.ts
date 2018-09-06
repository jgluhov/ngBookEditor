import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SortButtonComponent } from './sort-button.component';
import { SortDirectionEnum } from '@shared/enums/sort-direction.enum';
import { FormGroup, FormControl } from '@angular/forms';

describe('SortButtonComponent', () => {
  let component: SortButtonComponent;
  let fixture: ComponentFixture<SortButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortButtonComponent ],
      providers: [{
        provide: 'SortDirectionEnum', useValue: SortDirectionEnum
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortButtonComponent);
    component = fixture.componentInstance;
    component.controlGroup = new FormGroup({
      some: new FormControl('')
    });
    component.controlName = 'some';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
