import { Component, OnInit, Inject, Input, Optional } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { CardManagementService } from '../../../shared/card-management.service';
import { DashboardComponent } from '../../dashboard.component';

@Component({
  selector: 'app-redeem-rewards',
  templateUrl: './redeem-rewards.component.html',
  styleUrls: ['./redeem-rewards.component.scss']
})
export class RedeemRewardsComponent implements OnInit {
  @Input() dashboardInfo: any;
  totalSets: number;
  confirmationView = false;
  confirmationCode: string;
  headers = {
    'Content-Type': 'application/json',
  }

  constructor(public dialogRef: MdDialogRef<RedeemRewardsComponent>, @Optional() @Inject(MD_DIALOG_DATA) public data: any, public cardManagementService: CardManagementService) { }

  ngOnInit() {
  }

  redeem() {
    const user = JSON.parse(localStorage.getItem('loggedIn'));
    this.cardManagementService.redeemCard(user.Id, this.headers).subscribe(res => {
      this.confirmationCode = res;
      this.confirmationView = true;
    })
  }

}
