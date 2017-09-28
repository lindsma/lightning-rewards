import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { RedeemRewardsComponent } from './redeem-rewards/redeem-rewards.component';

@Component({
  selector: 'app-user-rewards-inventory',
  templateUrl: './user-rewards-inventory.component.html',
  styleUrls: ['./user-rewards-inventory.component.scss']
})
export class UserRewardsInventoryComponent implements OnInit {
  
  test: string;

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
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
