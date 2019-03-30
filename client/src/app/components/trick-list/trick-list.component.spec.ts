import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrickListComponent } from './trick-list.component';

describe('TrickListComponent', () => {
  let component: TrickListComponent;
  let fixture: ComponentFixture<TrickListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrickListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrickListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
