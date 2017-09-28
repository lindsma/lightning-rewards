import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CardManagementService {

  constructor(private http: Http) { }

  getPendingReceiptCardDetails(): Observable<any> {
    return this.http.get('http://lightningrewards.azurewebsites.net/api/Cards/Pending/Receipt').do(res => {
      console.log(res);
    })
  }

  getPendingApprovalCardDetails(): Observable<any> {
    return this.http.get('http://lightningrewards.azurewebsites.net/api/Cards/Pending/Approval').do(res => {
      console.log(res);
    })
  }

  claimCard(cardId: any): Observable<any> {
    return this.http.put('http://lightningrewards.azurewebsites.net/api/Cards/Claim', cardId).do(res => {
      console.log(res);
    })
  }

  approveCard(cardId: any): Observable<any> {
    return this.http.put('http://lightningrewards.azurewebsites.net/api/Cards/Approve', cardId).do(res => {
      console.log(res);
    })
  }

  sendCard(card: any): Observable<any> {
    return this.http.post('http://lightningrewards.azurewebsites.net/api/Cards', card).do(res => {
      console.log(res);
    })
  }

  redeemCard(card: any): Observable<any> {
    return this.http.post('http://lightningrewards.azurewebsites.net/api/Cards/Redeem', card).do(res => {
      console.log(res);
    })
  }





}
