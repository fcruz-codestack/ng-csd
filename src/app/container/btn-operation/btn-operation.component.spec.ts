import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOperationComponent } from './btn-operation.component';

describe('BtnOperationComponent', () => {
  let component: BtnOperationComponent;
  let fixture: ComponentFixture<BtnOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
