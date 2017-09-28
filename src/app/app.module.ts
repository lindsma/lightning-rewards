import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MdDialogModule, MdButtonModule, MdSelectModule, MdIconModule, MdAutocompleteModule, MdProgressBarModule, MdExpansionModule, MdFormFieldModule, MdInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';
import { SendRewardComponent } from './dashboard/send-reward/send-reward.component';
import { RewardInboxComponent } from './dashboard/reward-inbox/reward-inbox.component';
import { ApproveRewardComponent } from './dashboard/approve-reward/approve-reward.component';
import { UserRewardsInventoryComponent } from './dashboard/user-rewards-inventory/user-rewards-inventory.component';
import { RedeemRewardsComponent } from './dashboard/user-rewards-inventory/redeem-rewards/redeem-rewards.component';
import { UsersService } from './shared/users.service';
import { DashboardService } from './shared/dashboard.service';
import { CardManagementService } from './shared/card-management.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    SendRewardComponent,
    RewardInboxComponent,
    ApproveRewardComponent,
    UserRewardsInventoryComponent,
    RedeemRewardsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    MdDialogModule,
    MdButtonModule,
    MdIconModule,
    MdAutocompleteModule,
    MdProgressBarModule,
    MdExpansionModule,
    MdFormFieldModule,
    MdInputModule,
    MdSelectModule,
    BrowserAnimationsModule,
  ],
  entryComponents: [
    RewardInboxComponent,
    ApproveRewardComponent,
    RedeemRewardsComponent,
    SendRewardComponent
  ],
  providers: [
    UsersService,
    DashboardService,
    CardManagementService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
