import { Component, OnInit, Input } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { RedeemRewardsComponent } from './redeem-rewards/redeem-rewards.component';
import { DashboardComponent } from '../dashboard.component';
import { CardCalculationsService } from '../../shared/card-calculations.service';

@Component({
  selector: 'app-user-rewards-inventory',
  templateUrl: './user-rewards-inventory.component.html',
  styleUrls: ['./user-rewards-inventory.component.scss']
})
export class UserRewardsInventoryComponent implements OnInit {

  @Input() dashboardInfo: any;
  @Input() progress: number;
  test: string;
  totalSets: number;
  

  constructor(public dialog: MdDialog, public cardCalculationsService: CardCalculationsService) { }

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
    this.progress = this.cardCalculationsService.calculateProgress(this.dashboardInfo, this.totalSets);
  }

  calculateTotalSets() {
    this.totalSets = this.cardCalculationsService.calculateTotalSets(this.dashboardInfo);
  }
}
