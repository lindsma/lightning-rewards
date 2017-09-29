import { Component, OnInit, Output } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { RewardInboxComponent } from './reward-inbox/reward-inbox.component';
import { SendRewardComponent } from './send-reward/send-reward.component';
import { ApproveRewardComponent } from './approve-reward/approve-reward.component';
import { DashboardService } from '../shared/dashboard.service';
import { CardManagementService } from '../shared/card-management.service';
import { CardCalculationsService } from '../shared/card-calculations.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashboardInfo: any;
  pendingReceiptCards: any;
  pendingApprovalCards: any;
  progress: number;
  totalSets: number;

  user: any;
  isManager: boolean;
  loading = true;

  constructor(public dialog: MdDialog, public cardManagementService: CardManagementService, private dashboardService: DashboardService, private cardCalculationsService: CardCalculationsService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('loggedIn'));
    this.isManager = this.user.IsManager;
    
    this.dashboardService.getDashboardInfo(this.user.Id).subscribe(res => { 
      this.dashboardInfo = res;
      this.loading = false;
    });
  }

  openMyInboxModal() {
    this.cardManagementService.getPendingReceiptCardDetails(this.user.Id).subscribe(res => {
      this.pendingReceiptCards = res;
      let dialogRef = this.dialog.open(RewardInboxComponent, {
        width: '500px', 
        data: this.pendingReceiptCards
      });
      dialogRef.afterClosed().subscribe(result => {
        this.recalculateLetters();
        console.log(this.dashboardInfo);
        this.recalculateTotalSets();
        this.recalculateProgress();
      })
    });
  }

  recalculateProgress() {
    this.progress = this.cardCalculationsService.calculateProgress(this.dashboardInfo, this.totalSets);
  }

  recalculateTotalSets() {
    this.totalSets = this.cardCalculationsService.calculateTotalSets(this.dashboardInfo);
  }

  recalculateLetters() {
    this.dashboardService.getDashboardInfo(this.user.Id).subscribe(res => { 
      this.dashboardInfo = res;
    });
  }

  openSendRewardModal() {
    let dialogRef = this.dialog.open(SendRewardComponent, {
      width: '500px'
    });
  }

  openApproveRewardModal() {
    this.cardManagementService.getPendingApprovalCardDetails(this.user.Id).subscribe(res => {
      this.pendingApprovalCards = res;

      let dialogRef = this.dialog.open(ApproveRewardComponent, {
        width: '500px', 
        data: this.pendingApprovalCards
      });
      dialogRef.afterClosed().subscribe(result => {
        this.recalculateLetters();
      })
    })
  }
}
