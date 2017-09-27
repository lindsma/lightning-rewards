import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardInboxComponent } from './reward-inbox.component';

describe('RewardInboxComponent', () => {
  let component: RewardInboxComponent;
  let fixture: ComponentFixture<RewardInboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RewardInboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
