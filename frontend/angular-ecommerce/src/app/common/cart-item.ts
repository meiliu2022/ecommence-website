import { Product } from "./product";
import { OrderItem } from './order-item';

export class CartItem {

    id?: string;
    name?: string;
    imageUrl?: string;
    unitPrice?: number = 0;
    quantity: number = 0;
    constructor(input: Product | OrderItem) { 
        if ("productId" in input) {
            this.fromOrderItem(input);
        } else {
            this.fromProduct(input);
        }
    }

    fromProduct(product: Product) {
        this.id = product.id;
        this.name = product.name;
        this.imageUrl = product.imageUrl;
        this.unitPrice = product.unitPrice;
        this.quantity = 1;
    }

    fromOrderItem(orderItem: OrderItem) {
        this.id = orderItem.productId;
        this.name = orderItem.name;
        this.imageUrl = orderItem.imageUrl;
        this.unitPrice = orderItem.unitPrice;
        this.quantity = orderItem.quantity;
    }

}
