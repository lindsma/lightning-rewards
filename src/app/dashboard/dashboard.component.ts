import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { RewardInboxComponent } from './reward-inbox/reward-inbox.component';
import { SendRewardComponent } from './send-reward/send-reward.component';
import { ApproveRewardComponent } from './approve-reward/approve-reward.component';
import { CardManagementService } from '../shared/card-management.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  test: string;
  
  constructor(public dialog: MdDialog, public cardManagementService: CardManagementService) { }

  ngOnInit() {
  }

  openMyInboxModal() {
    var pendingReceiptCardDetails = this.cardManagementService.getPendingReceiptCardDetails(localStorage.getItem('loggedIn')['Id']);
    let dialogRef = this.dialog.open(RewardInboxComponent, {
      width: '500px', 
      data: { test: 'test string', name: 'lindsey'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('closed!');
      this.test = result;
    })
  }

  openSendRewardModal() {
    let dialogRef = this.dialog.open(SendRewardComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('closed!');
      this.test = result;
    })
  }

  openApproveRewardModal() {
    let dialogRef = this.dialog.open(ApproveRewardComponent, {
      width: '500px', 
      data: { test: 'test string', name: 'lindsey'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('closed!');
      this.test = result;
    })
  }

}
