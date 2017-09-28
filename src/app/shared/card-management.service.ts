import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CardManagementService {

  constructor(private http: Http) { }
  

  getPendingReceiptCardDetails(userId: any): Observable<any> {
    return this.http.get(`http://lightningrewards.azurewebsites.net/api/Cards/Pending/Receipt?userId=${userId}`).map(res => res.json())
    .catch(e => Observable.throw(e.json().errors));
  }

  getPendingApprovalCardDetails(userId: any): Observable<any> {
    return this.http.get(`http://lightningrewards.azurewebsites.net/api/Cards/Pending/Approval?userId=${userId}`).map(res => res.json())
    .catch(e => Observable.throw(e.json().errors));
  }

  claimCard(cardId: any, headers: any): Observable<any> {
    return this.http.put(`http://lightningrewards.azurewebsites.net/api/Cards/Claim?cardId=${cardId}`, headers).map(res => res.json())
    .catch(e => Observable.throw(e.json().errors));
  }

  approveCard(cardId: any, headers: any): Observable<any> {
    return this.http.put(`http://lightningrewards.azurewebsites.net/api/Cards/Approve?cardId=${cardId}`, headers).map(res => res.json())
    .catch(e => Observable.throw(e.json().errors));
  }

  sendCard(card: any): Observable<any> {
    return this.http.post('http://lightningrewards.azurewebsites.net/api/Cards', card).map(res => res.json())
    .catch(e => Observable.throw(e.json().errors));
  }

  redeemCard(userId: any, headers: any): Observable<any> {
    return this.http.put(`http://lightningrewards.azurewebsites.net/api/Cards/Redeem?userId=${userId}`, headers).map(res => res.json())
    .catch(e => Observable.throw(e.json().errors));
  }
}
