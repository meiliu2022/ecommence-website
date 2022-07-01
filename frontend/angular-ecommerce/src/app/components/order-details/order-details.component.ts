import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/common/customer';
import { OrderItem } from 'src/app/common/order-item';
import { OrderService } from 'src/app/services/order.service';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/common/cart-item';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  orderNumber: string;
  orderId: number;
  orderItems: OrderItem[] = [];
  dateCreated: Date;
  totalPrice: number = 0;
  totalQuantity: number = 0;
  customer: Customer;

  constructor(private route: ActivatedRoute, 
    private orderService: OrderService,
    private cartService: CartService) { }

  ngOnInit(): void {

    this.orderNumber = this.route.snapshot.paramMap.get('number') || '';

    this.orderService.getOrderDetails(this.orderNumber).subscribe(
      data => {
        this.totalPrice = data.totalPrice;
        this.totalQuantity = data.totalQuantity;
        this.orderId = data.id;
        this.orderItems = data.orderItems;
        this.dateCreated = data.dateCreated;
        this.customer = data.customer;
      }
    );
  }

}
