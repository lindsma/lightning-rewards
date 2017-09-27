import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MdDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';
import { SendRewardComponent } from './dashboard/send-reward/send-reward.component';
import { RewardInboxComponent } from './dashboard/reward-inbox/reward-inbox.component';
import { ApproveRewardComponent } from './dashboard/approve-reward/approve-reward.component';
import { UserRewardsInventoryComponent } from './dashboard/user-rewards-inventory/user-rewards-inventory.component';
import { RedeemRewardsComponent } from './dashboard/user-rewards-inventory/redeem-rewards/redeem-rewards.component';

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
    AppRoutingModule,
    MdDialogModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    RewardInboxComponent,
    ApproveRewardComponent,
    RedeemRewardsComponent
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
