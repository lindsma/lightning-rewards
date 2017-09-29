import { Component, OnInit, Inject, Input } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { CardManagementService } from '../../shared/card-management.service';
import { DashboardComponent } from '../dashboard.component';




@Component({
  selector: 'app-reward-inbox',
  templateUrl: './reward-inbox.component.html',
  styleUrls: ['./reward-inbox.component.scss']
})
export class RewardInboxComponent implements OnInit {
  @Input() dashboardInfo: any;

  scratched = false;
  currentCard: any;
  headers = {
    'Content-Type': 'application/json',
  }

  constructor(public dialogRef: MdDialogRef<RewardInboxComponent>, @Inject(MD_DIALOG_DATA) public data: any, public cardManagementService: CardManagementService) { }

  ngOnInit() {
    if(this.data.length > 0){
      this.currentCard = this.data[0];
    }
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }

  scratch() {
    this.scratched = true;
    this.cardManagementService.claimCard(this.currentCard.Id, this.headers).subscribe();
  }

  nextCard() {
    this.scratched = false;
    this.currentCard = this.data[this.data.indexOf(this.currentCard) + 1];
  }
}
