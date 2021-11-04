import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStaduimComponent } from './add-staduim.component';

describe('AddStaduimComponent', () => {
  let component: AddStaduimComponent;
  let fixture: ComponentFixture<AddStaduimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStaduimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStaduimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
