import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendRewardComponent } from './send-reward.component';

describe('SendRewardComponent', () => {
  let component: SendRewardComponent;
  let fixture: ComponentFixture<SendRewardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendRewardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendRewardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
