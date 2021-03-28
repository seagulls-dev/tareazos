import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudlistComponent } from './crudlist.component';

describe('CrudlistComponent', () => {
  let component: CrudlistComponent;
  let fixture: ComponentFixture<CrudlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
