import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { DashboardService } from './dashboard.service';

@Injectable()
export class DashboardResolve implements Resolve<any> {

  constructor(private dashboardService: DashboardService) {}

  resolve() {
    const user = JSON.parse(localStorage.getItem('loggedIn'))
    return this.dashboardService.getDashboardInfo(user.Id);
  }
}