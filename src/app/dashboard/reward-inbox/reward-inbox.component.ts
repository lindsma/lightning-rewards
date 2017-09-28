import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-reward-inbox',
  templateUrl: './reward-inbox.component.html',
  styleUrls: ['./reward-inbox.component.scss']
})
export class RewardInboxComponent implements OnInit {

  scratched = false;

  constructor(public dialogRef: MdDialogRef<RewardInboxComponent>, @Inject(MD_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }

  scratch() {
    this.scratched = true;
  }

}
