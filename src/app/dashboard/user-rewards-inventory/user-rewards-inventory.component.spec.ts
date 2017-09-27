import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRewardsInventoryComponent } from './user-rewards-inventory.component';

describe('UserRewardsInventoryComponent', () => {
  let component: UserRewardsInventoryComponent;
  let fixture: ComponentFixture<UserRewardsInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRewardsInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRewardsInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
