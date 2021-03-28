import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeProviderComponent } from './become-provider.component';

describe('BecomeProviderComponent', () => {
  let component: BecomeProviderComponent;
  let fixture: ComponentFixture<BecomeProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecomeProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
