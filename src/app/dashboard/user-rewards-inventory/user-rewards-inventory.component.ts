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

  @Input() dashboardInfo: any;
  test: string;
  totalSets: number;
  progress: number;

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
    this.calculateTotalSets();
    this.calculateProgress();
  }

  openRedeemRewardsModal() {
    let dialogRef = this.dialog.open(RedeemRewardsComponent, {
      width: '500px', 
      data: this.totalSets
    });

    dialogRef.afterClosed().subscribe(result => {
      this.calculateTotalSets();
    })
  }

  calculateProgress() {

  }

  calculateTotalSets() {
    let countArray = [];

    for (var letter in this.dashboardInfo.Letters) {
      countArray.push(this.dashboardInfo.Letters[letter]);
    }

    if (countArray.length) {
      this.totalSets = countArray.reduce((a, b) => {
        return Math.min(a, b);
      });
    } else {
      this.totalSets = 0;
    }
  }

}
