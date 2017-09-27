import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';
import { SendRewardComponent } from './send-reward/send-reward.component';
import { RewardInboxComponent } from './reward-inbox/reward-inbox.component';
import { ApproveRewardComponent } from './approve-reward/approve-reward.component';
import { UserRewardsInventoryComponent } from './user-rewards-inventory/user-rewards-inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    SendRewardComponent,
    RewardInboxComponent,
    ApproveRewardComponent,
    UserRewardsInventoryComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
