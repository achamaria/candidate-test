import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RugformComponent } from './rugform.component';

describe('RugformComponent', () => {
  let component: RugformComponent;
  let fixture: ComponentFixture<RugformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RugformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RugformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
