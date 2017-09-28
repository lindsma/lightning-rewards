import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { RewardInboxComponent } from './reward-inbox/reward-inbox.component';
import { SendRewardComponent } from './send-reward/send-reward.component';
import { ApproveRewardComponent } from './approve-reward/approve-reward.component';
import { DashboardService } from '../shared/dashboard.service';
import { CardManagementService } from '../shared/card-management.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  test: string;
  pendingReceiptCards: any;
  user: any;
  dashboardInfo: any;
  loading = true;

  constructor(public dialog: MdDialog, public cardManagementService: CardManagementService, private dashboardService: DashboardService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('loggedIn'));
    this.dashboardService.getDashboardInfo(this.user.Id).subscribe(res => { 
      this.dashboardInfo = res;
      this.loading = false;
    });
  }

  openMyInboxModal() {
    this.cardManagementService.getPendingReceiptCardDetails(JSON.parse(localStorage.getItem('loggedIn')).Id).subscribe(res => {
      this.pendingReceiptCards = res;
      let dialogRef = this.dialog.open(RewardInboxComponent, {
        width: '500px', 
        data: this.pendingReceiptCards
      });
  
      dialogRef.afterClosed().subscribe(result => {
        this.test = result;
      })
    });
  }

  openSendRewardModal() {
    let dialogRef = this.dialog.open(SendRewardComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.test = result;
    })
  }

  openApproveRewardModal() {
    let dialogRef = this.dialog.open(ApproveRewardComponent, {
      width: '500px', 
      data: { test: 'test string', name: 'lindsey'}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.test = result;
    })
  }

}
