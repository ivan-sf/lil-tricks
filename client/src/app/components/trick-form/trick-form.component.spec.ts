import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrickFormComponent } from './trick-form.component';

describe('TrickFormComponent', () => {
  let component: TrickFormComponent;
  let fixture: ComponentFixture<TrickFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrickFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrickFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
