import { Component, OnInit, Input, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { CardManagementService } from '../../shared/card-management.service';
import { DashboardComponent } from '../dashboard.component';


@Component({
  selector: 'app-approve-reward',
  templateUrl: './approve-reward.component.html',
  styleUrls: ['./approve-reward.component.scss']
})
export class ApproveRewardComponent implements OnInit {
  @Input() dashboardInfo: any;
  cards: any;
  headers = {
    'Content-Type': 'application/json',
  }

  constructor(public dialogRef: MdDialogRef<ApproveRewardComponent>, @Inject(MD_DIALOG_DATA) public data: any, public cardManagementService: CardManagementService) { }

  ngOnInit() {
    console.log(this.data);
    
    this.cards = this.data;
  }

  approveIndividual(card: any) {
    this.cardManagementService.approveCard(card.Id, this.headers).subscribe();
  }

  approveAll() {
    const user = JSON.parse(localStorage.getItem('loggedIn'));
    this.cardManagementService.approveAllCards(user.Id, this.headers).subscribe(res => {
      this.dialogRef.close();
    });
  }
 
}
