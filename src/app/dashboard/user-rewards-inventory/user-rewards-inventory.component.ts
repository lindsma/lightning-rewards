import { Component, OnInit, Input } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { RedeemRewardsComponent } from './redeem-rewards/redeem-rewards.component';
import { DashboardComponent } from '../dashboard.component';

@Component({
  selector: 'app-user-rewards-inventory',
  templateUrl: './user-rewards-inventory.component.html',
  styleUrls: ['./user-rewards-inventory.component.scss']
})
export class UserRewardsInventoryComponent implements OnInit {

  @Input() dashboardInfo: DashboardComponent;
  test: string;

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
    console.log(this.dashboardInfo);
  }

  openRedeemRewardsModal() {
    let dialogRef = this.dialog.open(RedeemRewardsComponent, {
      width: '500px', 
      data: { test: 'test string', name: 'lindsey'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('closed!');
      this.test = result;
    })
  }

  calculateProgress() {

  }

}
