import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { CardManagementService } from '../../shared/card-management.service';
import { UsersService } from '../../shared/users.service';
import { DashboardComponent } from '../dashboard.component';


@Component({
  selector: 'app-send-reward',
  templateUrl: './send-reward.component.html',
  styleUrls: ['./send-reward.component.scss']
})
export class SendRewardComponent implements OnInit {

  message: string;
  senderId: number;
  receiverId: number;
  managerId: number;
  managers = [];
  selectedManager: any;
  selectedRecipient: any;
  filteredOptions = [];

  constructor(public dialogRef: MdDialogRef<SendRewardComponent>, @Inject(MD_DIALOG_DATA) public data: any, public cardManagementService: CardManagementService, public usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getAllManagers().subscribe(res => {
      this.managers = res;
    });

    this.senderId = JSON.parse(localStorage.getItem('loggedIn'));
    
  }

  autocomplete(inputValue: string) {
    this.usersService.getUsersFromAutocompleteQuery(inputValue).subscribe(res => {
      this.filteredOptions = res;
    });
    
  }

  sendReward() { 
    const card = {
      message: this.message,
      senderId: this.senderId,
      receiverId: this.selectedRecipient,
      managerId: this.selectedManager
    }

    this.cardManagementService.sendCard(card).subscribe(res => {
      this.dialogRef.close();
    });
    
  }

}
