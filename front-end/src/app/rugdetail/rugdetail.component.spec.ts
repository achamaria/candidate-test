import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RugdetailComponent } from './rugdetail.component';

describe('RugdetailComponent', () => {
  let component: RugdetailComponent;
  let fixture: ComponentFixture<RugdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RugdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RugdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
