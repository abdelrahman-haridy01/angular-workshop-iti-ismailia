import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsExpComponent } from './forms-exp.component';

describe('FormsExpComponent', () => {
  let component: FormsExpComponent;
  let fixture: ComponentFixture<FormsExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
