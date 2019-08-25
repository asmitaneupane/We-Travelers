import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabRegisterComponent } from './cab-register.component';

describe('CabRegisterComponent', () => {
  let component: CabRegisterComponent;
  let fixture: ComponentFixture<CabRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
