import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveRewardComponent } from './approve-reward.component';

describe('ApproveRewardComponent', () => {
  let component: ApproveRewardComponent;
  let fixture: ComponentFixture<ApproveRewardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveRewardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveRewardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
