import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicfiltersComponent } from './dynamicfilters.component';

describe('DynamicfiltersComponent', () => {
  let component: DynamicfiltersComponent;
  let fixture: ComponentFixture<DynamicfiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicfiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicfiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
