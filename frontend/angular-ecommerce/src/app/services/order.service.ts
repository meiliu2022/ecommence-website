import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OrderItem } from 'src/app/common/order-item';
import { Customer } from '../common/customer';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderUrl = environment.luv2shopApiUrl + '/orders';

  constructor(private httpClient: HttpClient) { }

  getOrderDetails(orderNumber: string): Observable<GetResponseOrderDetails> {
    // need to build URL based on the customer email
    const orderDetailsUrl = `${this.orderUrl}/search/findByOrderTrackingNumber?projection=embedItem&number=${orderNumber}`;
  
    return this.httpClient.get<GetResponseOrderDetails>(orderDetailsUrl);
  }
}

interface GetResponseOrderDetails {
    "id": number,
    "orderTrackingNumber": string,
    "totalQuantity": number,
    "totalPrice": number,
    "orderItems": OrderItem[],
    "customer": Customer;
    "dateCreated": Date;
}
