import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileComponent } from './file.component';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';

describe('FileComponent', () => {
  let component: FileComponent;
  let fixture: ComponentFixture<FileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ FileComponent, ButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileComponent);
    component = fixture.componentInstance;
    component.controlGroup = new FormGroup({});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
